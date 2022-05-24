import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "./StatusIndicators.css";

const API_URL = "https://localhost:7091/api/BugInfo";

function StatusIndicators() {
  const [bugData, setBugData] = useState({});

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const newStatus = "New Bug";
        const inProgressStatus = "In Progress";
        const squashedStatus = "Squashed!";

        const data = res.data;
        const newBugs = data.filter((bug) => bug.status === newStatus);
        const inProgressBugs = data.filter(
          (bug) => bug.status === inProgressStatus
        );
        const squashedBugs = data.filter(
          (bug) => bug.status === squashedStatus
        );
        setBugData({
          newBugs: newBugs.length,
          inProgressBugs: inProgressBugs.length,
          squashedBugs: squashedBugs.length,
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row bug-status-information">
        <div className="status-card">
          <div className="bug-status-title">Bug Status Information</div>
          <Row>
            <div className="status-text status-new ">New</div>
            <div className="newbug-value"> {bugData.newBugs}</div>

            <div className="status-text status-inprogress">In Progress</div>
            <div className="inprogress-value">{bugData.inProgressBugs}</div>

            <div className="status-text status-squashed">Squashed</div>
            <div className="squashed-value">{bugData.squashedBugs}</div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default StatusIndicators;
