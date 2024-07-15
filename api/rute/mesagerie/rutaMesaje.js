const express = require('express');
const router = express.Router();
const connection = require('../../db');

router.get('/:userId', (req, res) => {
  console.log(`GET /api/mesaje/${req.params.userId}`);
  const sql = `
    SELECT m.id, m.text, m.timestamp, sender.nume as sender, recipient.nume as recipient
    FROM mesaje_users m
    JOIN easylearn_users sender ON m.sender_id = sender.id
    JOIN easylearn_users recipient ON m.recipient_id = recipient.id
    WHERE m.recipient_id = ? OR m.sender_id = ?
  `;
  connection.query(sql, [req.params.userId, req.params.userId], (err, results) => {
    if (err) {
      console.error('Eroare la obținerea mesajelor pentru utilizator:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.get('/:userId/:profesorId', (req, res) => {
  console.log(`GET /api/mesaje/${req.params.userId}/${req.params.profesorId}`);
  const sql = `
    SELECT m.id, m.text, m.timestamp, sender.nume as sender, recipient.nume as recipient
    FROM mesaje_users m
    JOIN easylearn_users sender ON m.sender_id = sender.id
    JOIN easylearn_users recipient ON m.recipient_id = recipient.id
    WHERE (m.sender_id = ? AND m.recipient_id = ?) OR (m.sender_id = ? AND m.recipient_id = ?)
  `;
  connection.query(sql, [req.params.userId, req.params.profesorId, req.params.profesorId, req.params.userId], (err, results) => {
    if (err) {
      console.error('Eroare la obținerea mesajelor pentru utilizator și profesor:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  console.log('POST /api/mesaje', req.body);
  const { sender_id, recipient_id, text } = req.body;
  const sql = 'INSERT INTO mesaje_users (sender_id, recipient_id, text, timestamp) VALUES (?, ?, ?, NOW())';
  connection.query(sql, [sender_id, recipient_id, text], (err, result) => {
    if (err) {
      console.error('Eroare la trimiterea mesajului:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, sender_id, recipient_id, text, timestamp: new Date() });
  });
});

module.exports = router;
