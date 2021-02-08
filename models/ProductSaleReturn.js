const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ProductSaleReturn extends Model {}
ProductSaleReturn.init({
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
    modelName: 'ProductSaleReturn',
    timestamps:true,
    paranoid: true,
});
module.exports = ProductSaleReturn;