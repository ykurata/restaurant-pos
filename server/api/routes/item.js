const express = require('express');
const router = express.Router();

const itemController = require('../controllers').item;

router.post('/', itemController.create);
router.get('/all', itemController.getAll);
router.put('/update/:id', itemController.update);
router.delete('/delete/:id', itemController.delete);

module.exports = router;