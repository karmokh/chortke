const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Currency extends Model {
}

Currency.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Currency',
    timestamps: true,
    paranoid: true,
});
module.exports = Currency;