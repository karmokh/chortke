const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Salary extends Model{}
Salary.init({
    accountingCode:{
        type:DataTypes.STRING,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
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
    modelName: 'Salary',
    timestamps:true,
    paranoid: true,
});
module.exports = Salary;