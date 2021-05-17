const express = require('express');
const BusinessController = require('../controllers/BusinessController');
const router = express.Router();
router.get('/',BusinessController.index);
router.get('/:businessId',BusinessController.show);
router.post('/',BusinessController.create);
router.put('/:businessId',BusinessController.update);
router.delete('/:businessId',BusinessController.delete);
module.exports = router;