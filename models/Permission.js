const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Permission extends Model {
}

Permission.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Permission',
    timestamps: true,
    paranoid: true,
});
module.exports = Permission;