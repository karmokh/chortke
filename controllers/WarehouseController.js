const Warehouse = require("../models/Warehouse");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req,res,next)=>{
    try{
        let warehouses = await Warehouse.findAll();
        res.status(200).json({message:"انبارها",warehouses});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.warehouseId;
    try{
        let warehouse = await Warehouse.findByPk(id);
        if(!warehouse){
            errorHandle('انبار وجود ندارد', '404');
        }
        res.status(200).json({message:"اطلاعات انبار",warehouse});
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
        warehouseKeeper,
        phone,
        address,
        active
    } = req.body;
    if (!code) {
        code = "0001";
    }
    const validate = await Warehouse.warehouseValidation(req.body);
    try{
        if(validate == true){
            let warehouse = await Warehouse.create({
                code,
                name,
                warehouseKeeper,
                phone,
                address,
                active
            });
            res.status(200).json({message:"warehouse created",warehouse});
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
    let id = req.params.warehouseId;
    let {
        name,
        warehouseKeeper,
        phone,
        address,
        active
    } = req.body;
    const validate = await Warehouse.warehouseValidation(req.body);
    try{
        if(validate == true){
            let warehouse =  await Warehouse.findByPk(id);
            if(!warehouse){
                errorHandle("انبار وجود ندارد","404");
            }
            // if(user.personId !== req.userId){
            //     errorHandle('دسترسی ندارد', '403');
            // }
            await warehouse.update({
                name,
                warehouseKeeper,
                phone,
                address,
                active
            });
            res.status(200).json({message:"انبار با موفقیت ویرایش گردید",warehouse});
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
    let id = req.params.warehouseId;
    try{
        let warehouse = await Warehouse.findByPk(id);
        if(!warehouse){
            errorHandle('انبار وجود ندارد', '404');
        }
        // if(user.personId !== req.userId){
        //     errorHandle('دسترسی ندارد', '403');
        // }
        await warehouse.destroy({
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