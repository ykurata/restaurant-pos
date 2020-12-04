module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
  });
  // Item.associate = function (models) {
  //   Item.belongsTo(models.OrderItem, { foreignKey: 'itemId', as: 'item' });
  // }
  return Item;
};