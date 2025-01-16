const express = require('express');
const router = express.Router();
const lensCtrl = require('../controllers/lens.js');

router.get('/', lensCtrl.index);
router.get('/new', lensCtrl.newLens);
router.post('/', lensCtrl.postCamera);
router.get('/:lensId', lensCtrl.showLens);
router.get('/:lensId/edit', lensCtrl.editLens);
router.put('/:lensId', lensCtrl.updateLens);
router.delete('/:lensId', lensCtrl.deleteLens);

module.exports = router;
