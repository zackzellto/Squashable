import React, { useState, useEffect } from "react";
import "./BugTable.css";
import { Button, Container } from "react-bootstrap";
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
    window && window.confirm("Are you sure you want to delete this bug?");
    window.location.reload();
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
    <Container className="container bug-table-container">
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
        </div>
      </table>
    </Container>
  );
}

export default BugTable;
