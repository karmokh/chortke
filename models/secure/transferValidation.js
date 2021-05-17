const Validator = require('fastest-validator');
const v = new Validator();
const schema = {
    amount:{
        type:"string",
        trim: true,
        optional: false,
        messages: {
            required: "مبلغ را وارد نمایید",
        }
    },
    fromId:{
        type:"string",
        trim: true,
        optional: false,
        messages: {
            required: "بانک انتقال دهنده را وارد نمایید",
        }
    },
    fromType:{
        type:"string",
        trim: true,
        optional: false,
        messages: {
            required: "بانک انتقال دهنده را وارد نمایید",
        }
    },
    toId:{
        type:"string",
        trim: true,
        optional: false,
        messages: {
            required: "بانک گیرنده را وارد نمایید",
        }
    },
    toType:{
        type:"string",
        trim: true,
        optional: false,
        messages: {
            required: "بانک گیرنده را وارد نمایید",
        }
    }
};
module.exports =
    {
        schema,
        v
    }