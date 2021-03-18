const express = require('express');
const ExpenseController = require('../controllers/ExpenseController');
const router = express.Router();
router.get('/expenses',ExpenseController.index);
router.get('/:expenseId',ExpenseController.show);
router.post('/',ExpenseController.create);
router.put('/:expenseId',ExpenseController.update);
router.delete('/:expenseId',ExpenseController.delete);
module.exports = router;