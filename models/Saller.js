const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Saller extends Model {}
Saller.init({
    accountingCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sales:{
        type:DataTypes.STRING,
    },
    salesReturn:{
        type:DataTypes.STRING,
    },
    description:{
        type:DataTypes.TEXT,
    },
    commisionFactor:{
        type:DataTypes.BOOLEAN,
        defaultValue:0
    }
},{
    sequelize,
    modelName: 'Saller',
    timestamps:true,
    paranoid: true,
});
module.exports = Saller;