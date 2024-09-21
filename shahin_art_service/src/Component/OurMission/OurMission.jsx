import React from "react";
import whatWeAre from "../../Images/ourMission.png";
const OurMission = () => {
  return (
    <>
      <>
        <div className="container-fluid">
          <div className="mb-5 mt-5">
            <div className="row">
              <div className="col-md-7 p-0">
                <div className="whatweare">
                  <h1>Our Mission</h1>
                  <p>
                    At Shaheen Arts Services, our mission is to preserve and
                    innovate within the world of handcrafted art. We strive to
                    create products that not only enhance the beauty of their
                    surroundings but also carry forward the rich tradition of
                    handcrafting. Our commitment is to continue bringing the
                    timeless art of embroidery and handcrafted decor to new
                    heights.
                  </p>
                  {/* <button className="readMore">Read More</button> */}
                </div>
              </div>
              <div className="col-md-5 p-0">
                <div>
                  <img src={whatWeAre} className="w-100" alt="what we are" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default OurMission;
