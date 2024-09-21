import React, { useEffect } from "react";
import "./hero.css";
import banner1 from "../../Images/banner1.jpg";
import banner2 from "../../Images/banner2.jpg";
import banner3 from "../../Images/banner3.jpg";
import banner4 from "../../Images/banner4.jpg";
import banner5 from "../../Images/banner5.jpg";

import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src={banner1} className="w-100" alt="banner 1" />
          </div>
          <div>
            <img src={banner2} className="w-100" alt="banner 2" />
          </div>
          <div>
            <img src={banner3} className="w-100" alt="banner 3" />
          </div>
          <div>
            <img src={banner4} className="w-100" alt="banner 4" />
          </div>
        </Slider>
      </div>

      <div className="fixedbutton">
        <Link to={"tel:919319846114"}></Link>
      </div>
    </>
  );
};

export default Hero;
