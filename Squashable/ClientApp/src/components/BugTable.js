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

  return (
    <>
      <input
        type="text"
        placeholder="Search Bug"
        onChange={(e) => {
          setSearchBug(e.target.value);
        }}
      ></input>
      <table className="table table-hover bug-table">
        <thead>
          <tr>
            <th>Bug ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bugData
            .filter((bug) => {
              if (searchBug == "") {
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
                  <td>{bug.createdDate}</td>
                  <td>
                    <Button className="fa fa-pencil update-bg"></Button>
                  </td>
                  <td>
                    <Button className="fa fa-trash delete-bg"></Button>
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
