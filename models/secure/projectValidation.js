const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    name: {
        type: "string",
        trim: true,
        max: 255,
        optional: false,
        messages: {
            required:"نام پروژه الزامی می باشد",
            stringMax: "نام پروژه نامعتبر",
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