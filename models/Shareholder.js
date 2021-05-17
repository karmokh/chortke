const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Shareholder extends Model {
}

Shareholder.init({
    firstName: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    percent: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0
    },
}, {
    sequelize,
    modelName: 'Shareholder',
    timestamps: true,
    paranoid: true,
});
module.exports = Shareholder;