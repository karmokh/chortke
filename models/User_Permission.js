const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class User_Permission extends Model {
}

User_Permission.init({
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
    modelName: 'User_Permission',
    timestamps: true,
    paranoid: true,
});
module.exports = User_Permission;