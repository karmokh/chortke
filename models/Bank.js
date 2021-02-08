const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Bank extends Model {}
Bank.init({
    accountingCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    branch:{
        type:DataTypes.STRING,
    },
    accountNumber:{
        type:DataTypes.STRING,
    },
    credit:{
        type:DataTypes.STRING,
    },
    description:{
        type:DataTypes.TEXT,
    },
    default:{
        type:DataTypes.BOOLEAN,
        defaultValue: 0
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:1
    }
},{
    sequelize,
    modelName: 'Bank',
    timestamps:true,
    paranoid: true,
});
module.exports = Bank;