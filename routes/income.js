const express = require('express');
const IncomeController = require('../controllers/IncomeController');
const router = express.Router();
router.get('/',IncomeController.index);
router.get('/:incomeId',IncomeController.show);
router.post('/',IncomeController.create);
router.put('/:incomeId',IncomeController.update);
router.delete('/:incomeId',IncomeController.delete);
module.exports = router;