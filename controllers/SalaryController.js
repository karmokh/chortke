const {Sequelize, Op} = require("sequelize");
const Salary = require("../models/Salary");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req, res, next) => {
    try {
        let salaries = await Salary.findAll();
        res.status(200).json({message: "تنخواه گردان ها", salaries})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req, res, next) => {
    let id = req.params.salaryId;
    try {
        let salary = await Salary.findByPk(id);
        if (!salary) {
            errorHandle("درخواست نامعتبر", "404",);
        }
        res.status(200).json({message: "bank data", salary})
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
        const validate = await Salary.salaryValidation(req.body);
        if (validate == true) {
            if (status == "true"){
                let salary = await Salary.findOne({where:{default:true}});
                if (salary){
                    await salary.update({default: false});
                }
            }
            let salary = await Salary.create({
                accountingCode,
                name,
                description,
                default:status,
                active,
            });
            res.status(200).json({message: "نخواه گردان با موفقیت ایجاد گردید", salary});
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
    let id = req.params.salaryId;
    let {
        name,
        description,
        status,
        active,
    } = req.body;
    const validate = await Salary.salaryValidation(req.body);
    try {
        if (validate == true) {
            let salary = await Salary.findByPk(id)
            if (!salary) {
                errorHandle("404", "درخواست نا معتبر")
            }
            // if (req.userId !== salary.userId){
            //     errorHandle("403","شما اجازه دسترسی ندارید")
            // }
            if (status == "true") {
                let salary = await Salary.findOne({
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
             await salary.update({
                name,
                description,
                default:status,
                active,
            });
            res.status(200).json({message: "نخواه گردان با موفقیت ویرایش گردید", salary});
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
    let id = req.params.salaryId;
    try {
        let salary = await Salary.findByPk(id);
        if (!salary) {
            errorHandle('درخواست نا معتبر', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('شما اجازه دسترسی ندارید', '403');
        // }
        // if (exit accounting document){ errorHandle('شما اجازه دسترسی ندارید', '403');}
        await salary.destroy({
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