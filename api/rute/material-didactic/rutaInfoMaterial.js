const express = require('express');
const router = express.Router();
const { insertMaterial } = require('../../model/materialDidactic');
const connection = require('../../db');

router.post('/', async (req, res) => {
  try {
    const { nume_profesor, nume_elev, tip_material, titlu, cale } = req.body;
    const sql = insertMaterial(nume_profesor, nume_elev, tip_material, titlu, cale);
    const values = [nume_profesor, nume_elev, tip_material, titlu, cale];

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
