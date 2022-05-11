import React from "react";
import { Image, Button } from "react-bootstrap";
import SquashableLogo from "../media/squashable-logo.png";
import DeviceMockup from "../media/device-mockups.png";
import "./Home.css";
import "../App.css";

export function Home() {
  return (
    <div className="home-container">
      <div className="landing-page-heading">
        <h2>Welcome to</h2>
        <h1>Squashable.</h1>
        <h2>a fully functional bug tracking system.</h2>
        <h3>
          built for <u className="developer-word">Developers</u>, by{" "}
          <u className="developer-word">Developers</u>.
        </h3>
      </div>
      <div className="fade-in-image">
        <Image className="device-mockups" src={DeviceMockup}></Image>
      </div>
      <div>
        <Image className="squashable-logo" src={SquashableLogo}></Image>
      </div>
      <Button variant="primary" href="/bug-form" />
      <Button variant="secondary" href="/login" />
    </div>
  );
}
