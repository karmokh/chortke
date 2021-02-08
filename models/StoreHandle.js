const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class StoreHandle extends Model {}
StoreHandle.init({
    code:{
        type:DataTypes.STRING,
    },
    date:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.ENUM('در جریان','پایان یافته')
    },
    description:{
        type:DataTypes.TEXT
    },
},{
    sequelize,
    modelName: 'StoreHandle',
    timestamps:true,
    paranoid: true,
});
module.exports = StoreHandle;