const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Business_Settings extends Model {
}

Business_Settings.init({
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
    modelName: 'Business_Settings',
    timestamps: true,
});
module.exports = Business_Settings;