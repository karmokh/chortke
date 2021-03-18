const express = require('express');
const SaleReturnController = require('../controllers/SaleReturnController');
const router = express.Router();
router.get('/saleReturns',SaleReturnController.index);
router.get('/:SaleReturnId',SaleReturnController.show);
router.post('/',SaleReturnController.create);
router.put('/:SaleReturnId',SaleReturnController.update);
router.delete('/:SaleReturnId',SaleReturnController.delete);
module.exports = router;