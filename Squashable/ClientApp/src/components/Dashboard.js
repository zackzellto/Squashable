import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import "./BugForm.css";
import "../App.css";
import { BugForm } from "./BugForm";

export function Dashboard() {
  return (
    <Container id="#dashboard" className="dashboard-container">
      <div className="dashboard-background">
        {" "}
        <ul>
          <button></button>
        </ul>
      </div>
      <div className="dashboard-content-background">
        <div className="dashboard-content">
          <Row>
            <Col s={12} md={4}>
              <div className="dashboard-card"></div>
            </Col>
          </Row>
          <Row>
            <Col s={12} md={8}>
              <BugForm />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
