import React, { useEffect } from "react";
import GetInTouch from "../../Component/GetInTouch/GetInTouch";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Contact Us - Shaheen Arts Services</title>
        <meta
          name="description"
          content="Get in touch with Shaheen Arts Services for inquiries about our handcrafted art, custom projects, or any questions you may have. We're here to assist you!"
        />
        <meta
          name="keywords"
          content="contact Shaheen Arts, handcrafted arts, custom art projects, art services inquiry"
        />
      </Helmet>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="bannerHeading">
            <i>Contact us</i>
          </h1>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default Contact;
