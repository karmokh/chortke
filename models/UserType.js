const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class UserType extends Model {}
UserType.init({
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
    parent_id:{
        type : DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'UserType',
    timestamps:true,
    paranoid: true,
});
module.exports = UserType;