const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer');
const path = require('path');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "proiect",
  database: "mydb",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
  } else {
    console.log("Connected to database");
  }
});

app.post("/api/users", (req, res) => {
  const { nume, varsta, oras, descriere, email, parola } = req.body;

  const sql = `INSERT INTO easylearn_users (nume, varsta, oras, descriere, email, parola) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [nume, varsta, oras, descriere, email, parola];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error("Error inserting data: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Data inserted successfully");
      res.status(200).send("Data inserted successfully");
    }
  });
});

app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM easylearn_users";

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error querying database: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Retrieved data successfully");
      res.status(200).send(results);
    }
  });
});

app.get('/api/profil/:email', (req, res) => {
  const email = req.params.email;

  const sql = 'SELECT * FROM easylearn_users WHERE email = ?';
  const values = [email];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error querying database: ', error);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.status(200).send(results[0]);
    } else {
      res.status(404).send('Profile not found');
    }
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM easylearn_users WHERE email = ? AND parola = ?";
  const values = [email, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error querying database: ", error);
      res.status(500).send("Internal Server Error");
    } else if (results.length === 0) {
      console.log("Invalid email or password");
      res.status(401).send("Invalid email or password");
    } else {
      console.log("Login successful");
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

app.listen(3001, () => {
  console.log("Server running on port 3001");
});