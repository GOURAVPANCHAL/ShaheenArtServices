import React from "react";
import whatWeAre from "../../Images/whatWeAre.png";
import "./whatWeAre.css";
const WhyWeAre = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="mb-5 mt-5">
          <div className="row">
            <div className="col-md-7 p-0">
              <div className="whatweare">
                <h1>Why We Are The Best?</h1>
                <p>
                  Shaheen Arts Services is deeply rooted in the rich tradition
                  of handcrafting, a hereditary art passed down through
                  generations. Since 1990, we have proudly exported our unique
                  creations worldwide, establishing ourselves as a leader in the
                  industry.
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
  );
};

export default WhyWeAre;
