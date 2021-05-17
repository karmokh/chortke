const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/personValidation');

class Person extends Model {
    static personValidation(body) {
        return v.validate(body, schema);
    }
}

Person.init({
    nickName: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(32),
    },
    lastName: {
        type: DataTypes.STRING(32),
    },
    title: {
        type: DataTypes.STRING(32),
    },
    company: {
        type: DataTypes.STRING(32),
    },
    avatar: {
        type: DataTypes.STRING(128),
    },
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    description: {
        type: DataTypes.TEXT,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Person',
    timestamps: true,
    paranoid: true,
});
module.exports = Person;