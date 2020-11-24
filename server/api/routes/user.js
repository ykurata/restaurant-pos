const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;

router.post('/register', userController.register);
router.get('/get', userController.getAll);

module.exports = router;
