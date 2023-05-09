import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/png/logo.png";
import closbtn from "../assets/img/png/closebtn.png"
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
              <a
                onClick={() => setfirst(false)}
                className=" position-absolute top-0 end-0 m-3 d-md-none   "
                href="#"
              >
                <img width={40} className="rounded-5" src={closbtn} alt="closbtn" />
              </a>
              <li className=" ">
                <a
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white hover_line position-relative"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className=" ms-md-2 mt-3 mt-md-0 ">
                <a
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white hover_line position-relative"
                  href="#"
                >
                  Campgrounds
                </a>
              </li>
              <li className=" ms-md-2 mt-3 mt-md-0 ">
                <a
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white hover_line position-relative"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li className=" ms-md-2 mt-3 mt-md-0">
                <a
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white hover_line position-relative  "
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="pt-1 ms-lg-5 ms-md-3 mt-3 mt-md-0 ps-lg-5">
                <button
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white btn_sign_up"
                >
                  Sign Up
                </button>
              </li>
              <li className="pt-1 ps-md-3 mt-3 mt-md-0">
                <button
                  onClick={() => setfirst(false)}
                  className="fw-bold fs_xsm ff_comic text-white log_in_btn"
                >
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
