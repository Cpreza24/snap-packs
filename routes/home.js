const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home.js');

router.get('/', homeCtrl.index);

module.exports = router;
