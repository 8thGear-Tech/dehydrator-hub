import React from "react";
import {
  millableProducts,
  hydrationProducts,
  dehydrationMachine,
  processingRates,
  oilExtraction,
} from "../data";
import hero1 from "../assets/images/home-hero-section.png";
import hero2 from "../assets/images/home-hero-section-2.png";

import GuestNavbar from "../components/Navbar/Navbar";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import SidebarNavbar from "../components/Navbar/SideNavbar";
import { ServicesNavbar } from "../components/Navbar/SideNavbar";
import { useNavigate } from "react-router-dom";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const carouselHero = [
  {
    id: 1,
    text: "Food Processing",
    title: "Prepping, Milling, Dehydration, Oil Extraction, Packaging",
    image: hero1,
  },

  { id: 2, text: "Processing", title: "Equipment Repairs", image: hero1 },
  {
    id: 3,
    text: "Processing",
    title: "Trainings & Certifications",
    image: hero1,
  },
  {
    id: 4,
    text: "Marketplace",
    title: "Food Equipment & Processed Products",
    image: hero1,
  },
];

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

      <section className="my-3 my-md-5">
        <Carousel data-bs-theme="dark" className="home-section">
          {carouselHero.map((item) => (
            <Carousel.Item key={item.id}>
              <Card className="border-0 mb-5">
                <Card.Img
                  src={hero1}
                  alt="hero1"
                  style={{ minHeight: "300px", maxHeight: "380px" }}
                />

                <Card.ImgOverlay className="px-3 py-5 px-md-5 mx-3 mx-md-5 my-5">
                  <div className="my-lg-5">
                    <h3>{item.text}</h3>
                    <h1>{item.title}</h1>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <div className="px-3 px-md-5 mx-lg-4">
        <section className="my-3 my-md-5">
          <h2 className="mb-4">Locations where our listed machines are</h2>
          <div className="">
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                options={options}
              >
                {/* Child components, like markers, info windows, etc. */}
              </GoogleMap>
            </LoadScript>
          </div>
        </section>
        <section className="my-3 my-md-5 py-5">
          <Card className="border-0">
            <Card.Img src={hero2} alt="hero1" style={{ height: "345px" }} />

            <Card.ImgOverlay
              className="px-3 py-5 px-md-5"
              style={{ maxWidth: "37rem", color: "#ffffff" }}
            >
              <h1 style={{ color: "#ffffff" }}>
                An easy way to get your machines listed for producers
              </h1>
              <h5
                className="mt-3 me-5"
                style={{ color: "#ffffff", fontWeight: "400" }}
              >
                Do you have idle capacity for your processing equipment, put you
                machines to optimal use.
                <br /> List with Dehydrator Hub today!
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
