const { Router } = require('express');

const router = Router();
const {
  getProduct,
  setProduct,
  getProductById,
} = require('../controllers/productController');
router.get('/', getProduct);
router.get('/:slug', getProductById);
router.post('/', setProduct);

module.exports = router;
