const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/productValidation');

class Product extends Model {
    static productValidation(body) {
        return v.validate(body, schema);
    }
}

Product.init({
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    title: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    isProduct: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    code: {
        type: DataTypes.STRING(32),
    },
    barcode: {
        type: DataTypes.STRING(64),
    },
    imageUrl: {
        type: DataTypes.STRING(128)
    },
    sellPrice: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    salesDescription: {
        type: DataTypes.TEXT,
    },
    buyPrice: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    buyDescription: {
        type: DataTypes.TEXT,
    },
    saleTax: {
        type: DataTypes.TINYINT.UNSIGNED
    },
    buyTax: {
        type: DataTypes.TINYINT.UNSIGNED
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    sequelize,
    modelName: 'Product',
    timestamps: true,
    paranoid: true,
});
module.exports = Product;