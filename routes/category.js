const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const router = express.Router();
router.get('/',CategoryController.index);
router.get('/:categoryId',CategoryController.show);
router.post('/',CategoryController.create);
router.put('/:categoryId',CategoryController.update);
router.delete('/:categoryId',CategoryController.delete);
module.exports = router;