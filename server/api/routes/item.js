const express = require('express');
const router = express.Router();


const { createItem, getAllItems, updateItem, deleteItem } = require('../controllers/item');
const itemController = require('../controllers').item;
const auth = require('./auth/auth');

router.post('/', auth, createItem);
router.get('/all', getAllItems);
router.put('/update/:id', auth, updateItem);
router.delete('/delete/:id', auth, deleteItem);

module.exports = router;