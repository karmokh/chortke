const Validator = require('fastest-validator');
const Message = require("../../messages/messages");
const v = new Validator();
const schema = {
    nickName: {
        type: "string",
        trim: true,
        max: 32,
        optional: false,
        messages: {
            required: Message("required", "نام مستعار"),
            stringMax: Message("max", "نام مستعار", 32),
        },
    },
    firstName: {
        type: "string",
        trim: true,
        optional: true,
        max: 32,
        messages: {
            required: Message("required", "نام"),
            stringMax: Message("max", "نام", 32),
        },
    },
    lastName: {
        type: "string",
        trim: true,
        optional: true,
        max: 32,
        messages: {
            required: Message("required", "نام خانوادگی"),
            stringMax: Message("max", "نام خانوادگی", 32),
        },
    },
    title: {
        type: "string",
        trim: true,
        optional: true,
        max: 32,
        messages: {
            required: Message("required", "عنوان"),
            stringMax: Message("max", "عنوان", 32),
        },
    },
    company: {
        type: "string",
        trim: true,
        optional: true,
        max: 32,
        messages: {
            required: Message("required", "شرکت"),
            stringMax: Message("max", "شرکت", 32),
        },
    },
    accountingCode: {
        type: "string",
        trim: true,
        optional: true,
        max: 16,
        pattern: /[0-9]/,
        messages: {
            required: Message("required", "کد حسابداری"),
            stringMax: Message("max", "کد حسابداری", 16),
            stringPattern: Message("pattern", "کد حسابداری"),
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
    active: {
        type: "enum",
        values: [false, true],
        optional: true,
        messages: {
            enumValue: Message("enum", "وضعیت"),
        },
    }
};
module.exports =
    {
        schema,
        v
    }