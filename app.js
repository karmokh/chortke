const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");

const {multer,fileFilter,fileStorage} = require('./config/fileHandle');
const cors = require('./config/setHeader');
const sequelize = require("./config/database");
const relation = require("./models/relations/relations");

const app = express();
//tables relations
relation();
// Load Config
dotEnv.config({path:"./config/config.env"});
//BodyParser
app.use(bodyParser.json());
// file(image) handler
app.use(multer({ storage: fileStorage, fileFilter: fileFilter, limits:{fileSize:4000000},}).single('image'));
// global image directory
app.use('/images', express.static(path.join(__dirname, 'public','images')));
// Cross-Origin Resource Sharing for handle headers
app.use(cors);
// Routes
app.get("/",(req,res,next)=>{
    res.json({image:"localhost:8080/images/jj.png"});
})
// handle errors
app.use(require('./controllers/errorHandele/errorController').getErrors);
app.use(require('./controllers/errorHandele/errorController').get404);
const PORT = process.env.PORT || 8080;
sequelize
    .sync({ force: true })
    .then((result) => {
        console.log(result);
        app.listen(PORT, () =>  {console.log(`server is running in port:${PORT} on ${process.env.NODE_ENV}`)});
    })
    .catch((err) => console.log(err));