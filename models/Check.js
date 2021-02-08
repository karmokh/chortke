const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Check extends Model {}
Check.init({
    accountingCode:{
        type:DataTypes.STRING,
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    branch:{
        type:DataTypes.STRING,
    },
    payTo:{
        type:DataTypes.STRING,
    },
    type:{
        type:DataTypes.ENUM('دریافت','پرداخت')
    },
    status:{
        type:DataTypes.ENUM('عادی','در جریان وصول','پاس شده','عودت شده','خرج شده')
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    modelName: 'Check',
    timestamps:true,
    paranoid: true,
});
module.exports = Check;