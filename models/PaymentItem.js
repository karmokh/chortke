const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class PaymentItem extends Model {}
PaymentItem.init({
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    paymentableId: DataTypes.INTEGER,
    paymentableType: DataTypes.INTEGER,
    optionableId: DataTypes.INTEGER,
    optionableType: DataTypes.INTEGER,
},{
    sequelize,
    modelName: 'PaymentItem',
    timestamps:true,
    paranoid: true,
});
module.exports = PaymentItem;