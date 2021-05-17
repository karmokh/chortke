const express = require('express');
const AccountingController = require('../controllers/AccountingController');
const router = express.Router();
router.get('/',AccountingController.index);
router.get('/:accountingId',AccountingController.show);
router.post('/',AccountingController.create);
router.put('/:accountingId',AccountingController.update);
router.delete('/:accountingId',AccountingController.delete);
module.exports = router;