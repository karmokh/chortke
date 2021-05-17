const Transfer = require("../models/Transfer");
const Bank = require("../models/Bank");
const Salary = require("../models/Fund");
const Cash = require("../models/Cashier");
exports.index = async (req, res, next) => {
    try {
        let transfers = await Transfer.findAll({
            // include: [
            //     {
            //         model: Bank,
            //         as: 'fromBank',
            //         // required:true
            //     },
            //     {
            //         model: Bank,
            //         as: 'toBank',
            //         // required:true
            //     },
            //     {
            //         model: Salary,
            //         as: 'fromSalary',
            //         // required:true
            //     },
            //     {
            //         model: Salary,
            //         as: 'toSalary',
            //         // required:true
            //     },
            //     {
            //         model: Cash,
            //         as: 'fromCash',
            //         // required:true
            //     },
            //     {
            //         model: Cash,
            //         as: 'toCash',
            //         // required:true
            //     }
            //     ]
            // include:['fromBankBelong',
            //     'fromSalaryBelong',
            //     'fromCashBelong',
            //     'toBankBelong',
            //     'toSalaryBelong',
            //     'toCashBelong']
            include: [
                {
                    model: Bank,
                    as: 'fromBankBelong',
                    // required:true
                },
                {
                    model: Bank,
                    as: 'toBankBelong',
                    // required:true
                },
                {
                    model: Salary,
                    as: 'fromSalaryBelong',
                    // required:true
                },
                {
                    model: Salary,
                    as: 'toSalaryBelong',
                    // required:true
                },
                {
                    model: Cash,
                    as: 'fromCashBelong',
                    // required:true
                },
                {
                    model: Cash,
                    as: 'toCashBelong',
                    // required:true
                }
                ]

        });
        res.status(200).json({message:'انتقال ها',transfers})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }

}
exports.show = async (req, res, next) => {
}
exports.create = async (req, res, next) => {
    let {
        amount,
        wage,
        date,
        content,
        refrence,
        description,
        fromId,
        fromType,
        toId,
        toType
    } = req.body;
    let accountingCode = "0001";
    const validate = Transfer.transferValidation(req.body)
    try {
        if (validate == true) {
            let transfer = await Transfer.create({
                accountingCode,
                amount,
                wage,
                date,
                content,
                refrence,
                description,
                fromId,
                fromType,
                toId,
                toType
            });
            res.status(201).json({message: "انتقال با موفقیت انجام شد", transfer});
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
}
exports.delete = async (req, res, next) => {
}