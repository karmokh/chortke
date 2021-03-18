const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    accountingCode: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
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
            required:"نام بانک الزامی می باشد",
            stringMax: "نام بانک نامعتبر",
        },
    },
    branch: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "نام شعبه نامعتبر",
        },
    },
    accountNumber: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        pattern : /[0-9]/,
        messages: {
            stringMax: "کد نامعتبر",
            stringPattern: " شماره حساب باید مجموعه ای از ارقام باشد"
        }
    },
    description: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "توضیحات نامعتبر",
        },
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