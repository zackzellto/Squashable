import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./login-button";
// import LogoutButton from "./logout-button";

const NavMenu = () => {
  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand tag={Link} to="/">
          Squashable
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link variant="light" tag={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link tag={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link tag={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
