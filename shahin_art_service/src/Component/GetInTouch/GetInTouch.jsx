import React, { useState } from "react";
import "./getintouch.css";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="container">
      <div className="text-center py-5">
        <p className="yelloheading">Get In Touch</p>
        <p>
          Explore our collection or discuss a custom project with us. We look
          forward to bringing your vision to life with the unmatched artistry of
          Shaheen Arts Services.
        </p>
      </div>
      <div className="mb-5">
        <div className="row">
          <div className="col-md-5">
            <div className="getInTouch">
              <div className="pb-5">
                <p className="heading">Contact Information</p>
                <p>Say something to start a live chat!</p>
              </div>
              <div>
                <ul className="getinTouchUl">
                  <li>
                    <Link to={"#"}>
                      <i class="bi bi-telephone-outbound-fill"></i> 9315649785
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i class="bi bi-envelope-open-fill"></i> ansari@shaheenart.in
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i class="bi bi-geo-alt-fill"></i> 2318, Mandir Street, Kucha Chellan, Darya Ganj, Delhi, 110002
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="socialmedia d-flex gap-3 pt-5">
                <div className="social-links">
                  <Link to={"/"}>
                    <i class="bi bi-twitter"></i>
                  </Link>
                </div>
                <div className="social-links">
                  <Link to={"/"}>
                    <i class="bi bi-instagram"></i>
                  </Link>
                </div>
                <div className="social-links">
                  <Link to={"/"}>
                    <i class="bi bi-facebook"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-7">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control custom-input"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12 mt-3 mb-3">
                  <label className="form-label">
                    <b>Select Subject?</b>
                  </label>
                  <div className="selectRadio">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="productInquiry"
                        name="inquiryType"
                        value="Product Inquiry"
                        checked={formData.inquiryType === "Product Inquiry"}
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productInquiry"
                      >
                        Product Inquiry
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="serviceInquiry"
                        name="inquiryType"
                        value="Service Inquiry"
                        checked={formData.inquiryType === "Service Inquiry"}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="serviceInquiry"
                      >
                        Service Inquiry
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="support"
                        name="inquiryType"
                        value="Support"
                        checked={formData.inquiryType === "Support"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="support">
                        Support
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="other"
                        name="inquiryType"
                        value="Other"
                        checked={formData.inquiryType === "Other"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control custom-input"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="text-end">
                <button type="submit" className="readMore">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
