const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Usage extends Model {}

Usage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    usage_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'usage',
  }
);

module.exports = Usage;
