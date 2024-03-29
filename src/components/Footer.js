import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/images/dehydrator-logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="" style={{ background: "#000000" }}>
      <Row
        className="px-3 px-md-5 pt-4 pt-md-5 pb-md-5"
        style={{ borderBottom: "1px solid #ffffff" }}
      >
        <Col
          xs={12}
          sm={6}
          md={4}
          className="d-flex flex-column gap-3 text-white pe-3 mb-4"
        >
          <img src={logo} style={{ width: "100px" }} />
          <h6 className="text-white">
            Dehydrator Hub is a vital solution addressing post-harvest loss in
            Nigeria's agriculture space by connecting producers with processors
            and processing machinery.{" "}
          </h6>
          <a
            href="mailto:orders@dehydratorhub.com"
            className="text-white text-decoration-none"
          >
            orders@dehydratorhub.com
          </a>
        </Col>
        <Col xs={12} sm={6} md={2} className="mb-4">
          <h6
            className="mb-3 text-white"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/about-us")}
          >
            Home
          </h6>
          <h6
            style={{ cursor: "pointer" }}
            className=" mb-3 text-white"
            onClick={() => navigate("/")}
          >
            Processing Services
          </h6>
          <h6 style={{ cursor: "pointer" }} className="mb-3 text-white">
            <Link
              className="text-decoration-none text-white"
              to="https://sandbox-flw-web-v3.herokuapp.com/store/thepostharvestcentre"
              target="_blank"
            >
              {" "}
              Marketplace
            </Link>
          </h6>
          <h6
            className="mb-3 text-white"
            style={{ cursor: "pointer" }}
            // style={{ fontWeight: "600", cursor: "pointer" }}
            onClick={() => navigate("/about-us")}
          >
            About us
          </h6>
          <div className="d-flex flex-column gap-1">
            {/* <h6
              className="text-white"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Services
            </h6> */}

            {/* <h6
              style={{ cursor: "pointer" }}
              className="text-white"
              onClick={() => navigate("/faq")}
            >
              FAQ
            </h6>
            <h6
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/blog")}
              className="text-white"
            >
              Blog
            </h6> */}
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="d-flex flex-column gap-3 mb-4">
          <h6
            className="text-white"
            style={{ fontWeight: "600", cursor: "pointer" }}
            onClick={() => navigate("/contact")}
          >
            Contact us
          </h6>
          <h6 className="text-white">
            38 CIPM Ave, Alausa, Ikeja 101233, Lagos{" "}
          </h6>
          <a href="tel:08085554485" className="text-white text-decoration-none">
            08085554485
          </a>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={3}
          className="d-flex align-items-end gap-3 mb-4"
        >
          <a href="https://www.facebook.com/p/fooddehydratorng-100037323050125/" className="text-decoration-none text-dark social-icon">
          <i className="bi bi-facebook px-1 "></i>
          </a>
          <a href="https://www.instagram.com/food.dehydrator.ng/" className="text-decoration-none text-dark social-icon"><i className="bi bi-instagram px-1 "></i></a> 
          <a href="https://x.com/DehydratorHub?t=DQVIm13KGZebctSef9z1Kg&s=08" className="text-decoration-none text-dark social-icon"><i className="bi bi-twitter px-1 "></i></a> 
          <a href="https://www.linkedin.com/company/dehydratorhub/" className="text-decoration-none text-dark social-icon"><i className="bi bi-linkedin px-1 "></i></a> 
        </Col>
      </Row>
      <div className="py-3 text-center text-white" style={{ fontSize: "13px" }}>
        {" "}
        Copyright &copy; 2024 Company All rights reserved
      </div>
    </div>
  );
};

export default Footer;
