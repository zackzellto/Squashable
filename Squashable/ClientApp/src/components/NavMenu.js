import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import SquashableLogo from "../media/squashable-logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

function AuthNav() {

  const { isAuthenticated } = useAuth0();

  return (
    <Navbar className="navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Navbar>
  );
}
  

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          id="navbar"
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <div>
              <Image
                className="squashable-logo-nav"
                src={SquashableLogo}
              ></Image>
            </div>
            <NavbarBrand id="navbar-brand" tag={Link} to="/">
              Squashable
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              id="hamburger-menu"
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul id="navbar-links" className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/bug-form">
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/pricing">
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/contact">
                    Contact Us
                  </NavLink>
                </NavItem>
                
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
