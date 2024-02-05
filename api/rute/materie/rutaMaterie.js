const express = require('express');
const router = express.Router();
const connection = require('../../db');
const cors = require('cors');
const { getAllMaterii } = require('../../model/materie');

router.get('/', async (req, res) => {
  try {
    const sql = getAllMaterii();

    connection.query(sql, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length > 0) {
          res.status(200).send(results);
        } else {
          res.status(404).send('Materii not found');
        }
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
