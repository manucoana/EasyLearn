const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { nume, active_page } = req.body;
  
    const uploadPath = path.join(__dirname, `../server_uploads/${nume}/${active_page}`);
  
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  });

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {

  const file = req.file;
  const { nume, active_page } = req.body;

  const uploadPath = path.join(__dirname, `../server_uploads/${nume}/${active_page}`);

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const filePath = path.join(uploadPath, file.originalname);

  fs.rename(file.path, filePath, (err) => {
    if (err) {
      console.error("Error moving file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const imageUrl = `http://localhost:3001/server_uploads/${nume}/${active_page}/${file.originalname}`;
    res.status(200).json({ imageUrl });
  });
});

router.use('/server_uploads', express.static(path.join(__dirname, '../server_uploads')));

module.exports = router;
