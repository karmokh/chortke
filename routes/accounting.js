const express = require('express');
const AccountingController = require('../controllers/AccountingController');
const router = express.Router();
router.get('/banks',AccountingController.index);
router.get('/:bankId',AccountingController.show);
router.post('/',AccountingController.create);
router.put('/:bankId',AccountingController.update);
router.delete('/:bankId',AccountingController.delete);
module.exports = router;