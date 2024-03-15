import React from "react";
import GuestNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import line1 from "../assets/images/line1.svg";
import line2 from "../assets/images/line2.svg";

const Contact = () => {
  return (
    <div>
      <GuestNavbar />
      <div className="py-5 px-3 px-md-5 m-lg-5">
        <div className="d-flex flex-column gap-3 gap-lg-4 justify-content-md-center align-items-center mb-lg-5 ">
          <div className="d-flex gap-2 align-items-center about justify-content-md-center">
            <NavLink className="nav-link" activeclassname="active" to="/">
              Home
            </NavLink>
            <i
              className="bi bi-chevron-right"
              style={{ fontSize: "0.8rem" }}
            ></i>
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/contact"
            >
              Contact us
            </NavLink>
          </div>
          {/* <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
          <h6 style={{ color: "#898989" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h6> */}
        </div>
        <div className="row  mt-5">
          <div className="col-12 col-md-4 d-flex flex-column gap-3 border-line pe-lg-5 pb-4 pb-md-0">
            <h6>Follow us</h6>
            <div className="d-flex align-items-end gap-3 pe-lg-5">
              <i className="bi bi-facebook px-1 social-icon"></i>
              <i className="bi bi-instagram px-1 social-icon"></i>
              <i className="bi bi-twitter px-1 social-icon"></i>
              <i className="bi bi-linkedin px-1 social-icon"></i>
            </div>
          </div>

          <div className="col-12 col-md-4 border-line">
            <div className="d-flex gap-3  my-3">
              {" "}
              <FaPhoneVolume />{" "}
              <h5 style={{ fontWeight: "300" }} className="pe-lg-5">
                08085554485
              </h5>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex gap-3 my-3 py-2 py-md-0">
            <i className="bi bi-geo-alt-fill"></i>
            <h5 style={{ fontWeight: "300" }}>
              38 CIPM Ave, Alausa, Ikeja Cipm Ave, Alausa, Ikeja 101233, Lagos
            </h5>
          </div>
        </div>
      </div>
      <section
        style={{ backgroundColor: "#F5F5F5" }}
        className="position-relative"
      >
        <div className="py-5 px-4 px-lg-5 position-relative">
          <img
            src={line1}
            alt="line"
            className="d-none d-md-flex position-absolute"
            style={{ top: "-6%", left: "-4%" }}
          />
          <img
            src={line2}
            alt="line"
            className="d-none d-md-flex  position-absolute"
            style={{ bottom: "0%", left: "-6%" }}
          />
          <div className="text-center mb-5">
            <h2 style={{ fontWeight: "400" }}>Say hello</h2>
            <p className="my-2" style={{ color: "#777777" }}>
              Lorem Ipsum is simply dummy text of the printing .
            </p>
          </div>

          <Form className="my-5 mx-auto" style={{ maxWidth: "40rem" }}>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#5D5D5D" }}>
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    id="firstName"
                    className=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#5D5D5D" }}>
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    id="lastName"
                    className=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#5D5D5D" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    className=""
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={8} />
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-4 d-flex justify-content-end">
              <Button type="submit" className="btn-primary p-3">
                {" "}
                Get in touch
              </Button>
            </div>
          </Form>
        </div>
      </section>
      {/* 
      <section className="my-3 my-md-5 p-3 p-md-5 mx-2 mx-lg-4">
        <h1 className="my-4">Lorem Ipsum</h1>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br /> industry.{" "}
        </h6>
        <Card
          className="border-0 my-3"
          style={{ background: "#000000", borderRadius: "15px" }}
        >
          <Row className="px-3 py-5 px-md-5 align-items-center">
            <Col xs={12} md={7} className="mb-3">
              <h2 className="mb-3 text-white">Stay in the loop</h2>
              <h5 className="text-white" style={{ fontWeight: "400" }}>
                Subscribe to receive the latest news and updates about TDA.{" "}
              </h5>
              <h5 className="text-white" style={{ fontWeight: "400" }}>
                We promise not to spam you!{" "}
              </h5>
            </Col>
            <Col xs={12} md={5}>
              <Card className=" border-0 p-2 bg-white">
                <div className="d-flex ">
                  {" "}
                  <input
                    className="border-0 bg-white w-100"
                    placeholder="Enter email address"
                    type="text"
                  />
                  <Button className="btn-primary">Continue</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;
