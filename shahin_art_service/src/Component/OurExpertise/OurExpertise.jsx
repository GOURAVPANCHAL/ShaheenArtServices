import React from "react";
import image1 from "../../Images/expertise1.png";
import image2 from "../../Images/expertise2.png";
import image3 from "../../Images/expertise3.png";
import facilities from "../../Images/facilities.png";
import "./OurExpertise.css";
const OurExpertise = () => {
  return (
    <>
      <section>
        <div className="text-center py-5">
          <p className="miniHeading">Our Expertise</p>
          <p className="heading">AN INCREDIBLE handcrafting Art EXPERIENCE</p>
        </div>
        <div>
          <div className="container">
            <div className="row" style={{alignItems:'center'}}>
              <div className="col-md-6 expertise_cols">
                <div className="expertiseContent">
                  <p className="yelloheading">Hand Embroidery Patches</p>
                  <p>
                    With a legacy in handcrafting, we have perfected the art of
                    hand embroidery. Our patches are known for their durability
                    and stunning detail, making each piece a work of art.
                  </p>
                  {/* <button className="readMore">Read More</button> */}
                </div>
              </div>
              <div className="col-md-6 expertise_cols">
                <div>
                  <img src={image1} className="w-100" alt="hand embroidery" />
                </div>
              </div>
              <div className="col-md-6 expertise_cols">
                <div>
                  <img src={image2} className="w-100" alt="hand embroidery" />
                </div>
              </div>
              <div className="col-md-6 expertise_cols">
                <div className="expertiseContent">
                  <p className="yelloheading">
                    Military Embroidery & Accessories
                  </p>
                  <p>
                    We are a premier manufacturer and exporter of military hand
                    embroidery patches, visors, chain straps, and related items.
                    Our products are designed to meet the exacting standards
                    required for military and ceremonial use, ensuring both
                    functionality and beauty
                  </p>
                  {/* <button className="readMore">Read More</button> */}
                </div>
              </div>
              <div className="col-md-6 expertise_cols">
                <div className="expertiseContent">
                  <p className="yelloheading">Hanging Items</p>
                  <p>
                    Our diverse range of hanging items is crafted from
                    high-quality wood, cloth, and beads. Each piece, whether a
                    decorative wall hanging or a festive ornament, is a
                    testament to our dedication to artistry and tradition.
                  </p>

                  {/* <button className="readMore">Read More</button> */}
                </div>
              </div>
              <div className="col-md-6 expertise_cols">
                <div>
                  <img src={image3} className="w-100" alt="hand embroidery" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="facilities">
        <div className="row" style={{alignItems:'center'}}>
          <div className="col-md-6">
            <div className="expertiseContent">
              <p className="heading">Our Facilities</p>
              <p>
                At Shaheen Arts Services, we take immense pride in our
                state-of-the-art factories, which are fully controlled and
                managed by us. This direct oversight allows us to maintain the
                highest standards of quality in every product we create. From
                sourcing the finest materials to ensuring meticulous
                craftsmanship, we guarantee that our customers receive only the
                best.
              </p>
              {/* <button className="readMore">Read More</button> */}
            </div>
          </div>
          <div className="col-md-6">
            <img src={facilities} className="w-100" alt="facilities" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurExpertise;
