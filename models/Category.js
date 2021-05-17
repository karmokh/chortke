const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");

class Category extends Model {
}

Category.init({
    title: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Category',
    timestamps: true,
    paranoid: true,
});
module.exports = Category;