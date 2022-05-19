import axios from "axios";
import React, { useState, useEffect } from "react";
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
      <div className="row">
        <div className="status-card col">
          New <br /> <div className="newbug-value col">{bugData.newBugs}</div>
        </div>
        <div className="status-card col">
          In Progress <br />{" "}
          <div className="inprogress-value col">{bugData.inProgressBugs}</div>
        </div>

        <div className="status-card col">
          Squashed <br />{" "}
          <div className="squashed-value col">{bugData.squashedBugs}</div>
        </div>
      </div>
    </div>
  );
}

export default StatusIndicators;
