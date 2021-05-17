const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Product_Settings extends Model {
}

Product_Settings.init({
    key: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    value: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Product_Settings',
    timestamps: true,
    paranoid: true,
});
module.exports = Product_Settings;