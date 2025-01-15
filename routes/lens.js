const express = require('express');
const router = express.Router();
const lensCtrl = require('../controllers/lens.js');

router.get('/', lensCtrl.index);

module.exports = router;
