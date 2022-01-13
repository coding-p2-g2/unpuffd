const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Effect extends Model {}

Effect.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    effect_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'effect',
  }
);

module.exports = Effect;
