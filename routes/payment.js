const express = require('express');
const PaymentController = require('../controllers/PaymentController');
const router = express.Router();
router.get('/payments',PaymentController.index);
router.get('/:paymentId',PaymentController.show);
router.post('/',PaymentController.create);
router.put('/:paymentId',PaymentController.update);
router.delete('/:paymentId',PaymentController.delete);
module.exports = router;