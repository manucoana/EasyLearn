const express = require('express');
const router = express.Router();
const connection = require('../../db'); 

router.get("/", async (req, res) => {
  try {
    const sql = 'SELECT * FROM postari_forum';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error("Error fetching forum posts:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error fetching forum posts:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { titlu, text, user_id } = req.body;
    console.log('Received post data:', req.body);
    if (!titlu || !text || !user_id) {
      return res.status(400).send("Title, text, and user ID are required");
    }
    
    const sql = 'INSERT INTO postari_forum (titlu, text, user_id) VALUES (?, ?, ?)';
    connection.query(sql, [titlu, text, user_id], (error, results) => {
      if (error) {
        console.error("Error saving the forum post:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).json({ id: results.insertId, titlu, text, user_id, data_crearii: new Date() });
      }
    });
  } catch (error) {
    console.error("Error saving the forum post:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:postare_id", async (req, res) => {
  try {
    const { postare_id } = req.params;
    const sql = 'SELECT * FROM raspunsuri_forum WHERE postare_id = ?';
    connection.query(sql, [postare_id], (error, results) => {
      if (error) {
        console.error("Error fetching forum responses:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error fetching forum responses:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/:postare_id", async (req, res) => {
  try {
    const { postare_id } = req.params;
    const { text, user_id } = req.body;
    console.log('Received response data:', req.body);
    if (!text || !user_id) {
      return res.status(400).send("Text and user ID are required");
    }
    
    const sql = 'INSERT INTO raspunsuri_forum (text, user_id, postare_id) VALUES (?, ?, ?)';
    connection.query(sql, [text, user_id, postare_id], (error, results) => {
      if (error) {
        console.error("Error saving the forum response:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).json({ id: results.insertId, text, user_id, postare_id, data_crearii: new Date() });
      }
    });
  } catch (error) {
    console.error("Error saving the forum response:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
