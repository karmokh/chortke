const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Receive_Item extends Model {
}

Receive_Item.init({
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
    receivableId: DataTypes.INTEGER,
    receivableType: DataTypes.INTEGER,
    optionableId: DataTypes.INTEGER,
    optionableType: DataTypes.INTEGER,

}, {
    sequelize,
    modelName: 'Receive_Item',
    timestamps: true,
    paranoid: true,
});
module.exports = Receive_Item;