const express = require('express');
const { openStdin } = require('process');
const router = express.Router();

const orderItemController = require('../controllers').orderItem;

router.post('/', orderItemController.create);
router.post('/all', orderItemController.get);
router.post('/delete/:id', orderItemController.delete);

module.exports = router;