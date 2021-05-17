const express = require('express');
const projectController = require('../controllers/ProjectController');
const router = express.Router();
router.get('/',projectController.index);
router.get('/:projectId',projectController.show);
router.post('/',projectController.create);
router.put('/:projectId',projectController.update);
router.delete('/:projectId',projectController.delete);
module.exports = router;