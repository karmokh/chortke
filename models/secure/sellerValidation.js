const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    accountingCode: {
        type: "string",
        trim: true,
        max: 255,
        pattern: /[0-9]/,
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
            required: "نام فروشنده را وارد کنید",
            stringMax: "نام فروشنده نامعتبر",
        },
    },
    sales: {
        type: "string",
        trim: true,
        max: 255,
        pattern: /[0-9]/,
        optional: true,
        messages: {
            stringMax: "درصد فروش نامعتبر",
            stringPattern: " درصد فروش باید مجموعه ای از ارقام باشد"
        }
    },
    salesReturn: {
        type: "string",
        trim: true,
        max: 255,
        pattern: /[0-9]/,
        optional: true,
        messages: {
            stringMax: "درصد برگشت از فروش نامعتبر",
            stringPattern: " درصد برگشت از فروش باید مجموعه ای از ارقام باشد"
        }
    },
    commisionFactor: {
        type: "enum",
        values: ["false", "true"],
        optional: true,
        messages: {
            enumValue: "ثبت پورسانت در سند فاکتور نامعتبر",
        },
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
};
module.exports =
    {
        schema,
        v
    }