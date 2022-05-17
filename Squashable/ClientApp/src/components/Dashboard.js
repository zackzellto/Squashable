import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import "./BugForm.css";
import { BugForm } from "./BugForm";
import BugTable from "./BugTable";
import PieChart from "./PieChart";

export function Dashboard() {
  return (
    <Container id="#dashboard" className="dashboard-container">
      <div className="dashboard-background"></div>
      <div className="dashboard-content-background">
        <div className="dashboard-content">
          <Row>
            <Col s={12} md={4}>
              <div className="dashboard-card">
                <PieChart />
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col s={12} md={8}>
              <BugForm />
            </Col>
          </Row> */}
          <Col>
            <BugTable />
          </Col>
        </div>
      </div>
    </Container>
  );
}
