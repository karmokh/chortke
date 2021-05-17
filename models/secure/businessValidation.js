const Validator = require('fastest-validator');
const Message = require("../../messages/messages");
const v = new Validator();
const schema = {
    nickName: {
        type: "string",
        trim: true,
        max: 64,
        optional: false,
        messages: {
            required: Message("required", "نام کسب و کار"),
            stringMax: Message("max", "نام کسب و کار", 64),
        },
    },
    legalName: {
        type: "string",
        trim: true,
        max: 64,
        optional: false,
        messages: {
            required: Message("required", "نام قانونی"),
            stringMax: Message("max", "نام قانونی", 64),
        },
    }
};
module.exports =
    {
        schema,
        v
    }