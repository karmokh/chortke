const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class UserActivity extends Model {}
UserActivity.init({
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'UserActivity',
    timestamps:true,
    paranoid: true,
});
module.exports = UserActivity;