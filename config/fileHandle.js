// const multer = require("multer");
// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         if (req.originalUrl == "/user"){
//             cb(null, 'storage/images/persons');
//         }else{
//             cb(null, 'storage/images');
//         }
//     },
//     filename: (req, file, cb) => {
//         cb(null,  Date.now() + '-' + file.originalname);
//     }
// });
//
// const fileFilter = (req, file, cb) => {
//     if (
//         file.mimetype === 'image/png' ||
//         file.mimetype === 'image/jpg' ||
//         file.mimetype === 'image/jpeg'
//     ) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };
//
// module.exports={
//     multer,
//     fileStorage,
//     fileFilter,
// }
const path = require("path");
const fs = require("fs");

const multer = require("multer");
const sharp = require("sharp");


const fileStorage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     if (req.originalUrl == "/user"){
    //         cb(null, 'storage/images/persons');
    //     }else{
    //         cb(null, 'storage/images');
    //     }
    // },
    filename: (req, file, cb) => {
        cb(null,  Date.now() + '-' + file.originalname);
    }
});

const fileFilter = async (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const clearFile = filePath => {
    filePath = path.join(__dirname, '..','storage', filePath);
    fs.unlink(filePath, err => console.log(err));
};
const editorImage = (from,to)=>{
    sharp(from)
        .rotate()
        .resize(500)
        .toFile(to)
}
module.exports={
    multer,
    fileStorage,
    fileFilter,
    clearFile,
    editorImage
}