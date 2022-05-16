import { PieChart } from "react-minimal-pie-chart";
import "./PieChart.css";
import React from "react";
const defaultLabelStyle = {
  fontSize: "14px",
  fontFamily: "sans-serif",
  fill: "#fff",
};

export default function PieChartGraph() {
  return (
    <>
      <PieChart
        className="pie-chart-bg"
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
        labelStyle={defaultLabelStyle}
        data={[
          { title: "Low", value: 10, color: "rgba(199, 73, 245, 0.737)" },
          { title: "Medium", value: 15, color: "rgb(139, 10, 186)" },
          { title: "High", value: 20, color: "rgb(89, 0, 121)" },
        ]}
      />
      <div className="pie-chart-description">
        <table>
          <thead>
            <tr>
              <th>Bug Severity Chart</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                High = <div className="severity-color-high"></div>
              </td>
            </tr>
            <tr>
              <td>
                Medium = <div className="severity-color-medium"></div>
              </td>
            </tr>
            <tr>
              <td>
                Low = <div className="severity-color-low"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
