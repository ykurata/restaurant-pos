const express = require('express');
const router = express.Router();

const orderController = require('../controllers').order;
const auth = require('./auth/auth');

router.post("/", auth, orderController.create);
router.get("/all", orderController.getAll);
router.delete("/delete/:id", orderController.delete);

module.exports = router;