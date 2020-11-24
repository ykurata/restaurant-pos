const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;

router.post('/register', userController.create);
router.get('/get', userController.getAll);

module.exports = router;
