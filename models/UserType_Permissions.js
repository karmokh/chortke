const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class UserType_Permissions extends Model {}
UserType_Permissions.init({
    title:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'UserType_Permissions',
    timestamps:true,
    paranoid: true,
});
module.exports = UserType_Permissions;