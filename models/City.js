const { Model, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init(
  {
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
        required: true,
      },
      latitudeNorth: {
        type: DataTypes.DECIMAL(12,8),
        required: true,
      },
      latitudeWest: {
        type: DataTypes.DECIMAL(12,8),
        required: true,
      },
      latitudeSouth: {
        type: DataTypes.DECIMAL(12,8),
        required: true,
      },
      latitudeEast: {
        type:DataTypes.DECIMAL(12,8),
        required: true,
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'city',
  }
);

module.exports = City;
