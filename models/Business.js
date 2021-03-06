const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/businessValidation');
class Business extends Model {
    static businessValidation(body) {
        return v.validate(body,schema);
    }
}
Business.init({
    nickName:{
        type : DataTypes.STRING(64),
        allowNull : false
    },
    legalName:{
        type : DataTypes.STRING(64),
        allowNull : false
    },
},{
    sequelize,
    modelName: 'Business',
    timestamps:true,
    paranoid: true,
});
module.exports = Business;