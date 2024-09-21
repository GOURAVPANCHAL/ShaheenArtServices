const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    categoryName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', 
        required: true
    },
    productName: {
        type: String,
        required: true,
        trim: true, 
        uppercase: true 
    },
    productDescription: {
        type: String,
        required: true
    },
    productDetails: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
