const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/storeValidation');
class Store extends Model {
    static storeValidation(body) {
        return v.validate(body,schema);
    }
}
Store.init({
    code:{
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