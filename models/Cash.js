const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/cashValidation');
class Cash extends Model {
    static cashValidation(body) {
        return v.validate(body,schema);
    }
}
Cash.init({
    accountingCode:{
        type:DataTypes.STRING,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    credit:{
        type:DataTypes.STRING,
    },
    description:{
        type:DataTypes.TEXT,

    },
    default:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    sequelize,
    modelName: 'Cash',
    timestamps:true,
    paranoid: true,
});
module.exports = Cash;