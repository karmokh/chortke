const express = require('express');
const SellerController = require('../controllers/SellerController');
const router = express.Router();
router.get('/',SellerController.index);
router.get('/:sellerId',SellerController.show);
router.post('/',SellerController.create);
router.put('/:sellerId',SellerController.update);
router.delete('/:sellerId',SellerController.delete);
module.exports = router;