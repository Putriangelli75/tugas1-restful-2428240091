const express = require('express');
const router = express.Router();
const dataplansController = require('../controllers/dataplansController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', dataplansController.getAll);
router.get('/:id', dataplansController.getById);
router.post('/', cekApiKey, dataplansController.create);
router.put('/:id', cekApiKey, dataplansController.update);
router.delete('/:id', cekApiKey, dataplansController.remove);

module.exports = router;