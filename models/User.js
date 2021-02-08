const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class User extends Model {}
User.init({
    code:{
        type : DataTypes.STRING,
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    firstName:{
        type : DataTypes.STRING,
    },
    lastName:{
        type : DataTypes.STRING,
    },
    company:{
        type : DataTypes.STRING,
    },
    description:{
        type : DataTypes.TEXT,
    },
    contactCredit:{
        type : DataTypes.STRING,
    },
    nationalCode:{
        type : DataTypes.STRING,
    },
    economicCode:{
        type : DataTypes.STRING,
    },
    registrationNumber:{
        type : DataTypes.STRING,
    },
    phone:{
        type : DataTypes.STRING,
    },
    mobile:{
        type : DataTypes.STRING,
    },
    fax:{
        type : DataTypes.STRING,
    },
    email:{
        type : DataTypes.STRING,
    },
    web:{
        type : DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    },
    country:{
        type: DataTypes.STRING,
    },
    state:{
        type: DataTypes.STRING,
    },
    city:{
        type: DataTypes.STRING,
    },
    postalCode:{
        type: DataTypes.STRING,
    },
    sharePercent:{
        type: DataTypes.STRING,
    },
    liability:{
        type: DataTypes.STRING,
    },
    credits:{
        type: DataTypes.STRING,
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:1
    }
},{
    sequelize,
    modelName: 'User',
    timestamps:true,
    paranoid: true,
});
module.exports = User;