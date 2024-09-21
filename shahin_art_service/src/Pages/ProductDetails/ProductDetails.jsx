import React, { useEffect, useState } from "react";
import productImage from "../../Images/productDetails.png";
import products from "../../Images/product1.jpg";

import "./productDetails.css";
import { Link, useParams } from "react-router-dom";
import OurServices from "../../Component/OurServices/OurServices";
import GetInTouch from "../../Component/GetInTouch/GetInTouch";
import axios from "axios";

const ProductDetails = () => {
  const [allProducts, setAllProducts] = useState([]);

  const { categoryName, productName } = useParams();

  const formattedCategoryName = categoryName.replace(/-/g, " ");
  const formattedProductName = productName.replace(/-/g, " ");

  const [productDetail, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
    // get all products
    const getAllProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/get-all-products"
        );
        setAllProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProduct();
    // get all products end
    
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get-single-product/name/${formattedProductName}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!productDetail) {
    return "Loading ..";
  }

  return (
    <>
      <div className="banner">
        <div className="bannerContent text-center">
          <h1 className="bannerHeading">
            <i>
              <span>{formattedProductName}</span>
            </i>
          </h1>
        </div>
      </div>

      <div className="productDetails">
        <div className="row justify-content-center productSection">
          {/* {productDetail.map((product, index) => ( */}
          <div className="col-md-6 p-0">
            <div className="detailSection">
              <h1>{productDetail.productName}</h1>
              <p>{productDetail.productDescription}</p>
              <h4>Product Details:</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: productDetail.productDetails,
                }}
              ></div>
            </div>
          </div>
          {/* ))} */}

          <div className="col-md-6 p-0">
            <img
              src={productDetail.productImage}
              alt="Product"
              className="img-fluid productImage"
            />
          </div>
        </div>
      </div>

      <section className="product">
        <div className="text-center py-5">
          <p className="heading">Explore our other products</p>
        </div>
        <div className="container">
        <div className="row">
          {allProducts.map((item, index) => (
            <div key={index} className="col-md-3">
              <div className="ourProducts">
                <Link
                  to={`/category/${item.categoryName.categoryName.replace(
                    /\s+/g,
                    "-"
                  )}/${item.productName.replace(/\s+/g, "-")}`}
                >
                  <img
                    src={item.productImage}
                    className="productImage w-100"
                    alt={item.productName}
                  />
                  <div className="productsContent">
                    <p className="yellowHeading">
                      <b>{item.productName}</b>
                    </p>
                    <p>{item.productDescription}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="services mt-5">
        <OurServices />
      </section>
      <section className="getintouch mt-5">
        <GetInTouch />
      </section>
    </>
  );
};

export default ProductDetails;
