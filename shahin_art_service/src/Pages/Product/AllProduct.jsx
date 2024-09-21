import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://www.api.shaheenarts.in/api/get-all-products`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!products) {
    return "Loading..";
  }

  return (
    <>
      <Helmet>
        <title>All Products - Shaheen Arts Services</title>
        <meta
          name="description"
          content="Discover our complete collection of handcrafted products at Shaheen Arts Services. Unique art pieces designed to meet your needs."
        />
        <meta
          name="keywords"
          content="Shaheen Arts, handcrafted products, art, unique designs, custom art pieces"
        />
      </Helmet>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="bannerHeading">
            <i>Products</i>
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {products.map((item, index) => (
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
    </>
  );
};

export default AllProduct;
