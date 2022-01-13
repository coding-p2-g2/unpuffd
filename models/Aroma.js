const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Aroma extends Model {}

Aroma.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    aroma_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'aroma',
  }
);

module.exports = Aroma;
