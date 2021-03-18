const { Sequelize, Op } = require("sequelize");
const Person = require("../models/Person");
const errorHandle = require("./errorHandele/errorCreate");
const {editorImage} = require("../config/fileHandle");
const {pagination} = require("../utils/pagination");
const {clearFile} = require("../config/fileHandle");
exports.index = async (req,res,next)=>{
    const page = +req.query.page || 1;
    const postPerPage = +req.query.limit || 5;
    let paginate;
    try{
        const numberOfPersons = await Person.count();
        if(numberOfPersons > 0){
             paginate = pagination(page,postPerPage,numberOfPersons);
        }
        let persons = await Person.findAll({ offset: (page - 1) * postPerPage, limit: postPerPage });
        persons.map((person)=>{
            if(person.imageUrl) {
                person.imageUrl = req.get('host') + person.imageUrl;
            }
        })
        res.status(200).json({message:"کاربران",persons,paginate});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}
exports.show = async (req,res,next)=>{
    let id = req.params.personId;
    try{
        let person = await Person.findByPk(id);
        if(!person){
            errorHandle('کاربر وجود ندارد', '404');
        }
        if(person.imageUrl) {
            person.imageUrl = req.get('host') + person.imageUrl;
        }
        res.status(200).json({message:"اطلاعات کاربر",person});
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
        firstName,
        lastName,
        title,
        company,
        description,
        contactCredit,
        nationalCode,
        economicCode,
        registrationNumber,
        phone,
        mobile,
        fax,
        email,
        web,
        address,
        country,
        state,
        city,
        postalCode,
        sharePercent,
        liability,
        credits,
        active,
        personTypeId
    } = req.body;
    let imageUrl;
    if (!code){
        code = "0001"
    }
    const validate = await Person.personValidation(req.body);
    try{
        if(validate == true){
            let person = await Person.findOne({ where: { name } });
            if (person){
                errorHandle('کاربر وجود دارد','409')
            }
            // let personLast = await Person.findOne({
            //     order: [ [ 'createdAt', 'DESC' ]],
            // });
            // let personLastId = personLast.id
            if(req.file){
                imageUrl = '/images/persons/' + req.file.filename;
                let url = 'storage/images/persons/'+ req.file.filename;
                await editorImage(req.file.path,url);
            }
              person = await Person.create({
                code,
                name,
                firstName,
                lastName,
                title,
                company,
                description,
                contactCredit,
                nationalCode,
                economicCode,
                registrationNumber,
                phone,
                mobile,
                fax,
                email,
                web,
                address,
                country,
                state,
                city,
                postalCode,
                sharePercent,
                liability,
                credits,
                active,
                imageUrl,
                personTypeId
            });
            if(imageUrl) {
                person.imageUrl = req.get('host') + person.imageUrl;
            }
            res.status(201).json({message:"کاربر با موفقیت ایجاد گردید",person});
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
    let id = req.params.personId;
    let {
        name,
        firstName,
        lastName,
        title,
        company,
        description,
        contactCredit,
        nationalCode,
        economicCode,
        registrationNumber,
        phone,
        mobile,
        fax,
        email,
        web,
        address,
        country,
        state,
        city,
        postalCode,
        sharePercent,
        liability,
        credits,
        active,
        personTypeId,
    } = req.body;
    let imageUrl;
    const validate = await Person.personValidation(req.body);
    try{
        if(validate == true) {
            let person = await Person.findByPk(id);
            if (!person) {
                errorHandle('کاربر وجود ندارد', '404');
            }
            // if(person.personId !== req.personId){
            //     errorHandle('کاربر وجود ندارد', '403');
            // }
            let personFind = await Person.findOne({
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
            if (personFind){
                errorHandle('کاربر وجود دارد','409')
            }
            if(req.file){
                if(person.imageUrl) {
                    clearFile(person.imageUrl);
                }
                imageUrl = '/images/persons/' + req.file.filename;
                let url = 'storage/images/persons/'+ req.file.filename;
                await editorImage(req.file.path,url);
            }
            await person.update({
                name,
                firstName,
                lastName,
                title,
                company,
                description,
                contactCredit,
                nationalCode,
                economicCode,
                registrationNumber,
                phone,
                mobile,
                fax,
                email,
                web,
                address,
                country,
                state,
                city,
                postalCode,
                sharePercent,
                liability,
                credits,
                active,
                personTypeId,
                imageUrl
            })
            if(person.imageUrl) {
                person.imageUrl = req.get('host') + person.imageUrl;
            }
            res.status(200).json({message:"ویرایش کاربر با موفقیت صورت گرفت",person})
        }
        else {
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
    let id = req.params.personId;
    try{
        let person = await Person.findByPk(id);
        if(!person){
            errorHandle('کاربر وجود ندارد', '404');
        }
        // if(person.personId !== req.personId){
        //     errorHandle('کاربر وجود ندارد', '403');
        // }

        // if (exit accounting document){ errorHandle('شما اجازه دسترسی ندارید', '403');}

        clearFile(person.imageUrl);
        await Person.destroy({
            where: {
                id
            }
        });
        res.status(200).json({message:"کاربر با موفقیت حذف گردید"});
    }catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}