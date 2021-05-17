const express = require('express');
const CostController = require('../controllers/CostController');
const router = express.Router();
router.get('/',CostController.index);
router.get('/:costId',CostController.show);
router.post('/',CostController.create);
router.put('/:costId',CostController.update);
router.delete('/:costId',CostController.delete);
module.exports = router;