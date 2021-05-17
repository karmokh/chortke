const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../config/database");
const {v, schema} = require("./secure/userValidation");

class User extends Model {
    static userValidation(body) {
        return v.validate(body, schema);
    }
}

User.init(
    {
        firstName: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING(128),
        },
        phone: {
            type: DataTypes.STRING(15),
            unique: true,
        },
        email: {
            type: DataTypes.STRING(64),
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        verifyCodePhone: {
            type: DataTypes.INTEGER,
        },
        verifyCodeEmail: {
            type: DataTypes.INTEGER,
        },
        phoneVerifiedAt: {
            type: DataTypes.DATE,
        },
        emailVerifiedAt: {
            type: DataTypes.DATE,
        },
        referralCode: {
            type: DataTypes.INTEGER,
        },
        inviteCode: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: "User",
        timestamps: true,
        paranoid: true,
    }
);
module.exports = User;
