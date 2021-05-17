const {Sequelize, Op} = require("sequelize");
const Fund = require("../models/Fund");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req, res, next) => {
    try {
        let funds = await Fund.findAll();
        res.status(200).json({message: "funds", funds})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req, res, next) => {
    let id = req.params.fundId;
    try {
        let fund = await Fund.findByPk(id);
        if (!fund) {
            errorHandle("درخواست نامعتبر", "404",);
        }
        res.status(200).json({message: "bank data", fund})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.create = async (req, res, next) => {
    let {
        accountingCode,
        name,
        description,
        status,
        active,
    } = req.body;
    if (!accountingCode) {
        accountingCode = "0001";
    }
    try {
        const validate = await Fund.fundValidation(req.body);
        if (validate == true) {
            if (status == "true"){
                let fund = await Fund.findOne({where:{default:true}});
                if (fund){
                    await fund.update({default: false});
                }
            }
            let fund = await Fund.create({
                accountingCode,
                name,
                description,
                default:status,
                active,
            });
            res.status(200).json({message: "نخواه گردان با موفقیت ایجاد گردید", fund});
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
exports.update = async (req, res, next) => {
    let id = req.params.fundId;
    let {
        name,
        description,
        status,
        active,
    } = req.body;
    const validate = await Fund.fundValidation(req.body);
    try {
        if (validate == true) {
            let fund = await Fund.findByPk(id)
            if (!fund) {
                errorHandle("404", "درخواست نا معتبر")
            }
            // if (req.userId !== fund.userId){
            //     errorHandle("403","شما اجازه دسترسی ندارید")
            // }
            if (status == "true") {
                let fund = await Fund.findOne({
                    where: {
                        [Op.and]: [
                            {default: true},
                            {
                                id: {
                                    [Op.not]: id
                                }
                            }
                        ]
                    }
                });
                if (bank) {
                    await bank.update({default: false});
                }
            }
             await fund.update({
                name,
                description,
                default:status,
                active,
            });
            res.status(200).json({message: "نخواه گردان با موفقیت ویرایش گردید", fund});
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
exports.delete = async (req, res, next) => {
    let id = req.params.fundId;
    try {
        let fund = await Fund.findByPk(id);
        if (!fund) {
            errorHandle('درخواست نا معتبر', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('شما اجازه دسترسی ندارید', '403');
        // }
        // if (exit accounting document){ errorHandle('شما اجازه دسترسی ندارید', '403');}
        await fund.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message: "تنخواه گردان با موفقیت حذف گردید"})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}