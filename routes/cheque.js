const express = require('express');
const ChequeController = require('../controllers/ChequeController');
const router = express.Router();
router.get('/',ChequeController.index);
router.get('/:chequeId',ChequeController.show);
router.post('/',ChequeController.create);
router.put('/:chequeId',ChequeController.update);
router.delete('/:chequeId',ChequeController.delete);
module.exports = router;