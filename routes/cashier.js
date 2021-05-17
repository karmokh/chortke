const express = require('express');
const CashierController = require('../controllers/CashierController');
const router = express.Router();
router.get('/',CashierController.index);
router.get('/:cashierId',CashierController.show);
router.post('/',CashierController.create);
router.put('/:cashierId',CashierController.update);
router.delete('/:cashierId',CashierController.delete);
module.exports = router;