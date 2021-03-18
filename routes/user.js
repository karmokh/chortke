const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
router.get('/users',UserController.index);
router.get('/',UserController.show);
router.post('/',UserController.create);
router.put('/',UserController.update);
router.delete('/',UserController.delete);
module.exports = router;