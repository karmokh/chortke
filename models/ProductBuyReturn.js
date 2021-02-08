const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ProductBuyReturn extends Model {}
ProductBuyReturn.init({
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
    modelName: 'ProductBuyReturn',
    timestamps:true,
    paranoid: true,
});
module.exports = ProductBuyReturn;