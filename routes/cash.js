const express = require('express');
const CashController = require('../controllers/CashController');
const router = express.Router();
router.get('/cashs',CashController.index);
router.get('/:cashId',CashController.show);
router.post('/',CashController.create);
router.put('/:cashId',CashController.update);
router.delete('/:cashId',CashController.delete);
module.exports = router;