const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../../db');
const { getMaterial } = require('../../model/materialDidactic');

router.get("/:nume_elev/:active_page/:titlu", async (req, res) => {

  const { nume_elev, active_page, titlu } = req.params;
  const sql = getMaterial();
  const values = [nume_elev, active_page, titlu ];

  connection.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length === 0) {
        res.status(404).send("No files found");
      } else {
        const fileDetails = results[0];
        const filePath = path.join(__dirname, '../uploads', nume_elev, active_page, titlu);

        res.sendFile(filePath, (sendFileErr) => {
          if (sendFileErr) {
            res.status(500).send("Internal Server Error");
          } else {
            console.log(`Document trimis cu succes pentru ${nume_elev}/${active_page}/${titlu}`);
          }
        });
      }
    }
  });
});

module.exports = router;






