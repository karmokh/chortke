const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/bankValidation');

class Bank extends Model {
    static bankValidation(body) {
        return v.validate(body, schema);
    }
}

Bank.init({
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    branch: {
        type: DataTypes.STRING(32),
    },
    accountNumber: {
        type: DataTypes.STRING(64),
    },
    priceUnit: {
        type: DataTypes.STRING(16),
    },
    description: {
        type: DataTypes.TEXT,
    },
    default: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Bank',
    timestamps: true,
    paranoid: true,
});
module.exports = Bank;