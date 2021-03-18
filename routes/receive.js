const express = require('express');
const ReceiveController = require('../controllers/ReceiveController');
const router = express.Router();
router.get('/',ReceiveController.index);
router.get('/:receiveId',ReceiveController.show);
router.post('/',ReceiveController.create);
router.put('/:receiveId',ReceiveController.update);
router.delete('/:receiveId',ReceiveController.delete);
module.exports = router;