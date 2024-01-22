const express = require('express');
const router = express.Router();
const connection = require('../../db');
const { getVizibilitate, setVizibilitateTrue, setVizibilitateFalse } = require('../../model/anunt');

router.get("/", (req, res) => {
  const vizibilitate = req.params.email;
  const sql = getVizibilitate(vizibilitate);
  const values = [vizibilitate];

  connection.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error");
    } else if (results.length === 0) {
      res.status(401).send("Unauthorized");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(results));
    }
  });
});

router.post("/setVizibilitateTrue", (req, res) => {
  const { email } = req.body;
  const sql = setVizibilitateTrue(email);

  connection.query(sql, (error, result) => {
    if (error) {
      console.error("Eroare la actualizarea datelor: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Vizibilitate setata cu succes");
      res.status(200).send("Visibility set successfully");
    }
  });
});

router.post("/setVizibilitateFalse", (req, res) => {
  const { email } = req.body;
  const sql = setVizibilitateFalse(email);

  connection.query(sql, (error, result) => {
    if (error) {
      console.error("Eroare la actualizarea datelor: ", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Vizibilitate setata cu succes");
      res.status(200).send("Visibility set successfully");
    }
  });
});

module.exports = router;
