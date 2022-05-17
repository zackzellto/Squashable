import React from "react";
import "./BugTable.css";
import { Button } from "react-bootstrap";

function BugTable() {
  return (
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
        <tr>
          <td>1</td>
          <td>Bug 1</td>
          <td>01/01/2020</td>{" "}
          <td>
            <Button>
              <i class="fa fa-pencil"></i>
            </Button>
          </td>
          <td>
            <Button>
              <i class="fa fa-trash"></i>
            </Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bug 2</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bug 3</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Bug 4</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Bug 5</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Bug 6</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Bug 7</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Bug 8</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Bug 9</td>
          <td>02/01/2020</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Bug 10</td>
          <td>02/01/2020</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BugTable;
