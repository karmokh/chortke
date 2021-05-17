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
      return `${attribute} را وارد نمایید`;
    case "max":
      return `${attribute} با موفقیت حذف گردید`;
    case "pattern":
      return `${attribute} با موفقیت حذف گردید`;
    case "length":
      return `${attribute} با موفقیت حذف گردید`;
    case "unique":
      return `${attribute} با موفقیت حذف گردید`;
    case "email":
      return `${attribute} با موفقیت حذف گردید`;
    case "equal":
      return `${attribute} با موفقیت حذف گردید`;
    case "enum":
      return `${attribute} با موفقیت حذف گردید`;
  }
};
