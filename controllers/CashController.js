const {Sequelize, Op} = require("sequelize");
const Cash = require("../models/Cash");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req,res,next)=>{
    try {
        let cashs = await Cash.findAll();
        res.status(200).json({message: "صندوق ها", cashs})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.cashId
    try {
        let cash = await Cash.findByPk(id);
        if (!cash) {
            errorHandle("درخواست نامعتبر", "404",);
        }
        res.status(200).json({message: "اطلاعات صندوق", cash})
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
    const validate = await Cash.cashValidation(req.body);
    try{
        if(validate == true){
            if (status == "true"){
                let cash = await Cash.findOne({where:{default:true}});
                if (cash){
                    await cash.update({default: false});
                }
            }
            let cash = await Cash.create({
                accountingCode,
                name,
                description,
                default:status,
                active
            });
            res.status(200).json({message:"صندوق با موفقیت ایجاد گردید",cash});
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
    let id = req.params.cashId;
    let {
        name,
        description,
        status,
        active
    } = req.body;
    const validate = await Cash.cashValidation(req.body);
    try{
        if(validate == true){
            let cash = await Cash.findByPk(id);
            if (!cash) {
                errorHandle("404", "درخواست نا معتبر")
            }
            // if (req.userId !== cash.userId){
            //     errorHandle("403","شما اجازه دسترسی ندارید")
            // }
            if (status == "true") {
                let bank = await Cash.findOne({
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
                if (cash) {
                    await cash.update({default: false});
                }
            }

            await cash.update({
                name,
                description,
                default:status,
                active
            });
            res.status(200).json({message:"صندوق با موفقیت ویرایش گردید",cash});
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
    let id = req.params.cashId;
    try {
        let cash = await Cash.findByPk(id);
        console.log(cash,id)
        if (!cash) {
            errorHandle('درخواست نامعتبر', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('شما اجازه دسترسی ندارید', '403');
        // }
        // if (exit accounting document){ errorHandle('شما اجازه حذف ندارید', '409');}
        await cash.destroy({
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