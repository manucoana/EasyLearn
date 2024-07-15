const express = require('express');
const router = express.Router();
const connection = require('../../db');
const { getTitluCale } = require('../../model/materialDidactic');

router.get("/:nume_elev/:nume_profesor/:active_page/:lesson_number", async (req, res) => {
  try {
    const { nume_elev, nume_profesor, active_page, lesson_number } = req.params;

    const sql = getTitluCale(nume_elev, nume_profesor, active_page, lesson_number);
    const values = [nume_elev, nume_profesor, active_page, lesson_number];

    connection.query(sql, values, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        const documents = results.map((result) => ({ titlu: result.titlu, cale: result.cale }));
        res.status(200).json({ documents });
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;