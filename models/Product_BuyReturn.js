const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Product_BuyReturn extends Model {}
Product_BuyReturn.init({
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
        type:DataTypes.STRING,
    },
    sum:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'Product_BuyReturn',
    timestamps:true,
    paranoid: true,
});
module.exports = Product_BuyReturn;