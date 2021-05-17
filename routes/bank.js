const express = require('express');
const BankController = require('../controllers/BankController');
const router = express.Router();
router.get('/',BankController.index);
router.get('/:bankId',BankController.show);
router.post('/',BankController.create);
router.put('/:bankId',BankController.update);
router.delete('/:bankId',BankController.delete);
module.exports = router;