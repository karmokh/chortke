const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Store extends Model {}
Store.init({
    accountingCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    storekeeper:{
        type: DataTypes.STRING,
    },
    phone:{
        type : DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:1
    }
},{
    sequelize,
    modelName: 'Store',
    timestamps:true,
    paranoid: true,
});
module.exports = Store;