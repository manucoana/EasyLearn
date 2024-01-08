const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer');
const path = require('path');

const {
  insertUser,
  getUserById,
  getAllUsers,
  getUserByEmail,
  loginUser,
  getUserTypeByEmail
} = require('./model/utilizator');

const {
  getVizibilitate
} = require('./model/anunt');

const {
  getNumeElevi
} = require('./model/elev');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.error("Eroare la conectarea cu baza de date: ", error);
  } else {
    console.log("Conectat la baza de date");
  }
});

app.post("/api/users", (req, res) => {
  const { nume, varsta, oras, descriere, email, parola } = req.body;

  const sql = insertUser(nume, varsta, oras, descriere, email, parola);
  const values = [nume, varsta, oras, descriere, email, parola];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error("Eroare la introducerea datelor: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Datele au fost introduse cu succes");
      res.status(200).send("Data inserted successfully");
    }
  });
});

app.get("/api/users", (req, res) => {
  const sql = getAllUsers();

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Eroare la interogarea bazei de date: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Date obtinute cu succes");
      res.status(200).send(results);
    }
  });
});


app.get('/api/userType/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const sql = getUserTypeByEmail(email);
    const values = [email];

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error('Eroare la interogarea bazei de date: ', error);
        res.status(500).send('Internal Server Error');
      } else if (results.length > 0) {
        const userType = results[0].descriere;
        res.status(200).json({ userType });
      } else {
        res.status(404).send('User type not found');
      }
    });
  } catch (error) {
    console.error('Eroare în timpul interogării:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/profil/:email', (req, res) => {
  const email = req.params.email;

  const sql = 'SELECT * FROM easylearn_users WHERE email = ?';
  const values = [email];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Eroare la interogarea bazei de date: ', error);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.status(200).send(results[0]);
    } else {
      res.status(404).send('Profile not found');
    }
  });
});

app.get("/api/vizibilitate", (req, res) => {
  const vizibilitate = req.params.email;

  const sql = getVizibilitate(vizibilitate);
  const values = [vizibilitate];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Eroare la interogarea bazei de date: ", error);
      res.status(500).send("Internal Server Error");
    } else if (results.length === 0) {
      console.log("Unauthorized");
      res.status(401).send("Unauthorized");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(results));
    }
  });
});

app.get("/api/elevi/:nume_profesor", (req, res) => {
  const nume_profesor = req.params.nume_profesor;

  const sql = getNumeElevi(nume_profesor);

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Eroare la interogarea bazei de date: ", error);
      res.status(500).send("Internal Server Error");
    } else if (results.length === 0) {
      console.log("Unauthorized");
      res.status(401).send("Unauthorized");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(results));
    }
  });
});


app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = loginUser(email, password);
  const values = [email, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Eroare la interogarea bazei de date: ", error);
      res.status(500).send("Internal Server Error");
    } else if (results.length === 0) {
      console.log("Email sau parola invalide");
      res.status(401).send("Invalid email or password");
    } else {
      console.log("Login realizat cu succes");
      res.status(200).send(results);
    }
  });
});

const upload = multer({ dest: 'uploads/' });

app.post('/api/uploads', upload.single('file'), (req, res) => {
  const file = req.file;

  const imageUrl = `http://localhost:3001/uploads/${file.filename}`;
  res.status(200).json({ imageUrl });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serverul ruleaza pe portul ${PORT}`);
});