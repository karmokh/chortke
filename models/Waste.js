const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Waste extends Model {
}

Waste.init({
    accountingCode: {
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
    modelName: 'Waste',
    timestamps: true,
    paranoid: true,
});
module.exports = Waste;