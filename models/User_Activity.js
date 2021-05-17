const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class User_Activity extends Model {
}

User_Activity.init({
    title: {
        type: DataTypes.STRING(32),
    },
    action: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    time: {
        type: DataTypes.TIME,
        defaultValue: DataTypes.NOW
    },
}, {
    sequelize,
    modelName: 'User_Activity',
    timestamps: true,
    paranoid: true,
});
module.exports = User_Activity;