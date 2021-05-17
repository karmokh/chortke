const Validator = require("fastest-validator");
const Message = require("../../messages/messages");
const v = new Validator();
const schema = {
    firstName: {
        type: "string",
        trim: true,
        optional: false,
        max: 32,
        messages: {
            required: Message("required", "نام"),
            stringMax: Message("max", "نام", 32),
        },
    },
    lastName: {
        type: "string",
        trim: true,
        optional: false,
        max: 32,
        messages: {
            required: Message("required", "نام خانوادگی"),
            stringMax: Message("max", "نام خانوادگی", 32),
        },
    },
    phone: {
        type: "string",
        trim: true,
        optional: true,
        min: 10,
        max: 15,
        pattern: /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/,
        messages: {
            stringMin: Message("min", "تلفن همراه", 10),
            stringMax: Message("max", "تلفن همراه", 15),
            stringPattern: Message("pattern", "تلفن همراه"),
        },
    },
    email: {
        type: "email",
        trim: true,
        optional: true,
        min: 6,
        max: 64,
        messages: {
            email: Message("email", "ایمیل"),
            stringMin: Message("min", "ایمیل", 6),
            stringMax: Message("max", "ایمیل", 64),
        },
    },
    password: {
        type: "string",
        trim: true,
        optional: false,
        min: 6,
        messages: {
            required: Message("required", "کلمه عبور"),
            stringMin: Message("min", "کلمه عبور", 6),
        },
    },
    confirmPassword: {
        type: "equal",
        field: "password",
        trim: true,
        optional: false,
        messages: {
            required: Message("required", "تکرار کلمه عبور"),
            equalField: Message("equal", "تکرار کلمه عبور", "کلمه عبور"),
        },
    },
};
module.exports = {
    schema,
    v,
};
