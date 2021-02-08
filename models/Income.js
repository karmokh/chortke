const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Income extends Model {}
Income.init({
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
    modelName: 'Income',
    timestamps:true,
    paranoid: true,
});
module.exports = Income;