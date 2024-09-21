const { uploadImage, deleteImage } = require("../Config/Cloudnary");
const CategoryModel = require("../Models/CategoryModel");
const ProductModel = require("../Models/ProductModel");

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { categoryName, productName, productDescription, productDetails } =
      req.body;
    const upperCaseProductName = productName.toUpperCase();
    const errorMessage = [];

    if (!categoryName) errorMessage.push("Category Name is must required");
    if (!productName) errorMessage.push("Product Name is must required");
    if (!productDescription)
      errorMessage.push("Product Description is must required");
    if (!productDetails) errorMessage.push("Product Details is must required");

    if (errorMessage.length > 0) {
      return res.status(400).json({
        success: false,
        message: errorMessage.join(", "),
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Product Image is must Required",
      });
    }
    const category = await CategoryModel.findOne({ _id: categoryName });
    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category not found",
      });
    }

    const exitProductName = await ProductModel.findOne({
      productName: upperCaseProductName,
    });
    if (exitProductName) {
      return res.status(400).json({
        success: false,
        message: "This Product Name already exists",
      });
    }

    const imageUrl = await uploadImage(req.file.path);
    const data = new ProductModel({
      productName: upperCaseProductName,
      categoryName: category._id, // Set the ObjectId here
      productDescription,
      productDetails,
      productImage: imageUrl,
    });

    await data.save();
    res.status(200).json({
      success: true,
      message: "New Product Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({}).populate("categoryName");
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProductsByCategoryName = async (req, res) => {
    const { categoryName } = req.params; // Get category name from the request parameters
    try {
      const category = await CategoryModel.findOne({ categoryName: categoryName });
      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      const products = await ProductModel.find({
        categoryName: category._id,
      }).populate("categoryName");
  
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: products,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getSingleProductByName = async (req, res) => {
  try {
    const { productName } = req.params;
    const product = await ProductModel.findOne({ productName: productName });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, productName, productDescription, productDetails } =
      req.body;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    const upperCaseProductName = productName
      ? productName.toUpperCase()
      : product.productName;
    if (productName && upperCaseProductName !== product.productName) {
      const existingProduct = await ProductModel.findOne({
        productName: upperCaseProductName,
      });
      if (existingProduct) {
        return res.status(400).json({
          success: false,
          message: "This Product Name already exists",
        });
      }
    }

    let imageUrl = product.productImage;
    if (req.file) {
      if (product.productImage) {
        const oldImagePublicId = product.productImage
          .split("/")
          .pop()
          .split(".")[0];
        await deleteImage(oldImagePublicId);
      }
      imageUrl = await uploadImage(req.file.path);
    }
    product.categoryName = categoryName || product.categoryName;
    product.productName = upperCaseProductName || product.productName;
    product.productDescription =
      productDescription || product.productDescription;
    product.productDetails = productDetails || product.productDetails;
    product.productImage = imageUrl;

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    if (product.productImage) {
      const imagePublicId = product.productImage.split("/").pop().split(".")[0];
      await deleteImage(imagePublicId);
    }
    await product.deleteOne();
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getSingleProductByName,
  getProductsByCategoryName
};
