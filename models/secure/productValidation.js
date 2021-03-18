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
            required: "نام کالا را وارد کنید",
            stringMax: "نام کالا نامعتبر",
        },
    },
    productCode: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "کد کالا نامعتبر",
            stringPattern: " کد حسابداری باید مجموعه ای از ارقام باشد"
        },
    },
    barcode: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "بارکد کالا نامعتبر",
        },
    },
    sellPrice: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "قیمت فروش  نامعتبر",
            stringPattern: " قیمت فروش  باید مجموعه ای از ارقام باشد"
        },
    },
    salesDescription: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "توضیحات فروش نامعتبر",
        },
    },
    buyPrice: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "قیمت خرید  نامعتبر",
            stringPattern: " قیمت خرید باید مجموعه ای از ارقام باشد"
        },
    },
    buyDescription: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "توضیحات خرید نامعتبر",
        },
    },
    mainUnit: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "واحد اصلی  نامعتبر",
        },
    },
    subUnit: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "واحد فرعی  نامعتبر",
        },
    },
    ConversionRatio: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "ضریب تبدیل نامعتبر",
            stringPattern: " ضریب تبدیل باید مجموعه ای از ارقام باشد"
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
    salesTax: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "مالیات فروش نامعتبر",
            stringPattern: " مالیات فروش باید مجموعه ای از ارقام باشد"
        },
    },
    buyTax: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "مالیات خرید نامعتبر",
            stringPattern: " مالیات خرید باید مجموعه ای از ارقام باشد"
        },
    },
    stock: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "تعداد نامعتبر",
            stringPattern: "تعداد باید مجموعه ای از ارقام باشد"
        },
    },
    orderTime: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "زمان انتظار نامعتبر",
            stringPattern: "زمان انتظار باید به صورت ارقام باشد"
        },
    },
    orderPoint: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "نقطه سفارش نامعتبر",
            stringPattern: "نقطه سفارش باید به صورت ارقام باشد"
        },
    },
    orderMinimum: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "حداقل سفارش نامعتبر",
            stringPattern: "حداقل سفارش باید به صورت ارقام باشد"
        },
    },
    control: {
        type: "enum",
        values: ["true", "false"],
        optional: true,
        messages: {
            enumValue: "کنترل نامعتبر",
        },
    },
    type: {
        type: "enum",
        values: ["کالا", "خدمات"],
        optional: true,
        messages: {
            enumValue: "نوع نامعتبر",
        },
    },
    active: {
        type: "enum",
        values: ["true", "false"],
        optional: true,
        messages: {
            enumValue: "فعالیت نامعتبر",
        },
    },
    // $$strict: true,
};
module.exports =
    {
        schema,
        v
    }