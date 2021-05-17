module.exports = (action, attribute, option) => {
    option = option || null;
    switch (action) {
        case "create":
            return `${attribute} با موفقیت ایجاد گردید`;
        case "update":
            return `${attribute} با موفقیت ویرایش گردید`;
        case "delete":
            return `${attribute} با موفقیت حذف گردید`;
        case "required":
            return `فیلد ${attribute} اجباری میباشد`;
        case "max":
            return `${attribute} نمی تواند بیش از ${option} کاراکتر باشد`;
        case "pattern":
            return `${attribute} وارد شده صحیح نمی باشد`;
        case "unique":
            return `${attribute} وارد شده تکراری می باشد`;
        case "email":
            return `${attribute} وارد شده معتبر نمی باشد`;
        case "equal":
            return `${attribute} و ${option} یکسان نمی باشند`;
        case "enum":
            return `${attribute} معتبر نمی باشد`;
    }
};
