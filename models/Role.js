const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Role extends Model {
}

Role.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Role',
    timestamps: true,
    paranoid: true,
});
module.exports = Role;