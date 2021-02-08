const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Accounting extends Model {}
Accounting.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Accounting',
    timestamps: true,
    paranoid: true,
});
module.exports = Accounting;