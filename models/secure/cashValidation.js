const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    accountingCode: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        pattern : /[0-9]/,
        messages: {
            required: "کد حسابداری را وارد کنید",
            stringMax: "کد نامعتبر",
            stringPattern: " کد حسابداری باید مجموعه ای از ارقام باشد"
        }
    },
    name: {
        type: "string",
        trim: true,
        max: 255,
        optional: false,
        messages: {
            required: "نام صندوق را وارد کنید",
            stringMax: "نام صندوق نامعتبر",
        },
    },
    description: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "توضیحات صندوق نامعتبر",
        }
    },
    status: {
        type: "enum",
        values: ["false", "true"],
        optional: true,
        messages: {
            enumValue: "پیش فرض نامعتبر",
        },
    },
    active: {
        type: "enum",
        values: ["false", "true"],
        optional: true,
        messages: {
            enumValue: "فعال نامعتبر",
        },
    },

    // $$strict: true,
};
module.exports =
    {
        schema,
        v
    }