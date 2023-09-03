const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const colors = require('colors');
colors;

const { getTime } = require('./middleware/middle');
const router = require('./routers/productRouter');
const app = express();

const PORT = process.env.PORT || 8080;
//!middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getTime);
app.use('/api/products', router);

//------------------deployment-------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1, 'frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is Running Successfully');
  });
}

//------------------deployment--------------------

app.listen(PORT, () => {
  console.log(`server started at:http://localhost:${PORT}`.yellow.underline);
});
