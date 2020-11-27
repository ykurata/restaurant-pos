const express = require('express');
const router = express.Router();

const itemController = require('../controllers').item;
const auth = require('./auth/auth');

router.post('/', auth, itemController.create);
router.get('/all', itemController.getAll);
router.put('/update/:id', auth, itemController.update);
router.delete('/delete/:id', auth, itemController.delete);

module.exports = router;