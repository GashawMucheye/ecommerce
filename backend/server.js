const express = require('express');
const dotenv = require('dotenv').config();

const colors = require('colors');
colors;

const { getTime } = require('./middleware/middle');
const router = require('./routers/productRouter');
const app = express();

const PORT = process.env.PORT || 5000;
//!middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getTime);
app.use('/api/products', router);

app.listen(PORT, () => {
  console.log(`server started at:http://localhost:${PORT}`.yellow.underline);
});
