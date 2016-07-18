const express = require('express');
const multer = require('multer');
const aws = require('aws-sdk');

const s3 = new aws.S3();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});

const router = new express.Router();

router.post('/', upload.single('file'), (req, res) => {
  console.log('req.body:', req.body);
  console.log('req.file:', req.file);

  const params = {
    Bucket: 'ElliotsNewBucket',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: 'public-read',
  };

  s3.upload(params, (err, data) => {
    console.log(data);
    const imgUrl = `https://s3.amazonaws.com/ElliotsNewBucket/${req.file.originalname}`;
    // const base64img = req.file.buffer.toString('base64');
    // res.send(data);
    // res.send(`<img src='data:image;base64,${base64img}'/>`);
    // res.send(`<img src='${imgUrl}'/>`);
    res.send(imgUrl);
  });
});

module.exports = router;
