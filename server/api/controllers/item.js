const { getAll, delete } = require('./user');

const Item = require('../models').Item;

module.exports = {
  async create(req, res) {
    try {
      const newItem = {
        name: req.body.name,
        size: req.body.size,
        price: req.body.price
      }
      const item = await newItem.save();
      return res.status(200).json(item);
    } catch (err) {
      console.log(err);
    }
  },

  async getAll(req, res) {
    try {
      const items = await Item.findAll({});
      return res.status(200).json(items);
    } catch (err) {
      console.log(err);
    }
  },

  async update(req, res) {
    try {
      const item = await Item.findOne({ where: { id: req.params.id } });
      if (item) {
        const updatedItem = await item.update({
          name: req.body.name,
          size: req.body.size,
          price: req.body.price
        });
        return res.status(200).json(updatedItem);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async delete(req, res) {
    try {
      const item = await Item.findOne({ where: { id: req.params.id } });
      if (item) {
        item.destroy();
        return res.json({ message: "deleted successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}