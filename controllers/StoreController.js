const Store = require("../models/Store");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req,res,next)=>{
    try{
        let stores = await Store.findAll();
        res.status(200).json({message:"انبارها",stores});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.storeId;
    try{
        let store = await Store.findByPk(id);
        if(!store){
            errorHandle('انبار وجود ندارد', '404');
        }
        res.status(200).json({message:"اطلاعات انبار",store});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.create = async (req,res,next)=>{
    let {
        code,
        name,
        storekeeper,
        phone,
        address,
        active
    } = req.body;
    if (!code) {
        code = "0001";
    }
    const validate = await Store.storeValidation(req.body);
    try{
        if(validate == true){
            let store = await Store.create({
                code,
                name,
                storekeeper,
                phone,
                address,
                active
            });
            res.status(200).json({message:"store created",store});
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
    let id = req.params.storeId;
    let {
        name,
        storekeeper,
        phone,
        address,
        active
    } = req.body;
    const validate = await Store.storeValidation(req.body);
    try{
        if(validate == true){
            let store =  await Store.findByPk(id);
            if(!store){
                errorHandle("انبار وجود ندارد","404");
            }
            // if(user.personId !== req.userId){
            //     errorHandle('دسترسی ندارد', '403');
            // }
            await store.update({
                name,
                storekeeper,
                phone,
                address,
                active
            });
            res.status(200).json({message:"انبار با موفقیت ویرایش گردید",store});
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
    let id = req.params.storeId;
    try{
        let store = await Store.findByPk(id);
        if(!store){
            errorHandle('انبار وجود ندارد', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('دسترسی ندارد', '403');
        // }
        await store.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message:" انبار با موفقیت حذف گردید"});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}