const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Receive extends Model {}
Receive.init({
    accountingCode:{
        type:DataTypes.STRING,
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
    },

},{
    sequelize,
    modelName: 'Receive',
    timestamps:true,
    paranoid: true,
});
module.exports = Receive;