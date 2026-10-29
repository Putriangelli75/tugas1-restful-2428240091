const express = require('express');
const router = express.Router();
const operatorController = require('../controllers/operatorController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', operatorController.getAll);
// router.get('/:id', operatorController.getById);
router.post('/', cekApiKey, operatorController.create);

module.exports = router;