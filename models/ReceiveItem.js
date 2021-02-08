const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class ReceiveItem extends Model {}
ReceiveItem.init({
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    receivableId: DataTypes.INTEGER,
    receivableType: DataTypes.INTEGER,
    optionableId: DataTypes.INTEGER,
    optionableType: DataTypes.INTEGER,

},{
    sequelize,
    modelName: 'ReceiveItem',
    timestamps:true,
    paranoid: true,
});
module.exports = ReceiveItem;