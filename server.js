require("dotenv").config();
const express = require("express");
const app = express();
const logger = require('morgan')
const connectDB = require("./db");
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', require('./routes/user.routes.js'))
app.use('/api/v1/product', require('./routes/product.routes'))
app.use('/api/v1/purchase', require('./routes/purchase.routes'))

app.listen(process.env.PORT || 3000, () => console.log('server is up'))