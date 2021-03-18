const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const {v,schema} =  require('./secure/personValidation');
class Person extends Model {
    static personValidation(body) {
        return v.validate(body,schema);
    }
}
Person.init({
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
    title:{
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
    imageUrl:{
        type: DataTypes.STRING,
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    sequelize,
    modelName: 'Person',
    timestamps:true,
    paranoid: true,
});
module.exports = Person;