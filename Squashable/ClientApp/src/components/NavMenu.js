import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Profile from "../components/Profile";
import LogoutButton from "../components/Logout";
import { Link } from "react-router-dom";
import "./NavMenu.css";

// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./login-button";
// import LogoutButton from "./logout-button";

const NavMenu = () => {
  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand variant="light" tag={Link} to="/">
          Squashable
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Profile />
            <LogoutButton />
            <Nav.Link
              className="nav-about-btn"
              variant="light"
              tag={Link}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link className="nav-dashboard-btn" tag={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link className="nav-contact-btn" tag={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
