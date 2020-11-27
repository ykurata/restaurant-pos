module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    idPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  Order.associate = function (models) {
    Order.hasMany(models.OrderItems, { foreignKey: 'orderItemId', onDelete: 'cascade' });
  }
  return Order;
};