const Item = require('../models').Item;

const createItem = async (req, res) => {
  try {
    const newItem = {
      name: req.body.name,
      size: req.body.size,
      price: req.body.price
    }
    const item = await Item.create(newItem);
    return res.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({});
    return res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }
};

const updateItem = async (req, res) => {
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
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.findOne({ where: { id: req.params.id } });
    if (item) {
      item.destroy();
      return res.json({ message: "deleted successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  createItem, getAllItems, updateItem, deleteItem
}