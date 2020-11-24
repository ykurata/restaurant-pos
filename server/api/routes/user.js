const express = require('express');
const router = express.Router();

const userController = requrie('../controllers').user;

router.post('/user/register', userController.create);

