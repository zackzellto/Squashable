import React from "react";
import { Container } from "react-bootstrap";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <Container id="#dashboard" className="dashboard-container">
      <div className="dashboard-background">
        {" "}
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="dashboard-content-background">
        <div className="dashboard-sidebar"></div>
      </div>
    </Container>
  );
}
