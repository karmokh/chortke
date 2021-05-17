const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Subscription_Feature extends Model {
}

Subscription_Feature.init({
    title: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Subscription_Feature',
    timestamps: true,
});
module.exports = Subscription_Feature;