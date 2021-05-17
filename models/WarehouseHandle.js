const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class WarehouseHandle extends Model {
}

WarehouseHandle.init({
    accountingCode: {
        type: DataTypes.STRING(16),
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.ENUM('در جریان', 'پایان یافته')
    },
    description: {
        type: DataTypes.TEXT
    },
}, {
    sequelize,
    modelName: 'WarehouseHandle',
    timestamps: true,
    paranoid: true,
});
module.exports = WarehouseHandle;