const express = require('express');
const productTypeController = require('../controllers/ProductTypeController');
const router = express.Router();
router.get('/productType',productTypeController.index);
router.get('/:productTypeId',productTypeController.show);
router.post('/',productTypeController.create);
router.put('/:productTypeId',productTypeController.update);
router.delete('/:productTypeId',productTypeController.delete);
module.exports = router;