const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../../db');
const { getMaterial, insertMaterial, getMaterialsByLesson, getAllLessons } = require('../../model/materialDidactic');

router.get("/documents/:nume_elev/:nume_profesor/:active_page/:lesson_number", (req, res) => {
  const { nume_elev, nume_profesor, active_page, lesson_number } = req.params;
  const sql = getMaterialsByLesson();
  const values = [nume_elev, nume_profesor, active_page, lesson_number];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Database error:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json({ documents: results });
    }
  });
});

router.get("/lessons/:nume_elev/:nume_profesor/:active_page", (req, res) => {
  const { nume_elev, nume_profesor, active_page } = req.params;
  const sql = getAllLessons();
  const values = [nume_elev, nume_profesor, active_page];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Database error:", error);
      res.status(500).send("Internal Server Error");
    } else {
      const lessons = results.map(row => row.lesson_number);
      res.json({ lessons });
    }
  });
});


module.exports = router;
