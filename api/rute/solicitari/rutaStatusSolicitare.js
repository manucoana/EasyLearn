const express = require('express');
const router = express.Router();
const connection = require('../../db');
const {
  updateSolicitareAcceptata,
  insertIntoMeditatii,
  updateSolicitareRespinsa,
} = require('../../model/solicitare')

router.post('/acceptata/:requestId', (req, res) => {
  const requestId = req.params.requestId;
  const id_profesor = req.body.id_profesor;

  console.log(`Acceptata requestId: ${requestId}, id_profesor: ${id_profesor}`);

  const updateSql = updateSolicitareAcceptata();
  const values = [requestId, id_profesor];

  connection.query(updateSql, values, (error, result) => {
    if (error) {
      return res.status(500).send('Internal Server Error');
    }

    const insertSql = insertIntoMeditatii();

    connection.query(insertSql, values, (error, result) => {
      if (error) {
        return res.status(500).send('Internal Server Error');
      }

      res.status(200).json({ message: 'Cerere de colaborare acceptata.' });
    });
  });
});

router.post('/respinsa/:requestId', (req, res) => {
  const requestId = req.params.requestId;
  const id_profesor = req.body.id_profesor;

  const updateSql = updateSolicitareRespinsa();
  const values = [requestId, id_profesor];
  console.log(`Respins requestId: ${requestId}, id_profesor: ${id_profesor}`);

  connection.query(updateSql, values, (error, result) => {
    if (error) {
      return res.status(500).send('Internal Server Error');
    }

    res.status(200).json({ message: 'Cerere de colaborare respinsa.' });
  });
});


module.exports = router;
