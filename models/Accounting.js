const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Accounting extends Model {
}

Accounting.init({
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
    reference: {
        type: DataTypes.STRING(64),
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Accounting',
    timestamps: true,
    paranoid: true,
});
module.exports = Accounting;