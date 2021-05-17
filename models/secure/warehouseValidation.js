const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    code: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "کد نامعتبر",
            stringPattern: " کد باید مجموعه ای از ارقام باشد"
        }
    },
    name: {
        type: "string",
        trim: true,
        max: 255,
        optional: false,
        messages: {
            required: "نام انبار را وارد کنید",
            stringMax: "نام انبار نامعتبر",
        },
    },
    storekeeper: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "نام انباردار نامعتبر",
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
    address: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "آدرس نامعتبر",
        },
    },
    active: {
        type: "enum",
        values: ["false", "true"],
        optional: true,
        messages: {
            enumValue: "فعال نامعتبر",
        },
    }
    // $$strict: true,
};
module.exports =
    {
        schema,
        v
    }