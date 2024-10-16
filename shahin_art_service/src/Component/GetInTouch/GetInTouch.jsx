import React, { useState } from "react";
import "./getintouch.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts

const GetInTouch = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    subject: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://www.api.shaheenarts.in/api/send-contact", formData);
      console.log(res);

      // Show success toast message
      toast.success("Form submitted successfully!");

      // Reset form data to blank
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Form submission failed!"); // In case of error
    }
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
                      <i className="bi bi-telephone-outbound-fill"></i> 9315649785
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bi bi-envelope-open-fill"></i>{" "}
                      ansari@shaheenarts.in
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bi bi-geo-alt-fill"></i> 2318, Mandir Street,
                      Kucha Chellan, Darya Ganj, Delhi, 110002
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="socialmedia d-flex gap-3 pt-5">
                <div className="social-links">
                  <Link to={"/"}>
                    <i className="bi bi-twitter"></i>
                  </Link>
                </div>
                <div className="social-links">
                  <Link to={"/"}>
                    <i className="bi bi-instagram"></i>
                  </Link>
                </div>
                <div className="social-links">
                  <Link to={"/"}>
                    <i className="bi bi-facebook"></i>
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
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
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
                  <label htmlFor="phonenumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control custom-input"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
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
                        name="subject"
                        value="Product Inquiry"
                        checked={formData.subject === "Product Inquiry"}
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
                        name="subject"
                        value="Service Inquiry"
                        checked={formData.subject === "Service Inquiry"}
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
                        name="subject"
                        value="Support"
                        checked={formData.subject === "Support"}
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
                        name="subject"
                        value="Other"
                        checked={formData.subject === "Other"}
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

      {/* Toast container for displaying messages */}
      <ToastContainer />
    </div>
  );
};

export default GetInTouch;
