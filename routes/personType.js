const express = require('express');
const PersonTypeController = require('../controllers/PersonTypeController');
const router = express.Router();
router.get('/',PersonTypeController.index);
router.get('/:personTypeId',PersonTypeController.show);
router.post('/',PersonTypeController.create);
router.put('/:personTypeId',PersonTypeController.update);
router.delete('/:personTypeId',PersonTypeController.delete);
module.exports = router;