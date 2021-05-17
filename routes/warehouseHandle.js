const express = require('express');
const WarehouseHandleController = require('../controllers/WarehouseHandleController');
const router = express.Router();
router.get('/',WarehouseHandleController.index);
router.get('/:warehouseHandleId',WarehouseHandleController.show);
router.post('/',WarehouseHandleController.create);
router.put('/:warehouseHandleId',WarehouseHandleController.update);
router.delete('/:warehouseHandleId',WarehouseHandleController.delete);
module.exports = router;