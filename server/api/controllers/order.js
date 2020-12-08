const Order = require('../models/').Order;
const OrderItem = require('../models').OrderItem;

module.exports = {
  async create(req, res) {
    try {
      const order = {
        userId: req.user,
        orderItemId: req.body.orderItemId,
        price: req.body.price,
        isPaid: req.body.isPaid
      }
      const newOrder = await Order.create(order);
      return res.status(200).json(newOrder);
    } catch (err) {
      console.log(err);
    }
  },

  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: OrderItem,
            as: 'orderItem'
          }
        ]
      });
      return res.status(200).json(orders);
    } catch (err) {
      console.log(err);
    }
  },

  async getById(req, res) {
    try {
      const order = await Order.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: OrderItem,
            as: 'orderItem'
          }
        ]
      });
      if (order) {
        return res.status(200).json(order);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async delete(req, res) {
    try {
      const order = await Order.findOne({ where: { id: req.params.id } });
      if (order) {
        await order.destroy();
        return res.json({ message: "deleted an order" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}