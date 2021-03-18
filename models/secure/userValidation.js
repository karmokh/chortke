const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    name: {
        type: "string",
        trim: true,
        max: 255,
        optional: false,
        messages: {
            required: "نام را وارد کنید",
            stringMax: "نام نامعتبر",
        },
    },
    phone: {
        type: "string",
        trim: true,
        max: 255,
        pattern: /0\d{2,3}-\d{8}/,
        optional: true,
        messages: {
            stringMax: "تلفن نامعتبر",
            stringPattern: "لطفا شماره تلفن را صحیح وارد نمایید"
        },
    },
    mobile: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        length:11,
        pattern: /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/,
        messages: {
            stringMax: "موبایل نامعتبر",
            stringLength: "د نمایید",
            stringPattern: "لطفا شماره موبایل را صحیح وارد نمایید"
        },
    },
    email: {
        type: "email",
        optional: false,
        messages: {
            email: "لطفا ایمیل معتبر وارد نمایید",
        },
    },
    password: {
        type: "string",
        optional: false,
        messages: {
            required: "رمز را وارد کنید",
        },
    }
    // $$strict: true,
};
module.exports =
    {
        schema,
        v
    }