const express = require('express');
const BuyController = require('../controllers/BuyController');
const router = express.Router();
router.get('/',BuyController.index);
router.get('/:buyId',BuyController.show);
router.post('/',BuyController.create);
router.put('/:buyId',BuyController.update);
router.delete('/:buyId',BuyController.delete);
module.exports = router;