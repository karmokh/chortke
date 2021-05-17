const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Buy_Return extends Model {
}

Buy_Return.init({
    title: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    dueDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    priceUnit: {
        type: DataTypes.STRING(16),
    },
    transferPrice: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    discount: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('پیش نویس', 'تایید شده', 'دریافت شده', 'مرجوع شده')
    },
    reference: {
        type: DataTypes.STRING(64),
    },
    description: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize,
    modelName: 'Buy_Return',
    timestamps: true,
    paranoid: true,
});
module.exports = Buy_Return;