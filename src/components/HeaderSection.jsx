import React from "react";
import { Col, Row } from "react-bootstrap";
import star_img from "../assets/img/png/start_img.png";
import dog_img from "../assets/img/png/dog_img.png";
import light_img from "../assets/img/png/light_img.png";
import cross_img from "../assets/img/png/cross_img.png";
import dotted_img1 from "../assets/img/png/doted_img1.png";
import dotted_img2 from "../assets/img/png/doted_img2.png";
function HeaderSection() {
  return (
    <section className="overflow-hidden px-3 py-5 mb-sm-5">
      <div className="box_big mx-auto py-sm-4 py-3  px-3 px-sm-0  position-relative ">
        <img
          className="position-absolute adjust_dotted_img d-none d-sm-flex"
          src={dotted_img2}
          alt="dotted_img2"
        />
        <img
          className="position-absolute adjust_dotted_img2 d-none d-sm-flex"
          src={dotted_img1}
          alt="dotted_img1"
        />
        <div className="small_box mx-auto  ">
          <div className="text-center py-4 px-sm-5 px-3">
            <h1 className="ff_comic fw-bold fs_sm text-white mb-0">
              Platte River Campground
            </h1>
            <p className="mb-0 fw-normal fs_xsm text-center clr_brown pt-3 pb-2 ff_calibiri">
              Among Top 50 campgrounds in California
            </p>
            <img src={star_img} alt="star_img" />
            <p className="mb-0 ff_calibiri fw-normal fs_xsm clr_brown pt-3">
              5685 Lake Michigan Rd, Honor, MI 49640, United States{" "}
              <span className="d-block cursoir_pointer">
                Contact: +1 231 326 5134
              </span>{" "}
              <span className="cursoir_pointer">www.example.com</span>
            </p>
            <Row className="mx-auto mt-4 ">
              <Col sm={4} xs={6} className="mt-2 justify-content-center d-flex">
                <div className="circle_white  d-flex justify-content-center flex-column">
                  <h3 className="mb-0 fw-bold fs_xsm ff_calibiri text-white">
                    All year
                  </h3>
                  <p className="mb-0 fw-bold fs_xsm ff_calibiri clr_brown">
                    Season
                  </p>
                </div>
              </Col>
              <Col sm={4} xs={6} className="mt-2 justify-content-center d-flex">
                <div className="circle_white  d-flex justify-content-center flex-column">
                  <h3 className="mb-0 fw-bold fs_xsm ff_calibiri text-white">
                    174{" "}
                  </h3>
                  <p className="mb-0 fw-bold fs_xsm ff_calibiri clr_brown">
                    Total Sites{" "}
                  </p>
                </div>
              </Col>
              <Col
                sm={4}
                xs={6}
                className="mt-3 mt-sm-2  justify-content-center d-flex"
              >
                <div className="circle_white  d-flex justify-content-center flex-column">
                  <h3 className="mb-0 fw-bold fs_xsm ff_calibiri text-white">
                    45{" "}
                  </h3>
                  <p className="mb-0 fw-bold fs_xsm ff_calibiri clr_brown">
                    Nightly <span className="d-block ">cost</span>{" "}
                  </p>
                </div>
              </Col>
              <Col
                sm={4}
                xs={6}
                className="mt-sm-4 mt-3 pt-sm-3 justify-content-center d-flex"
              >
                <div className="circle_brown  d-flex justify-content-center flex-column">
                  <img src={dog_img} alt="dog_img" />
                </div>
              </Col>
              <Col
                sm={4}
                xs={6}
                className="mt-sm-4 mt-3 pt-sm-3 justify-content-center d-flex"
              >
                <div className="circle_brown  d-flex justify-content-center flex-column">
                  <img src={light_img} alt="light_img" />
                </div>
              </Col>
              <Col
                sm={4}
                xs={6}
                className="mt-sm-4 mt-3 pt-sm-3 justify-content-center d-flex"
              >
                <div className="circle_brown  d-flex justify-content-center flex-column">
                  <h3 className="mb-0 ff_calibiri fs_xsm fw-normal clr_brown position-relative">
                    <span> RV/Trailers</span>{" "}
                    <img
                      className="position-absolute ajust_text_cross"
                      src={cross_img}
                      alt="cross_img"
                    />{" "}
                  </h3>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
