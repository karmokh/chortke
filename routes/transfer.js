const express = require('express');
const TransferController = require('../controllers/TransferController');
const router = express.Router();
router.get('/',TransferController.index);
router.get('/:transferId',TransferController.show);
router.post('/',TransferController.create);
router.put('/:transferId',TransferController.update);
router.delete('/:transferId',TransferController.delete);
module.exports = router;