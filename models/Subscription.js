const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Subscription extends Model {
}

Subscription.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Subscription',
    timestamps: true,
    paranoid: true,
});
module.exports = Subscription;