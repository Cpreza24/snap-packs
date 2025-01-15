const express = require('express');
const router = express.Router();
const cameraCtrl = require('../controllers/camera');

router.get('/', cameraCtrl.index);
router.get('/new', cameraCtrl.newCamera);
router.post('/', cameraCtrl.postCamera);
router.get('/:cameraId', cameraCtrl.showCamera);
router.get('/:cameraId/edit', cameraCtrl.editCamera);
router.put('/:cameraId', cameraCtrl.updateCamera);

module.exports = router;
