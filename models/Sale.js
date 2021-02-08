const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Sale extends Model {}
Sale.init({
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dueDate:{
        type:DataTypes.STRING,
        allowNull:false
    },
    number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    payable:{
        type:DataTypes.STRING,
        allowNull:false
    },
    paid:{
        type:DataTypes.STRING,
    },
    rest:{
        type:DataTypes.STRING,
    },
    discount:{
        type:DataTypes.STRING,
    },
    sum:{
        type:DataTypes.STRING,
    },
    freight:{
        type:DataTypes.STRING,
    },
    title:{
        type:DataTypes.STRING,
    },
    status:{
        type:DataTypes.ENUM('پیش نویس','تایید شده','دریافت شده','مرجوع شده')
    },
    taxt:{
        type:DataTypes.STRING,
    },
    description:{
        type:DataTypes.TEXT,
    },
    refrence:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'Sale',
    timestamps:true,
    paranoid: true,
});
module.exports = Sale;