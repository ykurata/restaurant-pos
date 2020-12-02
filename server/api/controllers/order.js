const { all } = require('sequelize/types/lib/operators');
const { get } = require('./orderItem');

const Order = require('../models/').Order;

module.exports = {
  async create(req, res) {
    try {
      const order = {
        orderItem: req.body.orderItem,
        pirce: req.body.price,
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
      const orders = await Order.find({});
      return res.status(200).json(orders);
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