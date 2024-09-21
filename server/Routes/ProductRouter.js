const express = require('express');
const upload = require('../Middlewares/Multer');
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, getSingleProductByName, getProductsByCategoryName } = require('../Controllers/ProductControllar');



const productRouter = express.Router();

productRouter.post('/create-product', upload.single('productImage'), createProduct);
productRouter.get('/get-all-products', getAllProducts);
productRouter.get('/get-product-by-category/:categoryName', getProductsByCategoryName);
productRouter.get('/get-single-product/:id', getSingleProduct);
productRouter.get('/get-single-product/name/:productName', getSingleProductByName);
productRouter.put('/update-product/:id', upload.single('productImage'), updateProduct);
productRouter.delete('/delete-product/:id', deleteProduct);

module.exports = productRouter;
