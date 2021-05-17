const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Receive extends Model {
}

Receive.init({
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
    modelName: 'Receive',
    timestamps: true,
    paranoid: true,
});
module.exports = Receive;