const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/sellerValidation');

class Seller extends Model {
    static sellerValidation(body) {
        return v.validate(body, schema);
    }
}

Seller.init({
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    firstName: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    saleCommission: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0
    },
    saleReturnCommission: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT,
    },
    setFactorCommission: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'Seller',
    timestamps: true,
    paranoid: true,
});
module.exports = Seller;