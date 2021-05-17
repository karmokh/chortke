const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Currency_Exchange extends Model {
}

Currency_Exchange.init({
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Currency_Exchange',
    timestamps: true,
    paranoid: true,
});
module.exports = Currency_Exchange;