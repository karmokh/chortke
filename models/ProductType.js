const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ProductType extends Model {}
ProductType.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    parent_id:{
        type : DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'ProductType',
    timestamps:true,
    paranoid: true,
});
module.exports = ProductType;