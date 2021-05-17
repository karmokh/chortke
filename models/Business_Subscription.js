const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Business_Subscription extends Model {
}

Business_Subscription.init({
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Business_Subscription',
    timestamps: true,
    paranoid: true,
});
module.exports = Business_Subscription;