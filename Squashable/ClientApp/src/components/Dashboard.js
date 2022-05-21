import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import "./BugForm.css";
import { BugForm } from "./BugForm";
import BugTable from "./BugTable";
import PieChart from "./PieChart";
import StatusIndicators from "./StatusIndicators";

export function Dashboard() {
  return (
    <Container id="#dashboard" className="dashboard-container">
      <div className="dashboard-background"></div>
      <div className="dashboard-content-background">
        <div className="dashboard-content">
          <Row>
            <div className="dashboard-card">
              <PieChart />
            </div>

            <StatusIndicators />
          </Row>
          <Row>
            <Col s={12} md={12}>
              <BugForm />
            </Col>

            <Col>
              <BugTable />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
