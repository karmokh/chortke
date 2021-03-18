const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/salaryValidation');
class Salary extends Model{
    static salaryValidation(body) {
        return v.validate(body,schema);
    }
}
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
        defaultValue: false
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    sequelize,
    modelName: 'Salary',
    timestamps:true,
    paranoid: true,
});
module.exports = Salary;