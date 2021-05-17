const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Product_Sale extends Model {}
Product_Sale.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING(16),
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    discount: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0
    },
    tax: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT,
    },
},{
    sequelize,
    modelName: 'Product_Sale',
    timestamps:true,
    paranoid: true,
});
module.exports = Product_Sale;