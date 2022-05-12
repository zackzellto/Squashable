import React from "react";
import { Image, Button, Container } from "react-bootstrap";
import LoginButton from "../components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import DeviceMockups from "../media/device-mockups.png";
import "./Home.css";
import "../App.css";

export function Home() {
  return (
    <>
      <div fluid className="home-container">
        <div className="home-section">
          <div className="landing-page-heading">
            <h2>Welcome to</h2>
            <h1>Squashable.</h1>
            <h2>a fully functional bug tracking system.</h2>
            <h3>
              built for <u className="developer-word">Developers</u>, by{" "}
              <u className="developer-word">Developers</u>.
            </h3>
          </div>
          <img
            id="device-mockups"
            src={DeviceMockups}
            class="img-fluid fade-in-image"
            alt="device-mockups"
          ></img>

          {/* <div>
          <Image className="squashable-logo" src={SquashableLogo}></Image>
        </div> */}
        </div>
        <div className="about-section">
          <h1>About</h1>
        </div>
        <div className="contact-section">
          <h1>Contact</h1>
        </div>
      </div>
    </>
  );
}
