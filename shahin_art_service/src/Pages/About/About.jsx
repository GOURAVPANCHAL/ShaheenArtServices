import React, { useEffect } from "react";
import WhyWeAre from "../WhyWeAre/WhyWeAre";
import OurMission from "../../Component/OurMission/OurMission";
import team1 from "../../Images/teamMember1.png";
import team2 from "../../Images/teamMember2.png";
import team3 from "../../Images/teamMember3.png";
import team4 from "../../Images/teamMember4.png";
import Slider from "react-slick";
import testimonial from "../../Images/testimonial.png";
import testimonial1 from "../../Images/testimonial1.png";
import CounterSection from "../../Component/CounterSection/CounterSection";
import { Helmet } from "react-helmet";
import mannu from "../../Images/mannu.jpeg"
import gourav from "../../Images/gourav.webp"
import harsh from "../../Images/harsh.webp"
import "./about.css";
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <>
      <Helmet>
        <title>
          About Us - Shaheen Arts Services | Handcrafted Arts Since 1990
        </title>
        <meta
          name="description"
          content="Learn more about Shaheen Arts Services, experts in handcrafted arts and export since 1990. Our mission is to preserve heritage craftsmanship and provide the finest handmade products globally."
        />
        <meta
          name="keywords"
          content="Handcrafted Arts, Heritage Crafts, Shaheen Arts, Since 1990, Export Services, Custom Handmade Products"
        />
      </Helmet>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="bannerHeading">
            <i>About us</i>
          </h1>
        </div>
      </div>
      <WhyWeAre />
      <OurMission />
      <CounterSection />
      <div className="container-fluid">
        <section className="ourTeam">
          <div className="text-center py-3">
            <p className="yelloheading">Our Team</p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={team1} alt="team member" />
            </div>
            <div className="col-md-3">
              <img src={team2} alt="team member" />
            </div>
            <div className="col-md-3">
              <img src={team3} alt="team member" />
            </div>
            <div className="col-md-3">
              <img src={team4} alt="team member" />
            </div>
          </div>
        </section>
      </div>

      <section className="container testimonials">
        <div className="text-center py-3">
          <p className="yelloheading">Testimonials</p>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div className="container mb-5">
                <div
                  className="row text-white p-4 rounded"
                  style={{ borderRadius: "15px", background: "#D4AF37" }}
                >
                  {/* Left Section - Testimonial */}
                  <div className="col-md-8 col-sm-12">
                    <blockquote className="blockquote">
                      <p className="mb-4">
                        <span
                          className="display-5"
                          style={{ fontSize: "40px", fontWeight: "bold" }}
                        >
                          &ldquo;
                        </span>
                        Shaheen Arts Services transformed my ideas into stunning
                        handcrafted pieces. Their attention to detail is
                        remarkable!
                      </p>
                    </blockquote>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src={harsh}
                        alt="Author"
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="mb-0">Harsh Vardhan</h6>
                        <small className="text-white">New Delhi, India</small>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="col-md-4 col-sm-12 text-center">
                    <div className="position-relative d-flex justify-content-center justify-content-md-end">
                      <img
                        src={harsh}
                        alt="Testimonial"
                        className="img-fluid rounded-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="container mb-5">
                <div
                  className="row text-white p-4 rounded"
                  style={{ borderRadius: "15px", background: "#D4AF37" }}
                >
                  {/* Left Section - Testimonial */}
                  <div className="col-md-8 col-sm-12">
                    <blockquote className="blockquote">
                      <p className="mb-4">
                        <span
                          className="display-5"
                          style={{ fontSize: "40px", fontWeight: "bold" }}
                        >
                          &ldquo;
                        </span>
                        I received my custom order on time, and it exceeded my
                        expectations! Highly recommend their services.
                      </p>
                    </blockquote>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src={gourav}
                        alt="Author"
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="mb-0">Gourav Panchal</h6>
                        <small className="text-white">New Delhi, India</small>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="col-md-4 col-sm-12 text-center">
                    <div className="position-relative d-flex justify-content-center justify-content-md-end">
                      <img
                        src={gourav}
                        alt="Testimonial"
                        className="img-fluid rounded-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container mb-5">
                <div
                  className="row text-white p-4 rounded"
                  style={{ borderRadius: "15px", background: "#D4AF37" }}
                >
                  {/* Left Section - Testimonial */}
                  <div className="col-md-8 col-sm-12">
                    <blockquote className="blockquote">
                      <p className="mb-4">
                        <span
                          className="display-5"
                          style={{ fontSize: "40px", fontWeight: "bold" }}
                        >
                          &ldquo;
                        </span>
                        Exceptional quality and service! The team at Shaheen
                        Arts really understands the needs of their clients.
                      </p>
                    </blockquote>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src={mannu}
                        alt="Author"
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="mb-0">Mannu Mishra</h6>
                        <small className="text-white">Bangalore, India</small>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="col-md-4 col-sm-12 text-center">
                    <div className="position-relative d-flex justify-content-center justify-content-md-end">
                      <img
                        src={mannu}
                        alt="Testimonial"
                        className="img-fluid rounded-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default About;
