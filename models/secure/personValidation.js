const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    code: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        pattern : /[0-9]/,
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
            required: "نام مستعار را وارد کنید",
            stringMax: "نام مستعار نامعتبر",
        },
    },
    firstName: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "نام نامعتبر",
        },
    },
    lastName: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "نام خانوادگی نامعتبر",
        },
    },
    title: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "عنوان نامعتبر",
        },
    },
    company: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "نام شرکت نامعتبر",
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
    contactCredit: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "اعتبار مالی نامعتبر",
        },
    },
    nationalCode: {
        type: "string",
        trim: true,
        max: 255,
        pattern : /[0-9]/,
        optional: true,
        messages: {
            stringMax: "شناسه ملی نامعتبر",
            stringPattern:"لطفا شناسه ملی را صحیح وارد نمایید"
        },
    },
    economicCode: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "کد اقتصادی نامعتبر",
        },
    },
    registrationNumber: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "شماره ثبت نامعتبر",
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
    fax: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "شماره ثبت نامعتبر",
        },
    },
    email: {
        type: "email",
        optional: true,
        messages: {
            email: "لطفا ایمیل معتبر وارد نمایید",
        },
    },
    web: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "وب سایت نامعتبر",
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
    country: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "کشور نامعتبر",
        },
    },
    state: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "استان نامعتبر",
        },
    },
    city: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        messages: {
            stringMax: "شهر نامعتبر",
        },
    },
    postalCode: {
        type: "string",
        trim: true,
        max: 255,
        optional: true,
        pattern : /[0-9]/,
        messages: {
            stringMax: "کد پستی نامعتبر",
            stringPattern: " کد پستی نامعتبر"
        }
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