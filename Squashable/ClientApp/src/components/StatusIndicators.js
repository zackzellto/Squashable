import axios from "axios";
import React, { useState, useEffect } from "react";
import "./StatusIndicators.css";

const API_URL = "https://localhost:7091/api/BugInfo";

function StatusIndicators() {
  const [bugData, setBugData] = useState({});

  useEffect(() => {
    const newStatus = "New";
    const inProgressStatus = "In Progress";
    const squashedStatus = "Squashed";

    axios
      .get(API_URL)
      .then((res) => {
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
    <div className="status-card-container">
      <div className="status-card">
        New <br /> <div className="newbug-value">{bugData.newBugs}</div>
      </div>
      <div className="status-card">
        In Progress <br />{" "}
        <div className="inprogress-value">{bugData.inProgressBugs}</div>
      </div>

      <div className="status-card">
        Squashed <br />{" "}
        <div className="squashed-value">{bugData.squashedBugs}</div>
      </div>
    </div>
  );
}

export default StatusIndicators;
