const { Sequelize, Op } = require("sequelize");
const Project = require("../models/Project");
const errorHandle = require("./errorHandele/errorCreate");
exports.index = async (req,res,next)=>{
    try{
        let projects = await Project.findAll();
        res.status(200).json({message: "پروژه ها",projects});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.projectId;
    try {
        let project = await Project.findByPk(id);
        if (!project) {
            errorHandle("پروژه وجود ندارد", "404");
        }
        res.status(200).json({message: "اطلاعات پروژه", project});
    }catch (err){
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.create = async (req,res,next)=>{
    let {name,status,active} = req.body;
    const validate = await Project.projectValidation(req.body)
    try{
        if (validate == true){
            if (status == "true") {
                let project = await Project.findOne({where: {default: true}});
                if (project) {
                    await project.update({default: false});
                }
            }
            let project = await Project.findOne({ where: { name } });
            if (project){
                errorHandle('پروژه وجود دارد','409')
            }
            project = await Project.create({name,default:status,active});
            res.status(200).json({message:"پروژه با موفقیت ایجاد گردید",project});
        }else{
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message)
            })
            errorHandle(errors, '422');
        }

    }catch (err){
        if (!err.statusCode){
        err.statusCode = 500;
    }
        next(err)}
}
exports.update = async (req,res,next)=>{
    let id = req.params.projectId;
    let {name,status,active} = req.body;
    const validate = await Project.projectValidation(req.body)
    try{
        if (validate == true){
            let project = await Project.findByPk(id);
            if(!project){
                errorHandle("پروژه وجود ندارد","404")
            }
            // if(project.personId !== req.userId){
            //     errorHandle("پروژه وجود ندارد","403")
            // }
            let projectFind = await Project.findOne({
                where: {
                    [Op.and]: [
                        {name:name},
                        {id:{
                                [Op.not]:id
                            }
                        }
                    ]
                }
            });
            if (projectFind){
                errorHandle("پروژه وجود دارد","409");
            }
            if (status == "true") {
                let project = await Project.findOne({
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
                if (project) {
                    await project.update({default: false});
                }
            }
            await project.update({name,default:status,active});
            res.status(200).json({message:"پروژه با موفقیت ویرایش گردید",project});
        }else{
            const errors = [];
            validate.forEach((err) => {
                errors.push(err.message)
            })
            errorHandle(errors, '422');
        }

    }catch (err){
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }

}
exports.delete = async (req,res,next)=>{
    let id = req.params.projectId;
    try{
        let project = await Project.findByPk(id);
        if(!project){
            errorHandle("پروژه وجود ندارد","404");
        }
        // if (project.personid !== req.userId){
        //     errorHandle("شما دسترسی ندارید","403");
        // }

        // if (exit accounting document){ errorHandle('شما اجازه دسترسی ندارید', '403');}

        await project.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message: "پروژه با موفقیت حذف گردید"});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}