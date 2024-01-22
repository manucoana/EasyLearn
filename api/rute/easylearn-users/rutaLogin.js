const express = require('express');
const router = express.Router();
const connection = require('../../db');
const { loginUser } = require('../../model/utilizator');

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = loginUser(email, password);

    connection.query(sql, [email, password], (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length === 0) {
          res.status(401).send("Invalid email or password");
        } else {
          res.status(200).send(results);
        }
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;