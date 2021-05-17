const Receive = require("../models/Receive");
exports.index = async (req,res,next)=>{}
exports.show = async (req,res,next)=>{}
exports.create = async (req,res,next)=>{
    let{
        accountingCode,
        amount,
        date,
        description
    }=req.body;
    try{
        let receive = await Receive.create({
            accountingCode,
            amount,
            date,
            description
        })
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.update = async (req,res,next)=>{}
exports.delete = async (req,res,next)=>{}