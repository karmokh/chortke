const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Payment_Item extends Model {
}

Payment_Item.init({
    amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    wage: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    reference: {
        type: DataTypes.STRING(64),
    },
    description: {
        type: DataTypes.TEXT,
    },
    paymentableId: DataTypes.INTEGER,
    paymentableType: DataTypes.INTEGER,
    optionableId: DataTypes.INTEGER,
    optionableType: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'Payment_Item',
    timestamps: true,
    paranoid: true,
});
module.exports = Payment_Item;