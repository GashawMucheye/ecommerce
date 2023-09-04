const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const colors = require('colors');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => {
    res.send('please set production');
  });
}

//------------------deployment--------------------

app.listen(PORT, () => {
  console.log(`server started at:http://localhost:${PORT}`.yellow.underline);
});
