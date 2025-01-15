const express = require('express');
const router = express.Router();
const inventoryCtrl = require('../controllers/inventory');

router.get('/', inventoryCtrl.index);
router.get('/camera/new', inventoryCtrl.newCamera);
router.get('/lens/new', inventoryCtrl.newLens);

module.exports = router;
