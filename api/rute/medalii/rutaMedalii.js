const express = require('express');
const router = express.Router();
const connection = require('../../db');
const path = require('path');

router.get("/:id?", (req, res) => {
  try {
    const { id } = req.params;

    let sql;
    let params;

    if (id) {
      sql = 'SELECT nume, cale FROM medalii WHERE id = ?';
      params = [id];
    } else {
      sql = 'SELECT * FROM medalii';
      params = [];
    }

    connection.query(sql, params, (error, results) => {
      if (error) {
        console.error("Error executing query for fetching medal(s):", error);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (results.length === 0) {
        res.status(404).send("No medals found");
        return;
      }

      if (id) {
        const { nume, cale } = results[0];
        console.log(`Calea imaginii pentru medalie ${nume} (ID: ${id}): ${cale}`);
        const filePath = path.join(__dirname, '../server_uploads', 'medalii', nume).replace(/\\/g, '/');
        res.sendFile(filePath, (sendFileErr) => {
          if (sendFileErr) {
            console.error("Error sending file:", sendFileErr);
            res.status(500).send("Internal Server Error");
          } else {
            console.log(`Poza găsită cu succes: ${nume}`);
          }
        });
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.error("Error in GET /:id:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
