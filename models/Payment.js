const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Payment extends Model {
}

Payment.init({
    accountingCode: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    priceUnit: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize,
    modelName: 'Payment',
    timestamps: true,
    paranoid: true,
});
module.exports = Payment;