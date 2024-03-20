import React from "react";
import {
  millableProducts,
  hydrationProducts,
  dehydrationMachine,
  processingRates,
} from "../data";
import hero1 from "../assets/images/home-hero-section.png";
import hero2 from "../assets/images/home-hero-section-2.png";

import GuestNavbar from "../components/Navbar/Navbar";
import { Button, Card, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import SidebarNavbar from "../components/Navbar/SideNavbar";
import { ServicesNavbar } from "../components/Navbar/SideNavbar";
import { useNavigate } from "react-router-dom";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "355px",
};

const center = {
  lat: 9.082,
  lng: 8.6753,
};
const options = {
  restriction: {
    latLngBounds: {
      north: 13.885645, // Northernmost point of Nigeria
      south: 4.277144, // Southernmost point of Nigeria
      east: 14.680073, // Easternmost point of Nigeria
      west: 2.668432, // Westernmost point of Nigeria
    },
    strictBounds: true,
  },
};

const Home = () => {
  const navigate = useNavigate();
  function handleProductClick(productId, category) {
    console.log(category, productId);
    navigate(`/product/${category}-${productId}`);
  }

  return (
    <div>
      <GuestNavbar />
      <div className="d-flex d-md-none">
        <ServicesNavbar />
      </div>
      <div className="px-3 px-md-5 mx-lg-4">
        <section className="my-3 my-md-5">
          <Row>
            <Col md={3}>
              <div className="d-none d-md-block">
                <SidebarNavbar />
              </div>
            </Col>
            <Col xs={12} md={9}>
              <Card className="border-0 mb-5">
                <Card.Img src={hero1} alt="hero1" style={{ height: "380px" }} />

                <Card.ImgOverlay className="px-3 py-5 px-md-5">
                  <h3>Let's process your produce and</h3>
                  <h1>convert them into more valuable food products</h1>
                  <Button
                    variant="light"
                    className="my-4 px-3"
                    href="/about-us"
                  >
                    {" "}
                    Learn more
                  </Button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </section>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          class="scrollspy-example "
          tabindex="0"
        >
          <div>
            <h2>Produce we process</h2>

            <section className="my-3 my-md-5">
              <div className="my-4">
                <p
                  className="py-2 px-1 align-items-center text-center"
                  style={{
                    backgroundColor: "rgba(176, 0, 220, 0.11)",
                    color: "#B000DC",
                    padding: "6px, 14px, 6px, 14px",
                    borderRadius: "8px",
                    width: "150px",
                  }}
                  id="scrollspyHeading1"
                >
                  Prepping and Milling
                </p>
              </div>
              <Row>
                {millableProducts.map((product) => (
                  <Col xs={6} md={3} key={product.id} className="mb-3">
                    <Card
                      style={{ borderRadius: "16px" }}
                      onClick={() =>
                        handleProductClick(product?.id, "millable")
                      }
                      className="h-100"
                    >
                      <div
                        className="p-2 p-md-4"
                        style={{ borderBottom: "1px solid #dfdcdc" }}
                      >
                        <Card.Img src={product.productImage} />
                      </div>
                      <Card.Body className="py-2">
                        <div className="d-flex flex-wrap">
                          <h5 style={{ color: "#1C1C1C" }}>
                            {product.productName}
                          </h5>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-3 mb-5">
                <Button
                  className="btn-primary "
                  style={{ width: "230px" }}
                  onClick={() => navigate("/form/produce")}
                >
                  Request Service
                </Button>
              </div>
            </section>
            <section className="my-3 my-md-5">
              <div>
                <p
                  className="p-2 align-items-center text-center my-4"
                  style={{
                    backgroundColor: "rgba(176, 0, 220, 0.11)",
                    color: "#B000DC",
                    padding: "6px, 14px, 6px, 14px",
                    borderRadius: "8px",
                    width: "100px",
                  }}
                  id="scrollspyHeading2"
                >
                  Drying
                </p>
              </div>
              <Row>
                {hydrationProducts.map((product) => (
                  <Col xs={6} md={3} key={product.id} className="mb-3">
                    <Card
                      style={{ borderRadius: "16px" }}
                      onClick={() =>
                        handleProductClick(product?.id, "hydration")
                      }
                      className="h-100"
                    >
                      <div
                        className="p-2 p-md-4"
                        style={{ borderBottom: "1px solid #dfdcdc" }}
                      >
                        <Card.Img src={product.productImage} />
                      </div>
                      <Card.Body className="py-2">
                        <div className="d-flex flex-wrap">
                          <h5 style={{ color: "#1C1C1C" }}>
                            {product.productName}
                          </h5>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className="text-center mb-5 mt-3">
                <Button
                  className="btn-primary "
                  style={{ width: "230px" }}
                  onClick={() => navigate("/form/produce")}
                >
                  Request Service
                </Button>
              </div>
            </section>
          </div>
          <section className="my-3 my-md-5">
            <h2 className="my-5" id="scrollspyHeading3">
              Processing rates
            </h2>
            <Row>
              {processingRates.map((product) => (
                <Col xs={12} md={6} key={product.id} className=" mb-4 mb-md-3">
                  <Card
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #DEE2E7",
                    }}
                    className="h-100 px-3 pt-3 pb-4"
                  >
                    <Row className="">
                      <Col xs={6}>
                        <Card
                          className="p-2 align-items-center justify-content-center h-100"
                          style={{
                            borderRadius: "6px",
                            border: "1px solid #DEE2E7",
                          }}
                        >
                          <Card.Img src={product.productImage} />
                        </Card>
                      </Col>
                      <Col xs={6}>
                        <div className="d-flex flex-column gap-0 my-3 my-sm-5 py-0 py-sm-5 py-md-0 py-lg-5 h-100">
                          <h4
                            className="mt-3 mt-sm-0"
                            style={{ fontWeight: "600", color: "#1C1C1C" }}
                          >
                            {product.productType}
                          </h4>
                          {product.productPrice && (
                            <h4
                              className="py-3 align-items-center text-center my-4 price"
                              style={{
                                backgroundColor: "#FFF0DF",
                                color: "#FA3434",
                                fontWeight: "600",
                              }}
                            >
                              N{product.productPrice}/kg
                            </h4>
                          )}

                          <h6 style={{ fontStyle: "italic", color: "#505050" }}>
                            {product.productDescription}
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center mb-5 mt-3">
              <Button
                className="btn-primary "
                style={{ width: "230px" }}
                onClick={() => navigate("/form/produce")}
              >
                Request Service
              </Button>
            </div>
          </section>
        </div>
        <section className="my-3 my-md-5 py-5 px-lg-5">
          <h2 className="my-5">Locations where our listed machines are</h2>
          <div className="">
            {/* <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1pax2j_ixeoQVPrlEiL58wQBi9KyXDxo&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe> */}
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                options={options}
              ></GoogleMap>
            </LoadScript>
          </div>
        </section>
        <section className="my-3 my-md-5 py-5 px-lg-5">
          <Card className="border-0">
            <Card.Img src={hero2} alt="hero1" style={{ height: "345px" }} />

            <Card.ImgOverlay
              className="px-3 py-5 px-md-5"
              style={{ maxWidth: "40rem", color: "#ffffff" }}
            >
              <h1 style={{ color: "#ffffff" }}>
                An easy way to get your machines listed for producers
              </h1>
              <h5
                className="mt-3"
                style={{ color: "#ffffff", fontWeight: "400" }}
              >
                Do you have idle capacity for your processing equipment, put you
                machines to optimal use. List with Dehydrator Hub today!
              </h5>

              <Button
                className="my-3 px-3 btn-primary"
                style={{ borderRadius: "40px" }}
                onClick={() => navigate("/form/machinery")}
              >
                Get in touch
              </Button>
            </Card.ImgOverlay>
          </Card>
        </section>

        <section className="my-3 my-md-5 py-lg-4">
          <Card
            className="border-0 my-3"
            style={{ background: "#000000", borderRadius: "15px" }}
          >
            <Row className="px-3 py-5 px-md-5 align-items-center">
              <Col xs={12} md={7} className="mb-3">
                <h2 className="mb-3 text-white">We love your feedback</h2>
                <h5 className="text-white" style={{ fontWeight: "400" }}>
                  Dehydrator Hub is built on the back of excellent customer
                  service and delivery to our customers. In order to improve our
                  delivery to you, please share your feedback. We need to know
                  what works.{" "}
                </h5>
              </Col>
              <Col xs={12} md={5}>
                <Card className="d-flex flex-column gap-3 border-0 p-4">
                  <h5>Give us your feedback</h5>
                  <textarea rows={2} placeholder="Type more details"></textarea>
                  <div className="mb-5">
                    <Button className="btn-primary">Submit</Button>
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

export default Home;
