const express = require('express');
const WasteController = require('../controllers/WasteController');
const router = express.Router();
router.get('/',WasteController.index);
router.get('/:wasteId',WasteController.show);
router.post('/',WasteController.create);
router.put('/:wasteId',WasteController.update);
router.delete('/:wasteId',WasteController.delete);
module.exports = router;