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
      <div className="row bug-status-information">
        <div className="col-md-4">
          <div className="status-card col">
            <div className="bug-status-title col">Bug Status Information</div>
            <div className="newbug-value col">
              {" "}
              <div className="status-text">New</div> {bugData.newBugs}
            </div>

            <div className="inprogress-value col">
              <div className="status-text">In Progress</div>
              {bugData.inProgressBugs}
            </div>
            <div className="squashed-value col">
              <div className="status-text">Squashed</div>
              {bugData.squashedBugs}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusIndicators;
