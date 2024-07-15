const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      const { nume_elev, active_page } = req.body;
      const uploadPath = path.join(__dirname, `../server_uploads/${nume_elev}/${active_page}`);
  
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
  
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const profileUpload = multer({ storage: profileStorage });
  
  router.post('/', profileUpload.single('file'), (req, res) => {
    const file = req.file;
    const { nume_elev, active_page } = req.body;
  
    const uploadPath = path.join(__dirname, `../server_uploads/${nume_elev}/${active_page}`);
  
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
  
    const filePath = path.join(uploadPath, file.originalname);
  
    fs.rename(file.path, filePath, (err) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }
  
      const docUrl = `http://localhost:3001/server_uploads/${nume_elev}/${active_page}/${file.originalname}`;
      res.status(200).json({ docUrl });
    });
  });
  

  module.exports = router;
