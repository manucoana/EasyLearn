const express = require('express');
const router = express.Router();
const connection = require('../../db');
const { getTitluCale } = require('../../model/materialDidactic');

router.get("/:nume_elev/:active_page", async (req, res) => {
  try {
    const { nume_elev, active_page } = req.params;

    const sql = getTitluCale(nume_elev, active_page);
    const values = [nume_elev, active_page];

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
