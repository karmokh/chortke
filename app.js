const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");

const isAuth = require('./middlewares/is-auth');
const {multer, fileFilter, fileStorage} = require('./config/fileHandle');
const cors = require('./config/setHeader');
const sequelize = require("./config/database");
const relation = require("./models/relations/relations");

const app = express();
//tables relations
relation();
// Load Config
dotEnv.config({path: "./config/config.env"});
//BodyParser
app.use(bodyParser.json());
// file(image) handler
// app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'));


app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));
// global image directory
app.use('/images', express.static(path.join(__dirname, 'storage', 'images')));
// Cross-Origin Resource Sharing for handle headers
app.use(cors);
//authentication middleware
// app.use(isAuth);
// Routes
app.use("/user", require("./routes/user"));
app.use("/business", require("./routes/personType"));
app.use("/person", require("./routes/person"));
app.use("/personType", require("./routes/personType"));
app.use("/seller", require("./routes/seller"));
app.use("/project", require("./routes/project"));
app.use("/product", require("./routes/product"));
app.use("/productType", require("./routes/productType"));
app.use("/accounting", require("./routes/accounting"));
app.use("/transfer", require("./routes/transfer"));
app.use("/sale", require("./routes/sale"));
app.use("/saleReturn", require("./routes/saleReturn"));
app.use("/buy", require("./routes/buy"));
app.use("/buyReturn", require("./routes/buyReturn"));
app.use("/income", require("./routes/income"));
app.use("/receive", require("./routes/receive"));
app.use("/expense", require("./routes/expense"));
app.use("/payment", require("./routes/payment"));
app.use("/bank", require("./routes/bank"));
app.use("/salary", require("./routes/salary"));
app.use("/cash", require("./routes/cash"));
app.use("/check", require("./routes/check"));
app.use("/store", require("./routes/store"));
app.use("/storeHandle", require("./routes/storeHandle"));
app.use("/waste", require("./routes/waste"));

// handle errors
app.use(require('./controllers/errorHandele/errorController').getErrors);
app.use(require('./controllers/errorHandele/errorController').get404);
const PORT = process.env.PORT || 8080;
sequelize
    .sync({force:true})
    .then((result) => {
        console.log(result);
        app.listen(PORT, () => {
            console.log(`server is running in port:${PORT} on ${process.env.NODE_ENV}`)
        });
    })
    .catch((err) => console.log(err));