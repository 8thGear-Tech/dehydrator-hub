import React, { useState } from "react";
import GuestNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { Col, Image, Row, Card, Button } from "react-bootstrap";
import hero1 from "../assets/images/about-hero-1.png";
import hero2 from "../assets/images/about-hero-2.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import team1 from "../assets/images/team1.svg";
import team2 from "../assets/images/team2.svg";
import team3 from "../assets/images/team3.svg";
import team4 from "../assets/images/team4.svg";
import testimony1 from "../assets/images/testimony1.png";
import points from "../assets/images/points.svg";
import ellipse from "../assets/images/ellipse.svg";
import { Form, NavLink } from "react-router-dom";
const whyWork = [
  {
    id: 1,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
  },
];

const testimonials = [
  {
    imgSrc: testimony1,
    quote:
      "File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.",
    name: "Larry Diamond",
    title: "Chief Executive Director",
  },
  {
    imgSrc: testimony1,
    quote:
      "Effortlessly managing people with integrated tools that offer unmatched speed and reliability.",
    name: "Samantha Brooks",
    title: "Food Manager",
  },
  // Add more testimonials as needed
];

const aboutUs = [
  {
    image: hero1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    heading: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    image: hero1,
    text: "The best Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    heading: "Lorem Ipsum is simply dummy text of the printing and",
  },
  // Add more testimonials as needed
];
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAboutIndex, setCurrentAboutIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstTestimonial = currentIndex === 0;
    const newIndex = isFirstTestimonial
      ? testimonials.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastTestimonial = currentIndex === testimonials.length - 1;
    const newIndex = isLastTestimonial ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToAboutPrevious = () => {
    const isFirstAbout = currentAboutIndex === 0;
    const newIndex = isFirstAbout ? aboutUs.length - 1 : currentAboutIndex - 1;
    setCurrentAboutIndex(newIndex);
  };

  const goToAboutNext = () => {
    const isLastAbout = currentAboutIndex === aboutUs.length - 1;
    const newIndex = isLastAbout ? 0 : currentIndex + 1;
    setCurrentAboutIndex(newIndex);
  };

  const { imgSrc, quote, name, title } = testimonials[currentIndex];
  const { image, text, heading } = aboutUs[currentAboutIndex];

  const idToBackgroundColorMap = {
    1: "#FFFFFF",
    2: "#F5F5F5",
    3: "#F5F5F5",
  };
  const idToTextBackgroundColorMap = {
    1: "#B000DC1C",
    2: "#DC42001C",
    3: "#00DC8D1C",
  };

  const idToColorMap = {
    1: "#B000DC",
    2: "#DC1A00",
    3: "#00DC72",
  };

  return (
    <div>
      <GuestNavbar />
      <div>
        <Row className="pt-3 pb-5 gap-0 g-0">
          <Col xs={12} md={6} className="order-md-2 position-relative">
            <Image fluid src={image} alt="hero" />
            <div
              className="d-flex gap-2 align-items-center position-absolute p-2"
              style={{
                bottom: "0%",
                left: "0%",
                backgroundColor: "#333333",
                color: "#ffffff",
              }}
            >
              <i className="bi bi-arrow-left" onClick={goToAboutPrevious}></i>
              <p style={{ color: "#ffffff" }} className="my-auto">
                {currentAboutIndex + 1} of {aboutUs.length}
              </p>
              <i className="bi bi-arrow-right" onClick={goToAboutNext}></i>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <div
              className="border-0 h-100 d-flex justify-content-center align-items-center p-3 p-md-0"
              style={{ background: "#E27A0C1F" }}
            >
              <div
                className="d-flex flex-column gap-4"
                style={{ maxWidth: "25rem" }}
              >
                <div className="d-flex gap-2 align-items-center about">
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
                    to="/about-us"
                  >
                    About us
                  </NavLink>
                </div>

                <div className="d-block gap-3 mt-1">
                  <h2 style={{ fontWeight: "700" }}>{heading}</h2>
                  <h6>{text}</h6>
                </div>
                <div>
                  <Button
                    className="my-3 px-3 btn-primary"
                    style={{ borderRadius: "40px" }}
                  >
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <section className="p-3 p-md-5 mx-lg-4 bg-white">
          <h4 style={{ fontWeight: "700" }}>Why work with us</h4>
          <Row className="my-5">
            {whyWork.map((work, index) => {
              const backgroundColor = idToBackgroundColorMap[work.id];
              const backgroundTextColor = idToTextBackgroundColorMap[work.id];
              const textColor = idToColorMap[work.id];

              const cardStyle =
                index === 0
                  ? {
                      boxShadow: "0 2px 100px 0 rgba(156, 156, 156, 0.25)",
                      backgroundColor: backgroundColor,
                      border: "none",
                    }
                  : { backgroundColor: backgroundColor, border: "none" };

              return (
                <Col xs={12} md={4} key={work.id} className="mb-3">
                  <Card
                    style={cardStyle}
                    className="d-flex justify-content-center align-items-center p-5"
                  >
                    <div className="d-flex flex-column gap-3">
                      <div
                        style={{
                          backgroundColor: backgroundTextColor,
                          color: textColor,
                          borderRadius: "8px",
                          width: "100px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <p style={{ color: textColor }} className="my-auto">
                          {work.title}
                        </p>
                      </div>
                      <h4 style={{ fontWeight: "700" }}>{work.title}</h4>
                      <p>{work.text}</p>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </section>
        <section style={{ backgroundColor: "#F5F5F5" }} className="mb-5 p-md-5">
          <Row className="px-lg-5">
            <Col xs={12} md={4} className="mb-3">
              <Image fluid src={hero2} alt="" className="h-100" />
            </Col>
            <Col xs={12} md={8} className="mb-3">
              <div
                className="d-flex flex-column gap-2 ps-3 pe-4 px-md-5 "
                style={{ maxWidth: "34rem" }}
              >
                <h6 style={{ fontWeight: "500", color: "#81AC29" }}>
                  Lorem ipsum
                </h6>
                <h3 style={{ fontWeight: "600", lineHeight: "34px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </h3>
                <h6 style={{ lineHeight: "22px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </h6>
              </div>
            </Col>
          </Row>
        </section>
        <section className="p-3 p-md-5 mx-lg-4 bg-white">
          <h4 style={{ fontWeight: "700" }}>Our Team</h4>
          <Row className="my-5">
            <Col xs={6} md={3} className="mb-3">
              <Card
                className="border-none p-3 justify-content-center text-center align-items-center"
                style={{ background: "#F5F5F5", border: "none" }}
              >
                <Image
                  fluid
                  style={{ height: "100px", width: "100px" }}
                  src={team1}
                  alt=""
                />
                <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-3">
              <Card
                className="border-none p-3 align-items-center justify-content-center text-center"
                style={{ background: "#F5F5F5", border: "none" }}
              >
                <Image
                  fluid
                  style={{ height: "100px", width: "100px" }}
                  src={team2}
                  alt=""
                />
                <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-3">
              <Card
                className="border-none p-3 align-items-center justify-content-center text-center"
                style={{ background: "#F5F5F5", border: "none" }}
              >
                <Image
                  fluid
                  style={{ height: "100px", width: "100px" }}
                  src={team3}
                  alt=""
                />
                <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card
                className="border-none p-3 justify-content-center text-center align-items-center"
                style={{ background: "#F5F5F5", border: "none" }}
              >
                <Image
                  fluid
                  style={{ height: "100px", width: "100px" }}
                  src={team4}
                  alt=""
                />
                <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="p-3 p-md-5" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="mx-lg-4">
            <h4 style={{ fontWeight: "700" }}>
              Our Partnership and Collaborations
            </h4>
            <Row className="my-5">
              <Col xs={6} md={3} className="mb-3">
                <Card
                  className="border-none p-3 justify-content-center text-center align-items-center"
                  style={{ background: "#C4C4C4", border: "none" }}
                >
                  <Image
                    fluid
                    style={{ height: "100px", width: "100px" }}
                    src={team1}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                  <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
                </Card>
              </Col>
              <Col xs={6} md={3} className="mb-3">
                <Card
                  className="border-none p-3 align-items-center justify-content-center text-center"
                  style={{ background: "#C4C4C4", border: "none" }}
                >
                  <Image
                    fluid
                    style={{ height: "100px", width: "100px" }}
                    src={team2}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                  <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
                </Card>
              </Col>
              <Col xs={6} md={3} className="mb-3">
                <Card
                  className="border-none p-3 align-items-center justify-content-center text-center"
                  style={{ background: "#C4C4C4", border: "none" }}
                >
                  <Image
                    fluid
                    style={{ height: "100px", width: "100px" }}
                    src={team3}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                  <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
                </Card>
              </Col>
              <Col xs={6} md={3} className="mb-3">
                <Card
                  className="border-none p-3 justify-content-center text-center align-items-center"
                  style={{ background: "#C4C4C4", border: "none" }}
                >
                  <Image
                    fluid
                    style={{ height: "100px", width: "100px" }}
                    src={team4}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "600" }}>John Peter</h5>
                  <h6 style={{ color: "#8B8B8B", fontWeight: "300" }}>COO</h6>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section className="p-3 p-md-5 mx-lg-5 bg-white my-5">
          <Row className="px-lg-5">
            <Col xs={12} md={4} className="mb-3 px-2 px-md-0">
              {/* Dynamic image source based on current testimonial */}
              <div
                className="position-relative px-3 text-center align-items-center justify-content-center"
                style={{ zIndex: 0 }}
              >
                <Image
                  fluid
                  src={imgSrc}
                  alt=""
                  className="h-100"
                  style={{ zIndex: 1000 }}
                />
                {/* Decorative elements */}
                <div
                  className="position-absolute"
                  style={{ top: "-5%", left: "-5%", zIndex: 1 }}
                >
                  <Image fluid src={points} alt="" />
                </div>
                <div
                  className="position-absolute"
                  style={{ bottom: "-7%", right: "-3%", zIndex: 1 }}
                >
                  <Image fluid src={ellipse} alt="" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={8} className="mb-3 mt-3 mt-md-0">
              <div
                className="d-flex flex-column gap-3 gap-md-5 ps-3 pe-4 px-md-5 "
                style={{ maxWidth: "34rem" }}
              >
                <h1>Testimonials</h1>
                <h4
                  style={{
                    color: "#637381",
                    textDecoration: "italic",
                    fontWeight: "400",
                  }}
                >
                  <i>{quote}</i>
                </h4>
                <div>
                  <h4 style={{ fontWeight: "600", color: "#212B36" }}>
                    {name}
                  </h4>
                  <h6 style={{ color: "#637381" }}>{title}</h6>
                </div>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={goToPrevious}
                    style={{ borderRadius: "50%" }}
                  >
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={goToNext}
                    style={{ borderRadius: "50%" }}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </Col>
            {/* <Col xs={12} md={4} className="mb-3">
          <div className="position-relative px-3" style={{ zIndex: 0 }}>
  <Image fluid src={testimony1} alt="" className="h-100" style={{ zIndex: 1000 }}/>
  <div className="position-absolute" style={{ top: "0%", left: '-5%', zIndex: 1 }}>
    <img src={points} alt=""/>
  </div>
  <div className="position-absolute" style={{ bottom: '-10%', right: '-5%', zIndex: 1 }}>
    <img src={ellipse} alt=""/>
  </div>
</div>

          </Col>
          <Col xs={12} md={8} className="mb-3">
            <div className="d-flex flex-column gap-5 ps-3 pe-4 px-md-5 " style={{maxWidth:'34rem'}}>
              <h1>Testimonials</h1>
              <h4 style={{color:'#637381', textDecoration:'italic', fontWeight:'400'}}><i>File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.</i></h4>
            
              <div>  <h4 style={{fontWeight:'600', color:'#212B36'}}>Larry Diamond</h4>
              <h6 style={{color:'#637381'}}>Chief Executive Director</h6></div>
              <div className="d-flex gap-3">
              <button className="btn btn-outline-secondary" style={{borderRadius:'50%'}}><i className="bi bi-arrow-left"></i></button>
                <button className=" btn btn-outline-secondary" style={{borderRadius:'50%'}}><i className="bi bi-arrow-right"></i></button>
              </div>
             
            </div>
          </Col> */}
          </Row>
        </section>
        <section className="p-3 p-md-5" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="mx-lg-4">
            <h1 style={{ fontWeight: "700" }}>Our Blog</h1>
            <Row className="my-5">
              <Col xs={12} md={4} className="mb-3">
                <Card className="" style={{ border: "none" }}>
                  <div className="position-relative">
                    <Card.Img
                      src={blog1}
                      style={{
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0PX",
                      }}
                    />{" "}
                    <div
                      className="position-absolute text-align-center px-2 py-2"
                      style={{
                        top: "4%",
                        right: "4%",
                        backgroundColor: "#221860",
                      }}
                    >
                      <p
                        className="text-white text-center"
                        style={{
                          fontWeight: "300",
                          fontSize: "11px",
                          lineHeight: "12px",
                        }}
                      >
                        AUG{" "}
                      </p>
                      <h3
                        className="text-white"
                        style={{ fontWeight: "700", lineHeight: "0px" }}
                      >
                        12
                      </h3>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column gap-2">
                    <div
                      className="p-2 justify-content-center"
                      style={{
                        backgroundColor: "#F7F7F7",
                        color: "#949596",
                        width: "89px",
                      }}
                    >
                      <p className="my-auto">Lifestyle</p>
                    </div>
                    <h4 style={{ color: "#1C1C1C", fontWeight: "600" }}>
                      Web Development
                    </h4>
                    <h6>
                      The holidays are just around the corner, and that means
                      party season is in full swing! If you're not sure what to
                      wear to...
                    </h6>
                    <h6 style={{ color: "#221860" }}>
                      Read More{" "}
                      <i
                        className="bi bi-arrow-right"
                        style={{ color: "#221860" }}
                      ></i>
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <Card className="" style={{ border: "none" }}>
                  <div className="position-relative">
                    <Card.Img
                      src={blog2}
                      style={{
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0PX",
                      }}
                    />{" "}
                    <div
                      className="position-absolute text-align-center px-2 py-2"
                      style={{
                        top: "4%",
                        right: "4%",
                        backgroundColor: "#221860",
                      }}
                    >
                      <p
                        className="text-white text-center"
                        style={{
                          fontWeight: "300",
                          fontSize: "11px",
                          lineHeight: "12px",
                        }}
                      >
                        AUG{" "}
                      </p>
                      <h3
                        className="text-white"
                        style={{ fontWeight: "700", lineHeight: "0px" }}
                      >
                        12
                      </h3>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column gap-2">
                    <div
                      className="p-2 justify-content-center"
                      style={{
                        backgroundColor: "#F7F7F7",
                        color: "#949596",
                        width: "89px",
                      }}
                    >
                      <p className="my-auto">Lifestyle</p>
                    </div>
                    <h4 style={{ color: "#1C1C1C", fontWeight: "600" }}>
                      Web Development
                    </h4>
                    <h6>
                      The holidays are just around the corner, and that means
                      party season is in full swing! If you're not sure what to
                      wear to...
                    </h6>
                    <h6 style={{ color: "#221860" }}>
                      Read More{" "}
                      <i
                        className="bi bi-arrow-right"
                        style={{ color: "#221860" }}
                      ></i>
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <Card className="" style={{ border: "none" }}>
                  <div className="position-relative">
                    <Card.Img
                      src={blog1}
                      style={{
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0PX",
                      }}
                    />{" "}
                    <div
                      className="position-absolute text-align-center px-2 py-2"
                      style={{
                        top: "4%",
                        right: "4%",
                        backgroundColor: "#221860",
                      }}
                    >
                      <p
                        className="text-white text-center"
                        style={{
                          fontWeight: "300",
                          fontSize: "11px",
                          lineHeight: "12px",
                        }}
                      >
                        AUG{" "}
                      </p>
                      <h3
                        className="text-white"
                        style={{ fontWeight: "700", lineHeight: "0px" }}
                      >
                        12
                      </h3>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column gap-2">
                    <div
                      className="p-2 justify-content-center"
                      style={{
                        backgroundColor: "#F7F7F7",
                        color: "#949596",
                        width: "89px",
                      }}
                    >
                      <p className="my-auto">Lifestyle</p>
                    </div>
                    <h4 style={{ color: "#1C1C1C", fontWeight: "600" }}>
                      Web Development
                    </h4>
                    <h6>
                      The holidays are just around the corner, and that means
                      party season is in full swing! If you're not sure what to
                      wear to...
                    </h6>
                    <h6 style={{ color: "#221860" }}>
                      Read More{" "}
                      <i
                        className="bi bi-arrow-right"
                        style={{ color: "#221860" }}
                      ></i>
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section className="my-3 my-md-5 p-3 p-md-5 mx-lg-4">
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
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
