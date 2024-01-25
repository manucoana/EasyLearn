const express = require('express');
const router = express.Router();
const connection = require('../../db');
const cors = require('cors');
const { getUserByEmail, getUserById } = require('../../model/utilizator');

router.get('/:email', async (req, res) => {
  try {
    const email = req.params.email;

    const sql = getUserByEmail(email);
    const values = [email];

    connection.query(sql, values, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length > 0) {
          res.status(200).send(results[0]);
        } else {
          res.status(404).send('Profile not found');
        }
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get('/e/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const sql = getUserById(id);
    const values = [id];

    connection.query(sql, values, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length > 0) {
          res.status(200).send(results[0]);
        } else {
          res.status(404).send('Profile not found');
        }
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
