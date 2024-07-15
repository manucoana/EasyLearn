const express = require('express');
const router = express.Router();
const connection = require('../../db');

router.post('/', async (req, res) => {
  try {
    const { id_elev, tip_evaluare, nota, id_profesor, lessonNumber } = req.body;
    const sql = 'INSERT INTO note (id_elev, tip_evaluare, nota, id_profesor, lesson_number) VALUES (?, ?, ?, ?, ?)';
    const values = [id_elev, tip_evaluare, nota, id_profesor, lessonNumber];

    connection.query(sql, values, (error, result) => {
      if (error) {
        console.error("Error executing query for inserting nota:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Nota inserted successfully");
      }
    });
  } catch (error) {
    console.error("Error handling inserting nota:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/:id_elev/:id_profesor', async (req, res) => {
  try {
    const { id_elev, id_profesor } = req.params;
    const sql = 'SELECT * FROM note WHERE id_elev = ? AND id_profesor = ?';

    connection.query(sql, [id_elev, id_profesor], (error, results) => {
      if (error) {
        console.error("Error executing query for selecting notes:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error handling selecting notes:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
