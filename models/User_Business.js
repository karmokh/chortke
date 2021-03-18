const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class User_Business extends Model {}
User_Business.init({
    title:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'User_Business',
    timestamps:true,
    paranoid: true,
});
module.exports = User_Business;