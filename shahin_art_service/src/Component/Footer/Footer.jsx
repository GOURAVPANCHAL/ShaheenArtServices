import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Images/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footerMain bg-dark text-light">
      <div className="container">
        <div className="row">
          {/* Logo and Bottom Description */}
          <div className="col-md-4">
            <img src={logo} alt="Logo" className="mb-3 w-30" />
            <p>
              Since 1990, we have proudly exported our unique creations
              worldwide, establishing ourselves as a leader in the industry.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-2">
            <p className="footerHeading">Useful Links</p>
            <ul className="footerTabs p-0">
              <li>
                <i class="bi bi-arrow-right-short"></i>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <i class="bi bi-arrow-right-short"></i>
                <Link to="/about-us" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <i class="bi bi-arrow-right-short"></i>
                <Link to="/all-category" className="text-light text-decoration-none">
                 Product
                </Link>
              </li>
              <li>
                <i class="bi bi-arrow-right-short"></i>
                <Link to="/contact-us" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram Posts */}
          <div className="col-md-3">
            <p className="footerHeading">Our Location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56029.04903565765!2d77.2056857751059!3d28.635289304353485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf40000001%3A0x3cb55592cf670e4e!2sShaheen%20Art%20Services!5e0!3m2!1sen!2sin!4v1726651369240!5m2!1sen!2sin"
              width="100%"
              height='200px'
              style={{border:'0'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <p className="footerHeading">Contact Info</p>
            <p className="d-flex gap-2 m-0">
              <i
                class="bi bi-geo-alt-fill ml-3"
                style={{ color: "#d4af37" }}
              ></i>{" "}
              <strong>Address:</strong>
            </p>
            <p>
              {" "}
              2318, Mandir Street, Kucha Chellan, Darya Ganj, Delhi, 110002
            </p>
            <p className="d-flex gap-2 m-0">
              <i
                class="bi bi-telephone-outbound-fill ml-3"
                style={{ color: "#d4af37" }}
              ></i>
              <strong>Mobile:</strong>
            </p>
            <p> 9315649785</p>
            <p className="d-flex gap-2 m-0">
              <i
                class="bi bi-envelope-open-fill ml-3"
                style={{ color: "#d4af37" }}
              ></i>
              <strong>Email:</strong>
            </p>
            <p>ansari@shaheenart.in</p>
          </div>
        </div>
        <hr />
        <p className="companyLink text-center">
          Copyright © 2024 <Link to={"/"}> Shaheen Arts Services</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
