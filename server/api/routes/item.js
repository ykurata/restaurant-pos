const express = require('express');
const router = express.Router();

const { createItem, getAllItems, updateItem, deleteItem } = require('../controllers/item');

router.post('/', createItem);
router.put('/update/:id', updateItem);
router.get('/all', getAllItems);
router.delete('/delete/:id', deleteItem);

module.exports = router;