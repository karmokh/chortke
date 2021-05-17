const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Product_Waste extends Model {
}

Product_Waste.init({
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
    description: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize,
    modelName: 'Product_Waste',
    timestamps: true,
    paranoid: true,
});
module.exports = Product_Waste;