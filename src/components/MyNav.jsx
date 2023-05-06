import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/png/logo.png";
function MyNav() {
  const [first, setfirst] = useState(false);
  if (first) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = " visible";
  }
  return (
    <section className="nav_bg">
      <Container className="custom_container">
        <nav>
          <div className="d-flex justify-content-between align-items-center">
            <a className="z_index " href="#">
              <img className="width_xsm" src={logo} alt="logo" />
            </a>
            <ul
              className={
                first === true
                  ? "d-flex align-items-center flex-column flex-md-row justify-content-center open_nav "
                  : "d-flex align-items-center flex-column flex-md-row justify-content-center close_nav "
              }
            >
              <button
                onClick={() => setfirst(false)}
                className="btn-close position-absolute top-0 end-0 m-3 d-md-none text-white fs- border-1 bg-white p-3 "
              ></button>
              <li className="hover_line position-relative">
                <a
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="hover_line position-relative ms-md-2">
                <a className="fw-bold fs_xsm ff_comic text-white" href="#">
                  Campgrounds
                </a>
              </li>
              <li className="hover_line position-relative ms-md-2">
                <a className="fw-bold fs_xsm ff_comic text-white" href="#">
                  About us
                </a>
              </li>
              <li className="hover_line position-relative ms-md-2">
                <a className="fw-bold fs_xsm ff_comic text-white" href="#">
                  Contact
                </a>
              </li>
              <li className="pt-2 ms-lg-5 ms-md-3 ps-lg-5">
                <button className="fw-bold fs_xsm ff_comic text-white btn_sign_up">
                  Sign Up
                </button>
              </li>
              <li className="pt-2 ps-md-3 mt-3 mt-md-0">
                <button className="fw-bold fs_xsm ff_comic text-white log_in_btn">
                  Log in
                </button>
              </li>
            </ul>
            <div
              onClick={() => setfirst(true)}
              className="d-flex justify-content-between flex-column h_20 d-md-none "
            >
              <span className="icons"></span>
              <span className="icons"></span>
              <span className="icons"></span>
            </div>
          </div>
        </nav>
      </Container>
    </section>
  );
}

export default MyNav;
