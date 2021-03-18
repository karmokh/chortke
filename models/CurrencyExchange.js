const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class CurrencyExchange extends Model {}
CurrencyExchange.init({
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'CurrencyExchange',
    timestamps:true,
    paranoid: true,
});
module.exports = CurrencyExchange;