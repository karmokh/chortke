const {Sequelize, Op} = require("sequelize");
const Bank = require("../models/Bank");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req, res, next) => {
    try {
        let banks = await Bank.findAll();
        res.status(200).json({message: "بانک ها", banks})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req, res, next) => {
    let id = req.params.bankId
    try {
        let bank = await Bank.findByPk(id);
        if (!bank) {
            errorHandle("درخواست نامعتبر", "404",);
        }
        res.status(200).json({message: "اطلاعات بانک", bank})
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
        branch,
        accountNumber,
        description,
        status,
        active,
    } = req.body;
    if (!accountingCode) {
        accountingCode = "0001";
    }
    const validate = await Bank.bankValidation(req.body);
    try {
        if (validate == true) {
            if (status == "true") {
                let bank = await Bank.findOne({where: {default: true}});
                if (bank) {
                    await bank.update({default: false});
                }
            }
            let bank = await Bank.create({
                    accountingCode,
                    name,
                    branch,
                    accountNumber,
                    description,
                    default: status,
                    active
                }
            );
            res.status(200).json({message: "بانک با موفقیت ایجاد گردید", bank});
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
    let id = req.params.bankId;
    let {
        name,
        branch,
        accountNumber,
        description,
        status,
        active,
    } = req.body;
    const validate = await Bank.bankValidation(req.body);
    try {
        if (validate == true) {
            let bank = await Bank.findByPk(id);
            if (!bank) {
                errorHandle("404", "درخواست نامعتبر")
            }
            // if (req.userId !== bank.userId){
            //     errorHandle("403","شما اجازه دسترسی ندارید")
            // }
            if (status == "true") {
                let bank = await Bank.findOne({
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
            await bank.update(
                {
                    name,
                    branch,
                    accountNumber,
                    description,
                    default: status,
                    active
                }
            );
            res.status(200).json({message: "بانک با موفقیت ویرایش گردید", bank});
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
    let id = req.params.bankId;
    try {
        let bank = await Bank.findByPk(id);
        if (!bank) {
            errorHandle('درخواست نا معتبر', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('شما اجازه دسترسی ندارید', '403');
        // }
        // if (exit accounting document){ errorHandle('شما اجازه دسترسی ندارید', '403');}
        await bank.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message: "بانک با موفقیت حذف گردید"});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}