const express = require('express');
const warehouseController = require('../controllers/WarehouseController');
const router = express.Router();
router.get('/',warehouseController.index);
router.get('/:warehouseId',warehouseController.show);
router.post('/',warehouseController.create);
router.put('/:warehouseId',warehouseController.update);
router.delete('/:warehouseId',warehouseController.delete);
module.exports = router;