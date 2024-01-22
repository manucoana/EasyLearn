const express = require('express');
const router = express.Router();
const connection = require('../../db');
const cors = require('cors');
const { insertUser } = require('../../model/utilizator');

router.post("/", async (req, res) => {
  try {
    const { nume, varsta, oras, tip_utilizator, email, parola } = req.body;
    const sql = insertUser(nume, varsta, oras, tip_utilizator, email, parola);
    const values = [nume, varsta, oras, tip_utilizator, email, parola];

    connection.query(sql, values, (error, result) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Data inserted successfully");
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
