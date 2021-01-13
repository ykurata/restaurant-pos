const express = require('express');
const router = express.Router();

const { createOrder, getAllOrders, updateOrder, deleteOrder } = require('../controllers/order');

router.post('/', createOrder);
router.put('/update/:id', updateOrder);
router.get('/all', getAllOrders);
router.delete('/delete/:id', deleteOrder);

module.exports = router;