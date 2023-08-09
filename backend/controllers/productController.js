const data = require('../data');

const getProduct = (req, res) => {
  res.json(data);
};

//post
const setProduct = (req, res) => {
  const {
    name,
    slug,
    category,
    image,
    price,
    countInStock,
    brand,
    rating,
    numReviews,
    description,
  } = req.body;
  res.json({
    name,
    slug,
    category,
    image,
    price,
    countInStock,
    brand,
    rating,
    numReviews,
    description,
  });
};

const getProductById = (req, res) => {
  const params = req.params.slug;

  const product = data.products.find((product) => product.slug === params);
  if (product) {
    res.json(product);
  } else {
    res.json({
      message: 'not found',
    });
  }
};

module.exports = { getProduct, setProduct, getProductById };
