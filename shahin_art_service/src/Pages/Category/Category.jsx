import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OurServices from "../../Component/OurServices/OurServices";
import GetInTouch from "../../Component/GetInTouch/GetInTouch";
import axios from "axios";
import { Helmet } from "react-helmet";

const Category = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategory = async () =>{
      try {
       const res = await axios.get("http://localhost:8000/api/get-all-category")
        console.log(res.data.data)
        setCategories(res.data.data.reverse());
      } catch (error) {
        console.log("Error : ",error)
      }
    }
    useEffect(() => {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
      fetchCategory()
      
    }, []);
  return (
    <>
    <Helmet>
        <title>Our Categories - Shaheen Arts Services</title>
        <meta
          name="description"
          content="Explore a wide range of handcrafted art categories by Shaheen Arts Services. From custom-made pieces to heritage craftsmanship, find the perfect collection to meet your needs."
        />
        <meta
          name="keywords"
          content="handcrafted arts, Shaheen Arts, art categories, heritage crafts, custom art pieces"
        />
      </Helmet>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="bannerHeading">
            <i>Our Category</i>
          </h1>
        </div>
      </div>
      <div>
        <div className="text-center py-3">
          <p className="miniHeading">All Category</p>
        </div>

        <div className="container">
          <div className="row">
            {console.log(categories)}
            {categories.map((item, index) => (
              <div key={index} className="col-md-3">
                <div className="ourProducts">
                  <Link to={`/category/${item.categoryName.replace(/\s+/g,'-')}`}>
                    <img
                      src={item.categoryImage}
                      className="productImage w-100"
                      alt={item.categoryName}
                    />
                    <div className="productsContent">
                      <p className="miniHeading mb-0">
                        <b>{item.categoryName}</b>
                      </p>
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

export default Category;
