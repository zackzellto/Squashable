import React, { useState, useEffect } from "react";
import "./BugTable.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const API_URL = "https://localhost:7091/api/BugInfo";

function BugTable() {
  const [bugData, setBugData] = useState([]);
  const [searchBug, setSearchBug] = useState("");

  const getBugData = async () => {
    try {
      const data = await axios.get(API_URL, {});
      console.log(data.data);
      setBugData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBugData();
  }, []);

  const deleteBugData = async (id, e) => {
    window && window.confirm("Are you sure you want to delete this bug?");
    window.location.reload();
    await axios
      .delete(`${API_URL}/${id}`)
      .then((res) => {
        const del = bugData.filter((bug) => id !== bug.id);
        setBugData(del);
        console.log("DELETE RESPONSE:", res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("DELETE ERROR:", err);
      });
  };
  return (
    <table className="table-striped table-hover bug-table">
      <input
        className="bug-search-bar"
        type="text"
        placeholder="Search Bug"
        onChange={(e) => {
          setSearchBug(e.target.value);
        }}
      ></input>

      <div className="scrollit">
        <thead>
          <tr>
            <th scope="col">Bug ID</th>
            <th scope="col">Title</th>
            <th scope="col">Priority</th>
            <th scope="col">Severity</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bugData
            .filter((bug) => {
              if (searchBug === "") {
                return bug;
              } else if (
                bug.title.toLowerCase().includes(searchBug.toLowerCase())
              ) {
                return bug;
              }
            })
            .map((bug) => {
              return (
                <tr>
                  <td className="bug-table-id">{bug.id}</td>
                  <td className="bug-table-title">{bug.title}</td>
                  <td className="bug-table-priority">{bug.priority}</td>
                  <td className="bug-table-severity">{bug.severity}</td>
                  <td className="bug-table-status">{bug.status}</td>
                  <td>
                    <Button
                      onClick={(e) => deleteBugData(bug.id, e)}
                      className="fa fa-trash delete-bg"
                    ></Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </div>
    </table>
  );
}

export default BugTable;
