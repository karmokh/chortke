const { Sequelize, Op } = require("sequelize");
const Product = require("../models/Product");
const errorHandle = require("./errorHandele/errorCreate");
const {editorImage} = require("../config/fileHandle");
const {pagination} = require("../utils/pagination");
const {clearFile} = require("../config/fileHandle");
exports.index = async (req,res,next)=>{
    // let value = req.body.data;
    const page = +req.query.page || 1;
    const postPerPage = +req.query.limit || 5;
    let paginate;
    // let data;
    try{
        const numberOfProducts = await Product.count();
        if(numberOfProducts > 0){
             paginate = pagination(page,postPerPage,numberOfProducts);
        }
        let products = await Product.findAll({ offset: (page - 1) * postPerPage, limit: postPerPage });
        // if (value == "product"){
        //      data = await Product.findAll({
        //     where : {
        //         type: "کالا"
        //     }
        //     });
        // }else {
        //      data = await Product.findAll({
        //         where : {
        //             type: "خدمات"
        //         }
        //     });
        // }
        products.map((product)=>{
            if(product.imageUrl) {
                product.imageUrl = req.get('host') + product.imageUrl;
            }
        })
        res.status(200).json({message:"محصولات",products,paginate})
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.productId;
    try{
        let product = await Product.findByPk(id);
        if(!product){
            errorHandle(' درخواست نامعتبر', '404');
        }
        if(product.imageUrl) {
            product.imageUrl = req.get('host') + product.imageUrl;
        }
        res.status(200).json({message:"اطلاعات محصول",product});
    }catch (err){
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.create = async (req,res,next)=>{
        let {
            accountingCode,
            name,
            productCode,
            barcode,
            sellPrice,
            salesDescription,
            buyPrice,
            buyDescription,
            mainUnit,
            subUnit,
            ConversionRatio,
            salesTax,
            buyTax,
            stock,
            orderTime,
            orderPoint,
            orderMinimum,
            control,
            type,
            active
        } = req.body;
        let imageUrl;
        if (!accountingCode){
        accountingCode = "0001"
    }
        const validate = await Product.productValidation(req.body);
    try{
        if(validate == true){
            let product = await Product.findOne({ where: { name:name } });
            if (product){
                errorHandle('محصول وجود دارد','409')
            }
            if(req.file){
                imageUrl = '/images/products/' + req.file.filename;
                let url = 'storage/images/products/'+ req.file.filename;
                await editorImage(req.file.path,url);
            }
             product = await Product.create({
                accountingCode,
                name,
                productCode,
                barcode,
                sellPrice,
                salesDescription,
                buyPrice,
                buyDescription,
                mainUnit,
                subUnit,
                ConversionRatio,
                salesTax,
                buyTax,
                stock,
                orderTime,
                orderPoint,
                orderMinimum,
                control,
                type,
                imageUrl,
                active
            });
            if(imageUrl) {
                product.imageUrl = req.get('host') + product.imageUrl;
            }
            res.status(201).json({message:"محصول با موفقیت ایجاد گردید",product});
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
    let id = req.params.productId;
    let {
        name,
        productCode,
        barcode,
        sellPrice,
        salesDescription,
        buyPrice,
        buyDescription,
        mainUnit,
        subUnit,
        ConversionRatio,
        salesTax,
        buyTax,
        stock,
        orderTime,
        orderPoint,
        orderMinimum,
        control,
        type,
        active
    } = req.body;
    let imageUrl;
    const validate = await Product.productValidation({name});
    try{
        if(validate == true) {
            let product = await Product.findByPk(id);
            if (!product) {
                errorHandle(' درخواست نا معتبر', '404');
            }
            // if(user.personId !== req.userId){
            //     errorHandle('کاربر وجود ندارد', '403');
            // }
            let productFind = await Product.findOne({
                where: {
                    [Op.and]: [
                        {name},
                        {id:{
                                [Op.not]:id
                            }
                        }
                    ]
                }
            });
            if (productFind){
                errorHandle('محصول وجود دارد','409')
            }
            if(req.file){
                if(product.imageUrl) {
                    clearFile(product.imageUrl);
                }
                imageUrl = '/images/products/' + req.file.filename;
                let url = 'storage/images/products/'+ req.file.filename;
                await editorImage(req.file.path,url);
            }
            await product.update({
                name,
                productCode,
                barcode,
                sellPrice,
                salesDescription,
                buyPrice,
                buyDescription,
                mainUnit,
                subUnit,
                ConversionRatio,
                salesTax,
                buyTax,
                stock,
                orderTime,
                orderPoint,
                orderMinimum,
                control,
                type,
                imageUrl,
                active
            }, {
                where: {
                    id
                }
            });
            if(product.imageUrl) {
                product.imageUrl = req.get('host') + product.imageUrl;
            }
            res.status(200).json({message: " محصول با موفقیت ویرایش گردید", product});
        } else {
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
        next(err);
    }
}
exports.delete = async (req,res,next)=>{
    let id = req.params.productId;
    try{
        let product = await Product.findByPk(id);
        if(!product){
            errorHandle(' درخواست نامعتبر', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('کاربر وجود ندارد', '403');
        // }

        clearFile(product.imageUrl);
        await Product.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message:" محصول با موفقیت حذف گردید"});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}