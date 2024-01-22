const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../../db');
const { getImagine } = require('../../model/profil');

router.get("/:nume/:profil/:titlu", (req, res) => {
  try {
    const { nume, titlu } = req.params;
    const sql = getImagine(nume, titlu);

    connection.query(sql, [nume, titlu], (error, results) => {
      if (error) {
        console.error("Error executing query for fetching image:", error);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (results.length === 0) {
        res.status(404).send("No files found");
        return;
      }

      const fileDetails = results[0];
      const filePath = path.join(__dirname, '../uploads', nume, 'Profil', titlu).replace(/\\/g, '/');

      res.sendFile(filePath, (sendFileErr) => {
        if (sendFileErr) {
          console.error("Error sending file:", sendFileErr);
          res.status(500).send("Internal Server Error");
        } else {
          console.log(`Poza gasita cu succes: ${nume}/'Profil'/${titlu}`);
        }
      });
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
