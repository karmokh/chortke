const {Sequelize, Op} = require("sequelize");
const Cashier = require("../models/Cashier");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req,res,next)=>{
    try {
        let cashiers = await Cashier.findAll();
        res.status(200).json({message: "cashiers", cashiers})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.cashierId
    try {
        let cashier = await Cashier.findByPk(id);
        if (!cashier) {
            errorHandle("درخواست نامعتبر", "404",);
        }
        res.status(200).json({message: "اطلاعات صندوق", cashier})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.create = async (req,res,next)=>{
    let {
        accountingCode,
        name,
        description,
        status,
        active
    } = req.body;
    if (!accountingCode) {
        accountingCode = "0001";
    }
    const validate = await Cashier.cashierValidation(req.body);
    try{
        if(validate == true){
            if (status == "true"){
                let cashier = await Cashier.findOne({where:{default:true}});
                if (cashier){
                    await cashier.update({default: false});
                }
            }
            let cashier = await Cashier.create({
                accountingCode,
                name,
                description,
                default:status,
                active
            });
            res.status(200).json({message:"صندوق با موفقیت ایجاد گردید",cashier});
        }else {
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message)
            })
            errorHandle(errors, '422');
        }
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.update = async (req,res,next)=>{
    let id = req.params.cashierId;
    let {
        name,
        description,
        status,
        active
    } = req.body;
    const validate = await Cashier.cashierValidation(req.body);
    try{
        if(validate == true){
            let cashier = await Cashier.findByPk(id);
            if (!cashier) {
                errorHandle("404", "درخواست نا معتبر")
            }
            // if (req.userId !== cashier.userId){
            //     errorHandle("403","شما اجازه دسترسی ندارید")
            // }
            if (status == "true") {
                let bank = await Cashier.findOne({
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
                if (cashier) {
                    await cashier.update({default: false});
                }
            }

            await cashier.update({
                name,
                description,
                default:status,
                active
            });
            res.status(200).json({message:"صندوق با موفقیت ویرایش گردید",cashier});
        }else {
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message)
            })
            errorHandle(errors, '422');
        }
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.delete = async (req,res,next)=>{
    let id = req.params.cashierId;
    try {
        let cashier = await Cashier.findByPk(id);
        console.log(cashier,id)
        if (!cashier) {
            errorHandle('درخواست نامعتبر', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('شما اجازه دسترسی ندارید', '403');
        // }
        // if (exit accounting document){ errorHandle('شما اجازه حذف ندارید', '409');}
        await cashier.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message: "صندوق با موفقیت حذف گردید"})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}