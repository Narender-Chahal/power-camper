import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import start_img1 from "../assets/img/png/start_img1.png";
import input_dotedimg1 from "../assets/img/png/input_doted1.png";
import input_dotedimg2 from "../assets/img/png/input_doted2.png";
import input_dotedimg3 from "../assets/img/png/input_doted3.png";
import bottom_layer from "../assets/img/png/bottom_layer.png";
function ComentSection() {
  return (
    <section className="overflow_h idden py-md-5 py-4 py-sm-0 mt-sm-5 position-relative">
      <div>
        <img
          className="input_dotedimg1 position-absolute d-none d-lg-flex"
          src={input_dotedimg1}
          alt="input_dotedimg1"
        />
        <img
          className="input_dotedimg2 position-absolute d-none d-xl-block"
          src={input_dotedimg2}
          alt="input_dotedimg2"
        />
        <img
          className="input_dotedimg3  position-absolute d-none d-lg-flex"
          src={input_dotedimg3}
          alt="input_dotedimg3"
        />
      </div>
      <Container className=" custom_container py-lg-5 py-4 mb-sm-5 input_bg ">
        <h2 className="mb-0 ff_comic fw-bold  fs_sm text-white  pt-5 pb-4 pb-sm-5 pt-sm-5 text-center">
          Your comment/rating/review;
        </h2>
        <div className="input_box pb-5 mb-5  mx-auto">
          <div className="text-center">
            <h3 className="mb-0 text-white ff_calibiri fw-bold fs_xxsm text-center pt-4 pb-2">
              Your Rating
            </h3>
            <img src={start_img1} alt="start_img1" />
          </div>
          <div className="d-flex flex-column pt-5 align-items-center">
            {" "}
            <input
              className=" fw-normal fs_base ff_calibiri input_modify  clr_lightbrown"
              type="text"
              placeholder="Name"
            />
            <input
              className=" fw-normal fs_base ff_calibiri input_modify  clr_lightbrown mt-3"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="fw-normal fs_base ff_calibiri input_modify  clr_lightbrown mt-3"
              name=""
              id=""
              cols="0"
              rows="4"
              placeholder="Review"
            ></textarea>
            <div className="w-100 mx-auto"></div>
          </div>
          <div className="w_610 mt-3 pt-1 mx-auto">
            <p className="mb-0  fw-normal ff_xsm ff_calibiri     clr_lightbrown mt-3">
              Your email address will not be published. Required fields marked
            </p>
            <div className="pt-4 mt-3">
              <button className=" ff_comic fw-bold fs_xsm btn_member  text-white ">
                Post Review{" "}
              </button>{" "}
              <button className=" ff_comic fw-bold fs_xsm chose_btn  text-white ms-3">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4914 10.1984V19.1984M11.4914 10.1984L8.99142 12.1984M11.4914 10.1984L13.9914 12.1984M4.52542 7.31543C3.57963 7.55342 2.75329 8.12859 2.20167 8.93287C1.65005 9.73715 1.4111 10.7152 1.52972 11.6832C1.64835 12.6512 2.11638 13.5426 2.84588 14.1899C3.57538 14.8372 4.51615 15.1958 5.49142 15.1984H6.49142"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3219 5.33596C14.9801 3.98253 14.1364 2.8097 12.962 2.05522C11.7875 1.30073 10.3701 1.02105 8.99711 1.27286C7.6241 1.52468 6.3982 2.28914 5.56792 3.4113C4.73764 4.53345 4.36512 5.92933 4.52586 7.31596C4.52586 7.31596 4.67886 8.19796 4.99186 8.69796"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.4912 15.1982C17.1972 15.1978 17.8952 15.0478 18.5391 14.7581C19.183 14.4684 19.7582 14.0457 20.2269 13.5177C20.6957 12.9897 21.0473 12.3684 21.2586 11.6948C21.4699 11.0211 21.5362 10.3103 21.453 9.60919C21.3698 8.90806 21.1391 8.23251 20.776 7.62698C20.4129 7.02146 19.9257 6.49969 19.3464 6.09603C18.7672 5.69236 18.109 5.41596 17.4152 5.285C16.7214 5.15405 16.0078 5.17151 15.3212 5.33624L13.9912 5.69824"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span> Choose file </span>{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ComentSection;
