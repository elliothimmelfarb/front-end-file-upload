const express = require('express');

const router = new express.Router();

router.post('/', (req, res) => {
  res.send();
});

module.exports = router;
