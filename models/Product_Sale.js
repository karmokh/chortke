const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Product_Sale extends Model {}
Product_Sale.init({
    number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    },
    discount:{
        type:DataTypes.STRING,
    },
    taxt:{
        type:DataTypes.TEXT,
    },
    sum:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'Product_Sale',
    timestamps:true,
    paranoid: true,
});
module.exports = Product_Sale;