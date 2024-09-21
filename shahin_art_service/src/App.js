import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Product from "./Pages/Product/Product";
import Home from "./Component/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Category from "./Pages/Category/Category";
import AllProduct from "./Pages/Product/AllProduct";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/category/:categoryName" element={<Product />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/category/:categoryName/:productName" element={<ProductDetails />} />
          <Route path="/all-category" element={<Category />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
