const express = require('express');
const StoreController = require('../controllers/StoreController');
const router = express.Router();
router.get('/stores',StoreController.index);
router.get('/:storeId',StoreController.show);
router.post('/',StoreController.create);
router.put('/:storeId',StoreController.update);
router.delete('/:storeId',StoreController.delete);
module.exports = router;