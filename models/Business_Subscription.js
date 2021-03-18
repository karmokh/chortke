const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Business_Subscription extends Model {}
Business_Subscription.init({
    title:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'Business_Subscription',
    timestamps:true,
    paranoid: true,
});
module.exports = Business_Subscription;