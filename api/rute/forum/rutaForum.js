const express = require('express');
const router = express.Router();
const connection = require('../../db'); 
const { getAllPostari, insertPostare } = require('../../model/forum');

router.get("/", async (req, res) => {
  try {
    const sql = getAllPostari();
    connection.query(sql, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { titlu, text, user_id } = req.body;
    console.log('Received:', req.body);
    if (!titlu || !text || !user_id) {
      return res.status(400).send("Title, text, and user ID are required");
    }
    
    const sql = insertPostare(titlu, text, user_id);
    const responses = JSON.stringify([]);
    
    connection.query(sql, [titlu, text, user_id, responses], (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).json({ id: results.insertId, titlu, text, user_id, data_crearii: new Date()});
      }
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
