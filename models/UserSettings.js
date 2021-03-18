const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class UserSettings extends Model {}
UserSettings.init({
    key:{
        type : DataTypes.STRING,
        allowNull : false
    },
    value:{
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'UserSettings',
    timestamps:true,
    paranoid: true,
});
module.exports = UserSettings;