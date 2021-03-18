const express = require('express');
const SalaryController = require('../controllers/SalaryController');
const router = express.Router();
router.get('/salaries',SalaryController.index);
router.get('/:salaryId',SalaryController.show);
router.post('/',SalaryController.create);
router.put('/:salaryId',SalaryController.update);
router.delete('/:salaryId',SalaryController.delete);
module.exports = router;