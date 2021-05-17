const express = require('express');
const PersonController = require('../controllers/PersonController');
const router = express.Router();
router.get('/',PersonController.index);
router.get('/:personId',PersonController.show);
router.post('/',PersonController.create);
router.put('/:personId',PersonController.update);
router.delete('/:personId',PersonController.delete);
module.exports = router;