const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StrainType extends Model {}

StrainType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    strain_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'strain_type',
  }
);

module.exports = StrainType;
