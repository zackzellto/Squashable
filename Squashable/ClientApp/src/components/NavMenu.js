import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import LogoutButton from "./Logout";
import LoginButton from "./Login";
import Profile from "./Profile";
import SquashableLogo from "../media/squashable-logo.png";

const NavMenu = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Navbar sticky="top" className="navbar" expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand variant="light" href="#home">
            <img
              className="img-fluid squashable-logo"
              src={SquashableLogo}
              alt="squashable logo
            "
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Profile />

              <button className="dashboard-button" tag={Link} to="#dashboard">
                Dashboard
              </button>
              <LogoutButton />
              <Nav.Link className="nav-about-btn" variant="light" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-contact-btn" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar sticky="top" className="navbar" expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand variant="light" href="#home">
            Squashable
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <LoginButton />
              <Nav.Link className="nav-about-btn" variant="light" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-contact-btn" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default NavMenu;
