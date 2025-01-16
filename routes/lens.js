const express = require('express');
const router = express.Router();
const lensCtrl = require('../controllers/lens.js');

router.get('/', lensCtrl.index);
router.get('/new', lensCtrl.newLens);
router.post('/', lensCtrl.postCamera);
router.get('/:lensId', lensCtrl.showLens);

module.exports = router;
