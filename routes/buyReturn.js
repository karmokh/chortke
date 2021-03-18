const express = require('express');
const BuyReturnController = require('../controllers/BuyReturnController');
const router = express.Router();
router.get('/',BuyReturnController.index);
router.get('/:buyReturnId',BuyReturnController.show);
router.post('/',BuyReturnController.create);
router.put('/:buyReturnId',BuyReturnController.update);
router.delete('/:buyReturnId',BuyReturnController.delete);
module.exports = router;