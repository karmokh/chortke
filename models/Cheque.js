const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Cheque extends Model {
}

Cheque.init({
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    priceUnit: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    bank: {
        type: DataTypes.STRING(32),
    },
    branch: {
        type: DataTypes.STRING(32),
    },
    number: {
        type: DataTypes.STRING(32),
    },
    dueDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    type: {
        type: DataTypes.ENUM('دریافت', 'پرداخت')
    },
    status: {
        type: DataTypes.ENUM('عادی', 'در جریان وصول', 'پاس شده', 'عودت شده', 'خرج شده')
    },
}, {
    sequelize,
    modelName: 'Cheque',
    timestamps: true,
    paranoid: true,
});
module.exports = Cheque;