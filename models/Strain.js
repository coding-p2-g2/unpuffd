const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Strain extends Model { }

Strain.init(
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
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thc_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strain_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'strain_type',
        key: 'id',
      },
    },
    effect_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'effect',
        key: 'id',
      },
    },
    usage_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usage',
        key: 'id',
      },
    },
    aroma_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'aroma',
        key: 'id',
      },
    },
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'review',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'strain',
  }
);

module.exports = Strain;
