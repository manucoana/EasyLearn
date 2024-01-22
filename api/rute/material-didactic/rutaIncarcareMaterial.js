const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { nume_elev, active_page } = req.body;
    const uploadPath = path.join(__dirname, `../uploads/${nume_elev}/${active_page}`);

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  const file = req.file;
  const { nume_elev, active_page } = req.body;

  const uploadPath = path.join(__dirname, `../uploads/${nume_elev}/${active_page}`);

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const filePath = path.join(uploadPath, file.originalname);

  fs.rename(file.path, filePath, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }

    const imageUrl = `http://localhost:3001/uploads/${nume_elev}/${active_page}/${file.originalname}`;
    res.status(200).json({ imageUrl });
  });
});

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

module.exports = router;
