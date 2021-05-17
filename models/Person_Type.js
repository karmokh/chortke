const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Person_Type extends Model {
}

Person_Type.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    default: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Person_Type',
    timestamps: true,
    paranoid: true,
});
module.exports = Person_Type;