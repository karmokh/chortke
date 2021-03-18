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
    }
};
module.exports =
    {
        schema,
        v
    }