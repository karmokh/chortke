const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/sellerValidation');
class Seller extends Model {
    static sellerValidation(body) {
        return v.validate(body,schema);
    }
}
Seller.init({
    accountingCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sales:{
        type:DataTypes.STRING,
    },
    salesReturn:{
        type:DataTypes.STRING,
    },
    description:{
        type:DataTypes.TEXT,
    },
    commisionFactor:{
        type:DataTypes.BOOLEAN,
        defaultValue:0
    }
},{
    sequelize,
    modelName: 'Seller',
    timestamps:true,
    paranoid: true,
});
module.exports = Seller;