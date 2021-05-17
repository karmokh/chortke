const express = require('express');
const FundController = require('../controllers/FundController');
const router = express.Router();
router.get('/',FundController.index);
router.get('/:fundId',FundController.show);
router.post('/',FundController.create);
router.put('/:fundId',FundController.update);
router.delete('/:fundId',FundController.delete);
module.exports = router;