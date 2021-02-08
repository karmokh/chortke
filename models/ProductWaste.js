const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ProductWaste extends Model {}
ProductWaste.init({
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
    modelName: 'ProductWaste',
    timestamps:true,
    paranoid: true,
});
module.exports = ProductWaste;