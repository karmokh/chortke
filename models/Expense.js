const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Expense extends Model {}
Expense.init({
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
    modelName: 'Expense',
    timestamps:true,
    paranoid: true,
});
module.exports = Expense;