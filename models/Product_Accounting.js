const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Product_Accounting extends Model {}
Product_Accounting.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Product_Accounting',
    timestamps:true,
    paranoid: true,
});
module.exports = Product_Accounting;