const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();
router.get('/projects',projectController.index);
router.get('/:projectId',projectController.show);
router.post('/',projectController.create);
router.put('/:projectId',projectController.update);
router.delete('/:projectId',projectController.delete);
module.exports = router;