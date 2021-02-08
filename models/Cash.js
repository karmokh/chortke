const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Cash extends Model {}
Cash.init({
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
    modelName: 'Cash',
    timestamps:true,
    paranoid: true,
});
module.exports = Cash;