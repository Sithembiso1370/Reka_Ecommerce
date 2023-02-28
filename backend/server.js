const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const inventoryRouter = require("./routes/inventoryRoutes");
const cloudinary = require('cloudinary').v2;
require('dotenv').config()

const app = express();

var corsOptions = {
    origin: "*"
};



app.use(cors(corsOptions));
// parse requests of content-type - application/json
// app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// content type
// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});



app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



mongoose
    .connect('mongodb://127.0.0.1:27017/rekaEcommerce',)
    .then(() => console.log("MongoDB Connected to rekaEcommerce"))
    .catch((err) => console.log(err));


// Add Inventory route
app.use("/api",inventoryRouter); // fields confirmed


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


