const Seller = require("../models/Seller");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req,res,next)=>{}
exports.show = async (req,res,next)=>{
    let id = req.params.sellerId;
    try{
        let seller = await Seller.findByPk(id);
        if (!seller){
            errorHandle("کاربر وجود ندارد","404");
        }
        res.status(200).json({message:"اطلاعات فروشنده",})
    }catch (err) {
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
        sales,
        salesReturn,
        description,
        commisionFactor,
    } = req.body;
    if (!accountingCode) {
        accountingCode = "0001";
    }
    const validate = await Seller.sellerValidation(req.body);
    try{
        if (validate == true) {
            let seller = await Seller.create({
                accountingCode,
                name,
                sales,
                salesReturn,
                description,
                commisionFactor
            });
            res.status(200).json({message: "فروشنده با موفقیت ایجاد گردید", seller});
        }else {
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message);
            })
            errorHandle(errors, '422');
        }
    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.update = async (req,res,next)=>{
    let id = req.params.sellerId;
    let {
        name,
        sales,
        salesReturn,
        description,
        commisionFactor,
    } = req.body;
    const validate = await Seller.sellerValidation(req.body);
    try{
        if (validate == true) {
            let seller = await Seller.findByPk(id);
            if (!seller){
                errorHandle("فرووشنده وجود ندارد","404");
            }
            // if (req.userId !== seller.userId){
            //     errorHandle("403","شما اجازه دسترسی ندارید")
            // }
              await seller.update({
                name,
                sales,
                salesReturn,
                description,
                commisionFactor
            });
            res.status(200).json({message: "فروشنده با موفقیت ویرایش گردید", seller});
        }else {
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message);
            })
            errorHandle(errors, '422');
        }
    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.delete = async (req,res,next)=>{}