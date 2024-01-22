const express = require('express');
const router = express.Router();
const { insertProfil } = require('../../model/profil');
const connection = require('../../db');

router.post('/', async (req, res) => {
  try {
    const { nume, titlu, cale } = req.body;
    const sql = insertProfil( nume, titlu, cale);
    const values = [ nume, titlu, cale];

    connection.query(sql, values, (error, result) => {
      if (error) {
        console.error("Error executing query for inserting material:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Data inserted successfully");
      }
    });
  } catch (error) {
    console.error("Error handling inserting material:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
