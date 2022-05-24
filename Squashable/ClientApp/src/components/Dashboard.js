import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Dashboard.css";
import { BugForm } from "./BugForm";
import BugTable from "./BugTable";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import StatusIndicators from "./StatusIndicators";

export function Dashboard() {
  return (
    <Container id="#dashboard" className="dashboard-container">
      <div className="dashboard-background"></div>
      <div className="dashboard-content-background">
        <div className="dashboard-content">
          {" "}
          <Row>
            <div className="dashboard-card dashboard-card-bug-form shadow">
              <BugForm />
            </div>

            <div className="dashboard-card dashboard-card-bug-table shadow">
              <BugTable />
            </div>
          </Row>
          <Row className="card-row">
            <div className="container"></div>
            <div className="dashboard-card col dashboard-card-bar-graph shadow">
              <BarGraph />
            </div>{" "}
            <div className="dashboard-card col dashboard-card-pie-chart shadow">
              <PieChart />
            </div>
            <div className="dashboard-card col dashboard-card-status shadow">
              <StatusIndicators />
            </div>
          </Row>
        </div>
      </div>
    </Container>
  );
}
