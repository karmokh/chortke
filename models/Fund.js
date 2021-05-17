const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/fundValidation');

class Fund extends Model {
    static fundValidation(body) {
        return v.validate(body, schema);
    }
}

Fund.init({
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
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
    modelName: 'Fund',
    timestamps: true,
    paranoid: true,
});
module.exports = Fund;