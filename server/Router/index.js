const express = require('express');
const router = express.Router();

router.use('/customer', require('./customer'));
router.use('/client', require('./client'));

module.exports = router;