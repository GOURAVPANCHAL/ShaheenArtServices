import React, { useEffect } from "react";
import "./hero.css";
import logo from "../../Images/bannerLogo.png";
import output from "../../Images/output.png";
import { Link } from "react-router-dom";
import video from '../../Images/backgrond-video.mp4'
const Hero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="hero-slider">
        {/* Background Video */}
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          src={video} // Replace with your video path
        />

        <div className="bannerLogo">
          <img src={logo} className="logo1" alt="banner logo" />
          <img src={output} className="logo2" alt="output logo" />
          <marquee behavior="scroll" direction="left">
            <h3 className="text-white">
              Since 1990, we have proudly exported our unique creations
              worldwide, establishing ourselves as a leader in the industry.
            </h3>
          </marquee>
        </div>

        <div className="fixedbutton">
          <Link to={"tel:919319846114"}></Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
