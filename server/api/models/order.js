module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderItemId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  // Order.associate = function (models) {
  //   Order.hasMany(models.OrderItem, { foreignKey: 'orderItemId', onDelete: 'cascade', as: 'orderItem' });
  // }

  return Order;
};