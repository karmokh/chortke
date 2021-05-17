const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require('./secure/warehouseValidation');

class Warehouse extends Model {
    static warehouseValidation(body) {
        return v.validate(body, schema);
    }
}

Warehouse.init({
    code: {
        type: DataTypes.STRING(16),
    },
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    warehouseKeeper: {
        type: DataTypes.STRING(32),
    },
    phone: {
        type: DataTypes.STRING(16),
    },
    address: {
        type: DataTypes.STRING(255),
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Warehouse',
    timestamps: true,
    paranoid: true,
});
module.exports = Warehouse;