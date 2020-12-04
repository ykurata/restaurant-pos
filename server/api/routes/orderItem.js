const express = require('express');
const router = express.Router();

const orderItemController = require('../controllers').orderItem;
const auth = require('./auth/auth');

router.post('/', auth, orderItemController.create);
router.get('/all', orderItemController.getAll);
router.delete('/delete/:id', auth, orderItemController.delete);

module.exports = router;