const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Role_Permission extends Model {
}

Role_Permission.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Role_Permission',
    timestamps: true,
    paranoid: true,
});
module.exports = Role_Permission;