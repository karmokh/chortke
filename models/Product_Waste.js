const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Product_Waste extends Model {}
Product_Waste.init({
    description:{
        type:DataTypes.TEXT,
    },
    util:{
        type:DataTypes.STRING,
        allowNull:false
    },
    number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sum:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Product_Waste',
    timestamps:true,
    paranoid: true,
});
module.exports = Product_Waste;