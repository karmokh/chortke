const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Permissions extends Model {}
Permissions.init({
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'Permissions',
    timestamps:true,
    paranoid: true,
});
module.exports = Permissions;