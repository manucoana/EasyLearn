const express = require('express');
const router = express.Router();
const connection = require('../../db');

// Obține toate medaliile
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM medalii';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching medals:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

// Acordă o medalie unui elev
router.post('/', (req, res) => {
  const { id_elev, id_medalie, id_profesor } = req.body;
  const insertMedalieSql = 'INSERT INTO medalii_acordate (id_elev, id_medalie, id_profesor) VALUES (?, ?, ?)';

  connection.query(insertMedalieSql, [id_elev, id_medalie, id_profesor], (error, result) => {
    if (error) {
      console.error('Error awarding medal:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Medal awarded successfully');
    }
  });
});

// Obține medaliile acordate unui elev de către un profesor
router.get('/:id_elev/:id_profesor', (req, res) => {
  const { id_elev, id_profesor } = req.params;
  const sql = 'SELECT m.* FROM medalii m INNER JOIN medalii_acordate ma ON m.id = ma.id_medalie WHERE ma.id_elev = ? AND ma.id_profesor = ?';
  connection.query(sql, [id_elev, id_profesor], (error, results) => {
    if (error) {
      console.error('Error fetching awarded medals:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

// Obține clasamentul
router.get('/clasament', (req, res) => {
  const sql = `
    SELECT e.id_elev, e.nume_elev, COUNT(ma.id_medalie) AS total_medalii
    FROM elevi e
    JOIN medalii_acordate ma ON e.id_elev = ma.id_elev
    GROUP BY e.id_elev, e.nume_elev
    ORDER BY total_medalii DESC
  `;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching ranking:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
