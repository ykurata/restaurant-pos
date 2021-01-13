const Order = require('../models').Order;

const createOrder = async (req, res) => {
  try {
    const order = ({
      itemIds: req.body.itemIds,
      price: req.body.price
    });
    const newOrder = await order.save();
    return res.status(200).json(newOrder);
  } catch (error) {
    console.log(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    if (order) {
      const updateOrder = await order.update({
        itemIds: req.body.itemIds,
        price: req.body.price
      });
      return res.status(200).json(updateOrder);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({});
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    if (order) {
      order.destroy();
      return res.json({ message: "deleted successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrder, updateOrder, getAllOrders, deleteOrder
}