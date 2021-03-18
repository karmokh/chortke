const express = require('express');
const CheckController = require('../controllers/CheckController');
const router = express.Router();
router.get('/cheks',CheckController.index);
router.get('/:chekId',CheckController.show);
router.post('/',CheckController.create);
router.put('/:chekId',CheckController.update);
router.delete('/:chekId',CheckController.delete);
module.exports = router;