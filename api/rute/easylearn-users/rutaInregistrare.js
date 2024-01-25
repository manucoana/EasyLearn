const express = require('express');
const router = express.Router();
const connection = require('../../db');
const cors = require('cors');
const { insertUser, insertElev, insertProfesor, insertAnunt } = require('../../model/inregistrare');

router.post("/", async (req, res) => {
  try {
    const { nume, varsta, oras, tip_utilizator, email, parola } = req.body;

    const sqlInsertUser = insertUser(nume, varsta, oras, tip_utilizator, email, parola);
    const valuesInsertUser = [nume, varsta, oras, tip_utilizator, email, parola];

    connection.query(sqlInsertUser, valuesInsertUser, (errorInsertUser, resultInsertUser) => {
      if (errorInsertUser) {
        res.status(500).send("Internal Server Error");
      } else {
        let insertTipUtilizator, valoriTipUtilizator;

        if (tip_utilizator === 'Elev') {
          insertTipUtilizator = insertElev();
          valoriTipUtilizator = [resultInsertUser.insertId, nume];
        } else if (tip_utilizator === 'Profesor') {
          insertTipUtilizator = insertProfesor();
          valoriTipUtilizator = [resultInsertUser.insertId, nume];

          const sqlAnunt = insertAnunt();
          const valuesAnunt = [nume, email, false];

          connection.query(sqlAnunt, valuesAnunt, (errorAnunt, resultAnunt) => {
            if (errorAnunt) {
              res.status(500).send("Internal Server Error");
            }
          });
        }

        connection.query(insertTipUtilizator, valoriTipUtilizator, (errorSpecific, resultSpecific) => {
          if (errorSpecific) {
            res.status(500).send("Internal Server Error");
          } else {
            res.status(200).send("Data inserted successfully");
          }
        });
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
