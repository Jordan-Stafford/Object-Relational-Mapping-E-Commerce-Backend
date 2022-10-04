// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // Instructions in modules/Databse Models will be helpful for this
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
    product_name: {
      // String
      type: DataTypes.STRING,
      // Does not allow null values
      allowNull: false
    },
    price: {
      // Decimal
      type: DataTypes.DECIMAL,
      // Does not allow null values
      allowNull: false,
      // Validates that the value is a decimal
      validate: {
        isDecimal: true
      }
    },
    stock: {
      // Integer
      type: DataTypes.INTEGER,
      // Does not allow null values
      allowNull: false,
      // Set a default alue of 10
      defaultValue: 10,
      // Validates that the value is numeric
      Validate: {
        isNumeric: true
      }
    },
    category_id: {
      // Integer
      type: DataTypes.INTEGER,
      // References the category model's id
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;