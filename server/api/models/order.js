'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Item, { as: 'items' });
    }
  };
  Order.init({
    userId: DataTypes.INTEGER,
    orders: DataTypes.ARRAY(DataTypes.INTEGER),
    price: DataTypes.DECIMAL(10, 2),
    isPaid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};