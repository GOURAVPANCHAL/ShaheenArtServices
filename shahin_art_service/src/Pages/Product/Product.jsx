import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import OurServices from "../../Component/OurServices/OurServices";
import GetInTouch from "../../Component/GetInTouch/GetInTouch";
import "./product.css";
import { Helmet } from "react-helmet";

const Product = () => {
  const { categoryName } = useParams();

  const formattedCategoryName = categoryName.replace(/-/g, " ");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://www.api.shaheenarts.in/api/get-product-by-category/${formattedCategoryName}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${formattedCategoryName} - Shaheen Arts Services`}</title>
        <meta
          name="description"
          content={`Explore the finest collection of ${formattedCategoryName} products from Shaheen Arts Services. Handcrafted and unique art pieces to meet your needs.`}
        />
        <meta
          name="keywords"
          content={`Shaheen Arts, ${formattedCategoryName}, handcrafted products, art pieces, custom art`}
        />
      </Helmet>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="bannerHeading">
            <i>{formattedCategoryName}</i>
          </h1>
        </div>
      </div>
      <div>
        <div className="text-center py-3">
          <p className="miniHeading">Our Products</p>
        </div>

        <div className="container">
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
        <OurServices />
        <GetInTouch />
      </div>
    </>
  );
};

export default Product;
