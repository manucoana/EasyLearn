const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../../db');
const { getMaterial } = require('../../model/materialDidactic');

router.get("/:nume_elev/:nume_profesor/:active_page/:lesson_number/:titlu", (req, res) => {
  const { nume_elev, nume_profesor, active_page, lesson_number, titlu } = req.params;

  console.log(`Received request for file: ${nume_elev}/${nume_profesor}/${active_page}/${lesson_number}/${titlu}`);

  const sql = getMaterial();
  const values = [nume_elev, nume_profesor, active_page, lesson_number, titlu];

  console.log("Executing SQL:", sql);
  console.log("With values:", values);

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).send("Internal Server Error");
    } 

    const fileDetails = results[0];
    const filePath = path.join(__dirname, '../server_uploads', nume_elev, nume_profesor, active_page, lesson_number, titlu);

    console.log("Attempting to send file:", filePath);

    res.sendFile(filePath, (sendFileErr) => {
      if (sendFileErr) {
        console.error("Error sending file:", sendFileErr);
        console.log("Attempting to send file:", filePath);
        if (sendFileErr.code === 'ENOENT') {
          return res.status(404).send("File not found");
        } else {
          return res.status(500).send("Internal Server Error");
        }
      } else {
        console.log(`Successfully sent file:  ${filePath}, ${nume_elev}/${nume_profesor}/${active_page}/${lesson_number}/${titlu}`);
      }
    });
  });
});

module.exports = router;
