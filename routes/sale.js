const express = require('express');
const SaleController = require('../controllers/SaleController');
const router = express.Router();
router.get('/',SaleController.index);
router.get('/:saleId',SaleController.show);
router.post('/',SaleController.create);
router.put('/:saleId',SaleController.update);
router.delete('/:saleId',SaleController.delete);
module.exports = router;