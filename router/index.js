const express = require('express');
const router = express.Router();

router.use('/api', require('./Student/index'));

module.exports = router;