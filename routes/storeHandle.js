const express = require('express');
const StoreHandleController = require('../controllers/StoreHandleController');
const router = express.Router();
router.get('/storeHandles',StoreHandleController.index);
router.get('/:storeHandleId',StoreHandleController.show);
router.post('/',StoreHandleController.create);
router.put('/:storeHandleId',StoreHandleController.update);
router.delete('/:storeHandleId',StoreHandleController.delete);
module.exports = router;