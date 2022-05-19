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

  const deleteBugData = (id, e) => {
    axios
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
    <>
      <table className="table bug-table">
        <thead>
          <input
            className="bug-search-bar"
            type="text"
            placeholder="Search Bug"
            onChange={(e) => {
              setSearchBug(e.target.value);
            }}
          ></input>
          <tr>
            <th>Bug ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Delete</th>
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
                  <td>{bug.id}</td>
                  <td>{bug.title}</td>
                  <td>{bug.priority}</td>
                  <td>{bug.status}</td>
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
      </table>
    </>
  );
}

export default BugTable;
