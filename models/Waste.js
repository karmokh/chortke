const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Waste extends Model {}
Waste.init({
    accountingCode:{
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
    number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sum:{
        type:DataTypes.STRING,
        allowNull:false
    },
    refrence:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'Waste',
    timestamps:true,
    paranoid: true,
});
module.exports = Waste;