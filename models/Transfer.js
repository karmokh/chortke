const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/transferValidation');

class Transfer extends Model {
    static transferValidation(body) {
        return v.validate(body, schema);
    }
}

Transfer.init({
    accountingCode: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    from_wage: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    to_wage: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    from_reference: {
        type: DataTypes.STRING(64),
    },
    to_reference: {
        type: DataTypes.STRING(64),
    },
    description: {
        type: DataTypes.TEXT,
    },
    fromId: DataTypes.INTEGER,
    fromType: DataTypes.STRING(16),
    toId: DataTypes.INTEGER,
    toType: DataTypes.STRING(16),
}, {
    sequelize,
    modelName: 'Transfer',
    timestamps: true,
    paranoid: true,
});
module.exports = Transfer;