const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      // Integer
      type: DataTypes.INTEGER,
      // Does not allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true
    },
    product_id: {
      // Integer
      type: DataTypes.INTEGER,
      // References the product model's id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      // Integer
      type: DataTypes.INTEGER,
      // References the tag model's id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;