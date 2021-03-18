const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/userValidation');
class User extends Model {
    static userValidation(body) {
        return v.validate(body,schema);
    }
}
User.init({
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    phone:{
        type : DataTypes.STRING,
    },
    email:{
        type : DataTypes.STRING,
        allowNull : false
    },
    password:{
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    sequelize,
    modelName: 'User',
    timestamps:true,
    paranoid: true,
});
module.exports = User;