const express = require('express');
const TransferController = require('../controllers/TransferController');
const router = express.Router();
router.get('/businesses',TransferController.index);
router.get('/:businessId',TransferController.show);
router.post('/',TransferController.create);
router.put('/:businessId',TransferController.update);
router.delete('/:businessId',TransferController.delete);
module.exports = router;