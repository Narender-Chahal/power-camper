import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import star_img1 from "../assets/img/png/start_img1.png";
import star_img2 from "../assets/img/png/start_img2.png";
import star_img3 from "../assets/img/png/start_img3.png";
import Dropdown from "react-bootstrap/Dropdown";
import man_img from "../assets/img/png/man_img.png";
import cut_img from "../assets/img/png/cut_img.png";
import doted_img3 from "../assets/img/png/doted_img3.png";
function RatingSection() {
  return (
    <section className="position-relative pt-sm-5 ">
      <div className="position-absolute d-none d-md-flex doted_img3_adjust ">
        <img src={doted_img3} alt="doted_img3" />
      </div>
      <div className="bg_ clr pt-5">
        <Container className="container_custom2">
          <Row>
            <Col xxl={4} lg={5} className="z_index1 position-relative">
              <div className="rating_box d-none d-lg-flex"></div>
              <div className=" pe-5 py-3 ps-5 rating_box1">
                <h2 className="mb-0 fw-bold fs_xxsm ff_comic text-white">
                  Ratings Summary
                </h2>
                <div className="d-flex align-items-center mt-4 pt-1 justify-content-between">
                  <h3 className="mb-0 ff_calibiri fw-normal fs_xsm text-white ">
                    Overall Rating
                  </h3>
                  <img src={star_img1} alt="star_img1" />
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between">
                  <h3 className="mb-0 ff_calibiri fw-normal fs_xsm text-white ">
                    Access{" "}
                  </h3>
                  <img src={star_img2} alt="star_img2" />
                </div>
                <div className="d-flex align-items-center mt-4 pt-1 justify-content-between">
                  <h3 className="mb-0 ff_calibiri fw-normal fs_xsm text-white">
                    Location{" "}
                  </h3>
                  <img src={star_img1} alt="star_img1" />
                </div>
                <div className="d-flex align-items-center mt-4 pt-1 justify-content-between">
                  <h3 className="mb-0 ff_calibiri fw-normal fs_xsm text-white">
                    Cleanlines{" "}
                  </h3>
                  <img src={star_img2} alt="star_img2" />
                </div>
                <div className="d-flex align-items-center mt-4 pt-1 justify-content-between">
                  <h3 className="mb-0 ff_calibiri fw-normal fs_xsm text-white">
                    Site Quality{" "}
                  </h3>
                  <img src={star_img2} alt="star_img2" />
                </div>
                <div className="d-flex align-items-center mt-4 pt-1 justify-content-between">
                  <h3 className="mb-0 ff_calibiri fw-normal fs_xsm text-white">
                    Noise{" "}
                  </h3>
                  <img src={star_img3} alt="star_img3" />
                </div>
              </div>
            </Col>
            <Col xxl={8} lg={7}>
              <Row className="justify-content-between">
                <Col
                  md={7}
                  className="d-flex flex-column align-items-center align-items-sm-start"
                >
                  <h3 className="mb-0 ff_calibiri fs_xsm fw-normal text-white mt-4">
                    Filter By
                  </h3>
                  <div className="d-flex mt-2 pt-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="py-sm-3"
                        variant="success"
                        id="dropdown-basic"
                      >
                        <span className="fw-normal fs_xsm ff_calibiri ">
                          {" "}
                          Traveler Type{" "}
                        </span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="ms-2 ms-sm-3">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="py-sm-3"
                          variant="success"
                          id="dropdown-basic"
                        >
                          <span className="fw-normal fs_xsm ff_calibiri ">
                            {" "}
                            Traveler Frequency{" "}
                          </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Col>
                <Col
                  md={4}
                  xxl={5}
                  className="d-flex flex-column align-items-center align-items-sm-start"
                >
                  <h3 className="mb-0 ff_calibiri fs_xsm fw-normal text-white mt-4 ps-2">
                    Sort By{" "}
                  </h3>{" "}
                  <Dropdown className="mt-2 pt-1">
                    <Dropdown.Toggle
                      className="py-sm-3"
                      variant="success"
                      id="dropdown-basic"
                    >
                      <span className="fw-normal fs_xsm ff_calibiri ">
                        {" "}
                        Newest - default{" "}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <Row className="pt-md-5 pt-4 justify-content-sm-between justify-content-center justify-content-xl-start text-center text-sm-start">
                <Col sm={2} xs={10}>
                  <div className="d-flex align-items-center flex-sm-column ">
                    <img
                      className="w-100 me-4 me-sm-0"
                      src={man_img}
                      alt="man_img"
                    />
                    <div className="">
                      <h3 className="mb-0 fw-bold fs_xsm ff_calibiri pt-2 text-white text-center">
                        Snoopinaround
                      </h3>
                      <p className="mb-0 fw-normal fs_xsm ff_calibiri pt-sm-1 clr_lightbrown text-center">
                        Geneseo,IL
                      </p>
                      <p className="mb-0 fw-normal fs_xsm ff_calibiri pt-sm-1 clr_lightbrown text-center">
                        Ram 2500{" "}
                      </p>
                      <p className="mb-0 fw-normal fs_xsm ff_calibiri pt-1 clr_lightbrown text-center">
                        21 reviews{" "}
                      </p>
                      <div className="d-flex justify-content-center pt-md-2 pt-sm-4 pt-2 pt-lg-0 d-sm-none">
                        {" "}
                        <button className=" ff_comic fw-bold fs_xsm btn_member text-white mt-xxl-3 mt-lg-5 mt-md-4 mt-sm-5 mb-4 mb-sm-0">
                          Member
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={9} xxl={9} className="mt-xxl-3 mt-3 mt-sm-0 ms-md-4">
                  <h3 className="mb-0 fw-bold fs_xsm ff_calibiri pt-2 text-white">
                    Outstanding Campground
                  </h3>
                  <p className="mb-0 fw-normal fs_xsm ff_calibiri clr_lightbrown pt-1">
                    Reviewed 10/24/2021
                  </p>
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2 mt-1">
                    <h3 className="fw-normal fs_xsm ff_calibiri text-white mb-0 pe-xxl-3">
                      Overall Rating
                    </h3>
                    <img
                      className="ps-2 ps-sm-0"
                      src={star_img1}
                      alt="star_img1"
                    />
                  </div>
                  <p className="mb-0 fw-normal fs_xsm ff_calibiri pt-2 clr_lightbrown pt-xxl-4">
                    The government campgrounds are the best and this one is no
                    exception. We stayed in loop #1 with electricity. Spacious
                    and private sites with fire rings and picnic tables. The
                    only noise was from acorns falling on rv’s. There is a
                    walking trail (Dog friendly but no bikes) to the beach from
                    the campground. Bicyclists can take a short
                  </p>
                </Col>
              </Row>{" "}
              <div className="d-flex align-items-center mt-4">
                <button className=" ff_comic fw-bold fs_xsm btn_member text-white d-none d-sm-block mt-lg-5   mb-sm-0">
                  Member
                </button>
                <button className=" ff_comic fw-bold fs_xsm btn_helfull text-white mt-xl-4 ms-5   ">
                  Helpful{" "}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default RatingSection;
