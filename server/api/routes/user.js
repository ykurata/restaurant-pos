const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/get', userController.getAll);
router.delete('/delete/:id', userController.delete);

module.exports = router;
