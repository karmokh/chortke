const Waste = require("../models/Waste");
const Product = require("../models/Product");
const ProductWaste = require("../models/Product_Waste");
exports.index = async (req,res,next)=>{}
exports.show = async (req,res,next)=>{}
exports.create = async (req,res,next)=>{
    try{
        // let {number,accountingCode,sum,date} = req.body;
        // const product = await Product.findOne({
        //     where: {
        //         name: "اصلی"
        //     }
        // });

        // const product = await Product.create({ name: 'p4dm3'});
        // const waste = await Waste.create({number,accountingCode,sum,date});

        // const waste = await Waste.findOne({
        //     where: {
        //         number: 7
        //     }
        // });

        // await product.addWaste(waste, { through: {number,sum,price:"7000", util:"aaa"} });
        // await ProductWaste.create({number:"6",sum:"6",price:"7000", util:"aaa",ProductId:12,WasteId:12});
        // res.status(200).json({message:"waste created"});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.update = async (req,res,next)=>{}
exports.delete = async (req,res,next)=>{}