const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class User_Permissions extends Model {}
User_Permissions.init({
    title:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'User_Permissions',
    timestamps:true,
    paranoid: true,
});
module.exports = User_Permissions;