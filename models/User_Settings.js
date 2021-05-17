const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class User_Settings extends Model {
}

User_Settings.init({
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
    modelName: 'User_Settings',
    timestamps: true,
    paranoid: true,
});
module.exports = User_Settings;