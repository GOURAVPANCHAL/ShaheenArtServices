import React, { useState } from "react";
import logo from "../../Images/logo.png";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* <!-- ----------Whatsapp---------- --> */}
      <a
        href="https://api.whatsapp.com/send?phone=919315649785"
        target="_blank"
        class="whatsapp_float"
      >
        <i class="bi bi-whatsapp"></i>
      </a>

      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isHomePage ? "hide-slider" : ""}`}>
        <div className="navMaain container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleLinkClick}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about-us"
                  onClick={handleLinkClick}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/all-category"
                  onClick={handleLinkClick}
                >
                  PRODUCTS
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/products"
                  onClick={handleLinkClick}
                >
                  PRODUCTS
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={handleLinkClick}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
