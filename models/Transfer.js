const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Transfer extends Model {}
Transfer.init({
    accountingCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    wage:{
        type:DataTypes.STRING,
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    refrence:{
        type:DataTypes.STRING,
    },
    description:{
        type:DataTypes.TEXT,
    },
    fromId: DataTypes.INTEGER,
    fromType: DataTypes.INTEGER,
    toId: DataTypes.INTEGER,
    toType: DataTypes.INTEGER,
},{
    sequelize,
    modelName: 'Transfer',
    timestamps:true,
    paranoid: true,
});
module.exports = Transfer;