const express = require('express');
const router = express.Router();
const connection = require('../../db');
const { updateUser } = require('../../model/inregistrare');

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { nume, varsta, oras, tip_utilizator, email, parola } = req.body;

    const sql = updateUser(id, nume, varsta, oras, tip_utilizator, email, parola);
    const values = [nume, varsta, oras, tip_utilizator, email, parola, id];

    connection.query(sql, values, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("User updated successfully");
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;