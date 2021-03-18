const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/projectValidation');
class Project extends Model {
    static projectValidation(body) {
        return v.validate(body,schema);
    }
}
Project.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    default:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
},{
    sequelize,
    modelName: 'Project',
    timestamps:true,
    paranoid: true,
});
module.exports = Project;