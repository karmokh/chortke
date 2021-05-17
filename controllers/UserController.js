const {Sequelize, Op} = require("sequelize");
const User = require("../models/User");
const errorHandle = require("./errorHandele/errorCreate");
const Message = require("../messages/messages");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.index = async (req, res, next) => {
}
exports.show = async (req, res, next) => {
}
exports.registerStep1 = async (req, res, next) => {
    let {
        firstName,
        lastName,
        phone,
        email
    } = req.body;
    const validate = await User.userValidation(req.body);
    try {
        if (validate == true) {
            let user;
            if (email || phone) {
                if (email) {
                    user = await User.findOne({where: {email: email}});
                }
                if (phone) {
                    user = await User.findOne({where: {phone: phone}});
                }
                if (!user) {
                    let verifyCodePhone = Math.floor(Math.random() * 10000);
                    let verifyCodeEmail = Math.floor(Math.random() * 10000);
                    user = await User.create({
                        firstName,
                        lastName,
                            phone,
                            email,
                            // UserTypeId:1,
                            verifyCodePhone: phone ? verifyCodePhone : null,
                            verifyCodeEmail: email ? verifyCodeEmail : null
                        }
                    );
                    console.log(typeof user)
                    let token = await jwt.sign({
                        userId: user.id,
                        email: user.email
                    }, 'somesupersecretsecret');
                    user.dataValues.token = token;
                    console.log(user);
                    res.status(200).json({message: "کاربر با موفقیت ثبت نام گردید", user});
                } else {
                    errorHandle('کاربر وجود دارد', 409);
                }
            } else {
                errorHandle('لطفا ایمیل یا شماره موبایل یا هر دو را وارد نمایید', 422);
            }
        } else {
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message)
            })
            errorHandle(errors, '422');
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.registerStep2 = async (req, res, next) => {
    let {
        phone,
        email,
        emailUpdate,
        phoneUpdate
    } = req.body
    try {
        let user;
        if (email || phone) {
            if (email) {
                user = await User.findOne({where: {email: email}});
            }
            if (phone) {
                user = await User.findOne({where: {phone: phone}});
            }
            if (user) {
                await user.update({
                        phone: phoneUpdate ? phoneUpdate : user.phone,
                        email: emailUpdate ? emailUpdate : user.email,
                    }
                );
            } else {
                errorHandle('کاربری با این اطلاعات وجود ندارد', 401)

            }
        } else {

        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.verify = async (req, res, next) => {
    let {
        phone,
        email,
        verifyCodePhone,
        verifyCodeEmail,
        password,
    } = req.body
    let user;
    if (email || phone) {
        if (email) {
            user = await User.findOne({where: {email: email}});
        }
        if (phone) {
            user = await User.findOne({where: {phone: phone}});
        }
        if (user) {
            try {
                if (user.phoneVerifiedAt == null && user.emailVerifiedAt == null) {
                    if (user.verifyCodePhone == verifyCodePhone && user.verifyCodeEmail == verifyCodeEmail) {
                        let hashedPassword = await bcrypt.hash(password, 12)
                        await user.update({
                                password: hashedPassword,
                                phoneVerifiedAt: new Date(),
                                emailVerifiedAt: new Date()
                            }
                        );
                        let token = jwt.sign({
                            userId: user.id,
                            email: user.email
                        }, 'somesupersecretsecret');
                        res.status(200).json({messasge: "login user", id: user.id, token});
                    } else {
                        errorHandle('کد تایید اشتباه است', 401);
                    }

                } else {
                    errorHandle('کاربر قبلا ثبت نام کرده است', 401);
                }
            } catch (err) {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
                next(err)
            }
        } else {
            errorHandle('کاربری با این اطلاعات وجود ندارد', 401)

        }
    }
}
exports.forgotPassword = async (req, res, next) => {
    let {forgetData} = req.body;
    let user;
    if (forgetData) {
        user = await User.findOne({
            where: {
                [Op.or]: [{phone: forgetData}, {email: forgetData}],
            }
        });
    }
    if (user) {
        try {
            let verifyCodeEmail = Math.floor(Math.random() * 10000);
            let verifyCodePhone = Math.floor(Math.random() * 10000);
            await user.update({
                    verifyCodeEmail,
                    verifyCodePhone
                }
            );
            res.status(200).json({message: "کد تایید ارسال گردید"});
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        }
    } else {
        res.status(404).json({message: "کاربری با این اطلاعات وجود ندارد"});
    }
}
exports.login = async (req, res, next) => {
    let {ePhone, password} = req.body;
    try {
        if (ePhone && password) {
            let user = await User.findOne({
                where: {
                    [Op.or]: [{phone: ePhone}, {email: ePhone}],
                }
            });
            if (!user) {
                errorHandle("کاربری با این اطلاعات وجود ندارد", 401);
            }
            if(!user.phoneVerifiedAt && !user.emailVerifiedAt){
                errorHandle('لطفا ابتدا تایید کد را انجام دهید',401)
            }
            let passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                errorHandle("کاربری با این اطلاعات وجود ندارد", 401);
            }
            let token = jwt.sign({
                userId: user.id,
                email: user.email
            }, 'somesupersecretsecret');
            res.status(200).json({messasge: "login user", id: user.id, token});
        } else {
            errorHandle("لطفا اطلاعات مورد نیاز را وارد کنید", 422);
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}


