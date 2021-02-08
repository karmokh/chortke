const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Shareholder extends Model {}
Shareholder.init({
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'Shareholder',
    timestamps:true,
    paranoid: true,
});
module.exports = Shareholder;