const OrderItem = require('../models').OrderItem;

module.exports = {
  async create(req, res) {
    try {
      const newOrderItem = {
        userId: req.user,
        itemId: req.body.itemId,
        quantity: req.body.quantity,
        price: req.body.price
      }
      const orderItem = await OrderItem.create(newOrderItem);
      return res.status(200).json(orderItem);
    } catch (err) {
      console.log(err);
    }
  },

  async getAll(req, res) {
    try {
      const orderItems = await OrderItems.findAll({});
      return res.status(200).json(orderItems);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async delete(req, res) {
    try {
      const orderItem = await OrderItem.findOne({ where: { id: req.params.id } });
      if (orderItem) {
        orderItem.destroy();
        return res.json({ message: "deleted successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
