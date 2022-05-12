import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DeviceMockups from "../media/device-mockups.png";
import "./Home.css";
import "../App.css";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  const renderHomepage = () => {
    if (isAuthenticated) {
      return (
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
              <button className="dashboard-button" to="/dashboard">
                Dashboard
              </button>
            </div>
            <img
              id="device-mockups"
              src={DeviceMockups}
              class="img-fluid fade-in-image"
              alt="device-mockups"
            ></img>
          </div>
          <div className="about-section">
            <h1>About</h1>
          </div>
          <div className="contact-section">
            <h1>Contact</h1>
          </div>
        </div>
      );
    } else {
      return (
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
          </div>
          <div className="about-section">
            <h1>About</h1>
          </div>
          <div className="contact-section">
            <h1>Contact</h1>
          </div>
        </div>
      );
    }
  };
  return <>{renderHomepage()}</>;
};
