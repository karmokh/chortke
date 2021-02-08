const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Payment extends Model {}
Payment.init({
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
    modelName: 'Payment',
    timestamps:true,
    paranoid: true,
});
module.exports = Payment;