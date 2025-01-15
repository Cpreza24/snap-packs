const express = require('express');
const router = express.Router();
const cameraCtrl = require('../controllers/camera');

router.get('/', cameraCtrl.index);
router.get('/new', cameraCtrl.newCamera);

module.exports = router;
