import React from "react";
import { Image, Button, Container } from "react-bootstrap";
import DeviceMockups from "../media/device-mockups.png";
import "./Home.css";
import "../App.css";

export function Home() {
  return (
    <div fluid className="home-container">
      <div className="landing-page-heading">
        <h2>Welcome to</h2>
        <h1>Squashable.</h1>
        <h2>a fully functional bug tracking system.</h2>
        <h3>
          built for <u className="developer-word">Developers</u>, by{" "}
          <u className="developer-word">Developers</u>.
        </h3>
      </div>
      <Container className="mockup-container">
        <Image fluid className="device-mockups" src={DeviceMockups}></Image>

        {/* <div>
          <Image className="squashable-logo" src={SquashableLogo}></Image>
        </div> */}
      </Container>
      <Button variant="primary" href="/bug-form">
        Login
      </Button>
      <Button className="" variant="secondary" href="/login">
        Register
      </Button>
    </div>
  );
}
