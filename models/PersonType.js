const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class PersonType extends Model {}
PersonType.init({
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
    parent_id:{
        type : DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'PersonType',
    timestamps:true,
    paranoid: true,
});
module.exports = PersonType;