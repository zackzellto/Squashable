import React from "react";
import "./BugTable.css";

function BugTable() {
  return (
    <table className="table table-hover bug-table">
      <thead>
        <tr>
          <th>Bug ID</th>
          <th>Title</th>
          <th>Reported By</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bug 1</td>
          <td>John Doe</td>
          <td>01/01/2020</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bug 2</td>
          <td>Jane Doe</td>
          <td>02/01/2020</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BugTable;
