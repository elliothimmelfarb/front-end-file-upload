const express = require('express');

const router = new express.Router();

router.use('/files', require('./files'));

module.exports = router;
