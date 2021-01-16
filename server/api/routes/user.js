const express = require('express');
const router = express.Router();

const { login, register, getAllUsers, deleteUser } = require('../controllers/user');

router.post('/register', register);
router.post('/login', login);
router.get('/all', getAllUsers);
router.delete('/delete/:id', deleteUser);

module.exports = router;
