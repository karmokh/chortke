const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Project extends Model {}
Project.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    default:{
        type:DataTypes.BOOLEAN,
        defaultValue:0
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:0
    },
},{
    sequelize,
    modelName: 'Project',
    timestamps:true,
    paranoid: true,
});
module.exports = Project;