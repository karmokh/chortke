const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ProductBuy extends Model {}
ProductBuy.init({
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
    modelName: 'ProductBuy',
    timestamps:true,
    paranoid: true,
});
module.exports = ProductBuy;