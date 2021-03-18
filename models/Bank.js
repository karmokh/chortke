const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/bankValidation');
class Bank extends Model {
    static bankValidation(body) {
        return v.validate(body,schema);
    }
}
Bank.init({
    accountingCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        // allowNull:false
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
        defaultValue: false
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    sequelize,
    modelName: 'Bank',
    timestamps:true,
    paranoid: true,
});
module.exports = Bank;