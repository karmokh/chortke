const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class PersonSettings extends Model {
}

PersonSettings.init({
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
    modelName: 'PersonSettings',
    timestamps: true,
});
module.exports = PersonSettings;