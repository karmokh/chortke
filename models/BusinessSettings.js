const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class BusinessSettings extends Model {}
BusinessSettings.init({
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'BusinessSettings',
    timestamps:true,
    paranoid: true,
});
module.exports = BusinessSettings;