const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
router.get('/',ProductController.index);
router.get('/:productId',ProductController.show);
router.post('/',ProductController.create);
router.put('/:productId',ProductController.update);
router.delete('/:productId',ProductController.delete);
module.exports = router;