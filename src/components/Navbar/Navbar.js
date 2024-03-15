import React from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/images/dehydrator-logo.svg";

const GuestNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isFormRoute = location.pathname.startsWith("/form/");
  if (isFormRoute) {
    return (
      <div>
        <Navbar
          bg="white"
          className="px-2 px-md-5 py-2 d-flex justify-content-end align-items-center"
        >
          <div className="d-flex gap-3 gap-sm-5" style={{ fontSize: "10px" }}>
            <div className="align-items-center">
              <i className="bi bi-geo-alt-fill"></i> 38 CIPM Ave, Alausa, Ikeja
              101233, Lagos
            </div>
            <div className="align-items-center">
              <i className="bi bi-telephone-fill"></i> +2348085554485
            </div>
          </div>
        </Navbar>
        <Navbar
          style={{
            background:
              "linear-gradient(90.05deg, #81AC29 -5.66%, #567904 115.63%)",
            color: "#ffffff",
          }}
          className="px-3 px-md-5 guest-navbar"
        >
          <Navbar.Brand className="ms-0 ms-lg-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} />
            </Link>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
  return (
    <div>
      <Navbar
        bg="white"
        className="px-2 px-md-5 py-2 d-flex justify-content-end align-items-center"
      >
        <div className="d-flex gap-3 gap-sm-5" style={{ fontSize: "10px" }}>
          <div className="align-items-center">
            <i className="bi bi-geo-alt-fill"></i> 38 CIPM Ave, Alausa, Ikeja
            101233, Lagos
          </div>
          <div className="align-items-center">
            <i className="bi bi-telephone-fill"></i>{" "}
            <a
              href="tel:08085554485"
              className="text-dark text-decoration-none"
            >
              08085554485
            </a>
          </div>
        </div>
      </Navbar>
      <Navbar
        expand="lg"
        style={{
          background:
            "linear-gradient(90.05deg, #81AC29 -5.66%, #567904 115.63%)",
          color: "#ffffff",
        }}
        className="px-3 px-md-5 guest-navbar"
      >
        <Navbar.Brand className="ms-0 ms-lg-4">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto d-flex gap-3 gap-xl-5 gap-xxl-5 me-lg-4 me-0">
            <NavLink activeclassname="active" className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/about-us"
            >
              About us
            </NavLink>
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="https://sandbox-flw-web-v3.herokuapp.com/store/thepostharvestcentre"
              target="_blank"
            >
              Marketplace
            </NavLink>
            {/* <NavLink activeclassname="active" className="nav-link" to="/faq">
              FAQ
            </NavLink> */}
            {/* <NavLink activeclassname="active" className="nav-link" to="/blog">
              Blog
            </NavLink> */}
            <Button
              className="btn-secondary"
              onClick={() => navigate("/contact")}
            >
              Contact us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default GuestNavbar;
