const express = require('express');
const router = express.Router();
const { getElevInscris } = require('../../model/elev');
const connection = require('../../db');

router.get("/:nume_profesor", async (req, res) => {
  try {
    const nume_profesor = req.params.nume_profesor;
    const sql = getElevInscris(nume_profesor);

    connection.query(sql, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length === 0) {
          res.status(401).send("Unauthorized");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(results));
        }
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
