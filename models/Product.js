const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Product extends Model {}
Product.init({
    accountingCode:{
        type:DataTypes.STRING,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productCode:{
        type:DataTypes.STRING,
    },
    barcode:{
        type:DataTypes.STRING,
    },
    sellPrice:{
        type:DataTypes.STRING,
    },
    salesDescription:{
        type:DataTypes.STRING,
    },
    buyPrice:{
        type:DataTypes.STRING,
    },
    buyDescription:{
        type:DataTypes.STRING,
    },
    mainUnit:{
        type:DataTypes.STRING,
    },
    subUnit:{
        type:DataTypes.STRING,
    },
    ConversionRatio:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.TEXT,
    },
    salesTax:{
        type:DataTypes.INTEGER
    },
    buyTax:{
        type:DataTypes.INTEGER
    },
    stock:{
        type:DataTypes.STRING,
    },
    orderTime:{
        type:DataTypes.STRING,
    },
    orderPoint:{
        type:DataTypes.STRING,
    },
    orderMinimum:{
        type:DataTypes.STRING,
    },
    control:{
        type:DataTypes.BOOLEAN,
        defaultValue: 1
    },
    type:{
        type:DataTypes.ENUM('کالا','خدمات')
    },
    active:{
        type:DataTypes.BOOLEAN,
    },
},{
    sequelize,
    modelName: 'Product',
    timestamps:true,
    paranoid: true,
});
module.exports = Product;