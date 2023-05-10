import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import big_img from "../assets/img/png/big_img.png";
import select_img1 from "../assets/img/png/select_img.png";
import select_img2 from "../assets/img/png/select_img2.png";
import select_img3 from "../assets/img/png/select_img3.png";
import Overview_position_img from "../assets/img/png/overview_position_img.png";
function OverviewSection() {
  const [first, setfirst] = useState(3);
  return (
    <section className="my-5 py-lg-5  position-relative overflow-hidden">
      <img
        className="overview_position_img1 position-absolute d-none d-lg-block"
        src={Overview_position_img}
        alt="Overview_position_img"
      />
      <img
        className="overview_position_img2 position-absolute d-none d-lg-block"
        src={Overview_position_img}
        alt="Overview_position_img"
      />
      <Container className=" my-xl-5 py-xl-5 custom_container">
        <Row className="justify-content-center justify-content-lg-start">
          <Col lg={6}sm={8}>
            <h2 className="mb-0 fw-bold fs_sm ff_comic">Overview</h2>
            <ul className="ms-4 mt-2">
              <li className=" ff_calibiri fw-normal fs_xsm clr_black50 black_dots position-relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className=" ff_calibiri fw-normal fs_xsm clr_black50 black_dots my-1 position-relative">
                Commodo venenatis nec enim nisi id. Vestibulum interdum dictumst
                rhoncus ultrices amet amet.
              </li>
              <li className=" ff_calibiri fw-normal fs_xsm clr_black50 black_dots my-1 position-relative">
                Tellus adipiscing augue curabitur leo, pretium habitant turpis
                quis.
              </li>
              <li className=" ff_calibiri fw-normal fs_xsm clr_black50 black_dots my-1 position-relative">
                Quam mattis senectus odio mattis gravida gravida sollicitudin
                commodo. Cursus faucibus ut egestas in metus.
              </li>
              <li className=" ff_calibiri fw-normal fs_xsm clr_black50 black_dots my-1 position-relative">
                Consequat, suspendisse duis eget purus ornare.
              </li>
            </ul>
            <div className="w-100 d-flex justify-content-center justify-content-lg-start">
              <div className="mt-5 w_445 d-flex flex-column align-items-center">
                <img
                  height="315"
                  className={first === 3 ? "w-100 " : " d-none"}
                  src={big_img}
                  alt="big_img"
                />
                <img
                  height="315"
                  className={first === 2 ? "w-100" : "d-none"}
                  src={select_img2}
                  alt="select_img2"
                />{" "}
                <img
                  height="315"
                  className={first === 1 ? "w-100" : "d-none"}
                  src={select_img1}
                  alt="select_img1"
                />
                <div className="select_img_box mt_40">
                  <div className="d-flex justify-content-center py-3 my-1">
                    <img
                      onClick={() => setfirst(1)}
                      width="51"
                      height="51"
                      className={first === 1 ? "scale1" : "scale0"}
                      src={select_img1}
                      alt="select_img1"
                    />
                    <img
                      onClick={() => setfirst(2)}
                      width="51"
                      height="51"
                      className={first === 2 ? "ms-3 scale1" : "ms-3 scale0"}
                      src={select_img2}
                      alt="select_img2"
                    />
                    <img
                      onClick={() => setfirst(3)}
                      width="51"
                      height="51"
                      className={first === 3 ? "ms-3 scale1" : "ms-3 scale0"}
                      src={select_img3}
                      alt="select_img3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={10} xs={11}>
            <div className="green_gradient_box pt-sm-5 pt-3 px-sm-5 px-3 pb-sm-4 pb-3 mt-5 mt-lg-0 h-100">
              <h2 className="mb-0 fw-bold fs_sm  ff_comic text-white pb-3">
                Platte River Sold Out? We can get you a reservation!
              </h2>
              <div className="border_gradient_box p-4 mt-4">
                <h3 className="fw-bold fs_xxsm  ff_comic text-white text-center">
                  GET STARTED HERE
                </h3>
                <div className="d-flex flex-column flex-sm-row mt-sm-4 mt-3 pt-1">
                  <select
                    className="bg-transparent border_gradient_box ff_calibiri arrow pe-5  fw-normal fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      CA
                    </option>
                    <option className="bg-success" value="saab">
                      Saab
                    </option>
                  </select>
                  <select
                    className="bg-transparent border_gradient_box ff_calibiri w-100 ms-sm-3 mt-2 mt-sm-0 arrow pe-5  fw-normal fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      Doheny State Beach{" "}
                    </option>
                    <option className="bg-success" value="saab">
                      Saab
                    </option>
                  </select>
                </div>
                <div className="d-flex mt-sm-4 mt-3 pt-1 align-items-sm-center justify-content-between flex-column m flex-sm-row">
                  <h3 className="fw-bold fs_xsm ff_calibiri text-white">
                    Site Type:
                  </h3>
                  <div className="d-flex flex-column flex-sm-row w-100 max_select_type  ps-sm-3">
                    {" "}
                    <select
                      className="bg-transparent border_gradient_box ff_calibiri    arrow pe-5 w-100 Rv_max_width  fw-normal fs_xsm text-white py-2 px-3"
                      id="cars"
                    >
                      <option className="bg-success " value="volvo">
                        RV{" "}
                      </option>
                      <option className="bg-success" value="saab">
                        Saab
                      </option>
                    </select>
                    <select
                      className="bg-transparent border_gradient_box ff_calibiri max_width w-100  ms-sm-3 mt-2 mt-sm-0 arrow pe-5  fw-normal fs_xsm text-white py-2 px-3"
                      id="cars"
                    >
                      <option className="bg-success " value="volvo">
                        10 ft.{" "}
                      </option>
                      <option className="bg-success" value="saab">
                        20 ft.{" "}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between flex-column flex-sm-row pt-sm-4 pt-3">
                  <p className="fw-bold fs_xsm ff_calibiri text-white">
                    Number in your party:
                  </p>
                  <select
                    className="bg-transparent border_gradient_box ff_calibiri   ms-sm-3 arrow pe-5  fw-normal fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      01{" "}
                    </option>
                    <option className="bg-success" value="saab">
                      02{" "}
                    </option>
                  </select>
                </div>
                <div className="d-flex justify-content-between flex-column flex-sm-row pt-sm-4 pt-3">
                  <p className="fw-bold fs_xsm ff_calibiri text-white">
                    Check in Date:{" "}
                  </p>
                  <select
                    className="bg-transparent border_gradient_box ff_calibiri w-100  date_max_width arrow pe-5  fw-normal fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      Friday,May 13/2022{" "}
                    </option>
                    <option className="bg-success" value="saab">
                      Friday,May 14/2022{" "}
                    </option>
                  </select>
                </div>
                <div className="d-flex justify-content-between flex-column flex-sm-row pt-sm-4 pt-3">
                  <p className="fw-bold fs_xsm ff_calibiri text-white">
                    Check Out Date:{" "}
                  </p>
                  <select
                    className="bg-transparent border_gradient_box ff_calibiri w-100  date_max_width arrow pe-5  fw-normal fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      Sunday,May 15/2022{" "}
                    </option>
                    <option className="bg-success" value="saab">
                      Sunday,May 16/2022{" "}
                    </option>
                  </select>
                </div>
                <div className="d-flex justify-content-center mt-sm-4 pt-3">
                  {" "}
                  <button className=" ff_comic fw-bold fs_xsm btn_member  text-white ">
                    Continue to Step 2
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OverviewSection;
