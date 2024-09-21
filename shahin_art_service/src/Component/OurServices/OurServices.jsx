import React from "react";
import "./ourServices.css";
import service1 from "../../Images/service1.png";
import service2 from "../../Images/service2.png";
import service3 from "../../Images/service3.png";
import service4 from "../../Images/service4.png";
import { Link } from "react-router-dom";

const OurServices = () => {
  const servicesImage = [
    {
      picture: service1,
      subHeading: "Heritage & Tradition",
    },
    {
      picture: service2,
      subHeading: "Quality Craftsmanship",
    },
    {
      picture: service3,
      subHeading: "Customization",
    },
    {
      picture: service4,
      subHeading: "Global Reach",
    },
  ];

  return (
    <>
      <div className="ourServicesMain">
        <div className="container">
          {/* <div className="ourServices">
            <p className="miniHeading">Our Services</p>
            <button className="readMoreColor">Read More</button>
          </div> */}

          <p className="heading">Why Choose Us?</p>
          <p className="description">
            Shaheen Arts Services is deeply rooted in the rich tradition of
            handcrafting, a hereditary art passed down through generations.
            Since 1990, we have proudly exported our unique creations worldwide,
            establishing ourselves as a leader in the industry.
          </p>
        </div>

        <div className="serviceImages container">
          <div className="row">
            {servicesImage.map((item, index) => (
              <div className="col-md-3 col-6 mb-3" key={index}>
                <Link to={'#'}>
                  <div className="serviceImageContainer">
                    <img
                      src={item.picture}
                      className="w-100"
                      alt="our Services"
                    />
                    <div className="servicesHeading">
                      <p>{item.subHeading}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
