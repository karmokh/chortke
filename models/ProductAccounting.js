const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ProductAccounting extends Model {}
ProductAccounting.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'ProductAccounting',
    timestamps:true,
    paranoid: true,
});
module.exports = ProductAccounting;