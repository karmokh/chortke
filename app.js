const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");

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
app.use(express.json());
// file(image) handler
// app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'));


app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));
// global image directory
app.use('/images', express.static(path.join(__dirname, 'storage', 'images')));
// Cross-Origin Resource Sharing for handle headers
app.use(cors);
//authentication middleware
app.use("/api/user", require("./routes/user"));
app.use(isAuth);
// Routes
app.use("/api/businesss", require("./routes/business"));
app.use("/api/persons", require("./routes/person"));
app.use("/api/personTypes", require("./routes/personType"));
app.use("/api/sellers", require("./routes/seller"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/products", require("./routes/product"));
app.use("/api/categories", require("./routes/category"));
app.use("/api/accountings", require("./routes/accounting"));
app.use("/api/transfers", require("./routes/transfer"));
app.use("/api/sales", require("./routes/sale"));
app.use("/api/saleReturns", require("./routes/saleReturn"));
app.use("/api/buy", require("./routes/buy"));
app.use("/api/buyReturn", require("./routes/buyReturn"));
app.use("/api/incomes", require("./routes/income"));
app.use("/api/receives", require("./routes/receive"));
app.use("/api/costs", require("./routes/cost"));
app.use("/api/payments", require("./routes/payment"));
app.use("/api/banks", require("./routes/bank"));
app.use("/api/funds", require("./routes/fund"));
app.use("/api/cashiers", require("./routes/cashier"));
app.use("/api/cheques", require("./routes/cheque"));
app.use("/api/warehouses", require("./routes/warehouse"));
app.use("/api/warehouseHandles", require("./routes/warehouseHandle"));
app.use("/api/wastes", require("./routes/waste"));

// handle errors
app.use(require('./controllers/errorHandele/errorController').getErrors);
app.use(require('./controllers/errorHandele/errorController').get404);
const PORT = process.env.PORT || 8080;
sequelize
    .sync()
    .then((result) => {
        console.log(result);
        app.listen(PORT, () => {
            console.log(`server is running in port:${PORT} on ${process.env.NODE_ENV}`)
        });
    })
    .catch((err) => console.log(err));
