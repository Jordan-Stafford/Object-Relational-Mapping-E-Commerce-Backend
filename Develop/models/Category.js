const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
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
      autoIncrement: true,
    },
    category_name: {
      // String
      type: DataTypes.STRING,
      // Does not allow null values
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
