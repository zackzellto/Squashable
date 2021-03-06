import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./BarGraph.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title);

let options = {
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        // eslint-disable-next-line array-callback-return
        dataArr.map((data) => {
          sum += data;
        });
        let percentage = ((value * 100) / sum).toFixed(2) + "%";
        return percentage;
      },
    },
    title: {
      display: true,
      text: "Severity of Bugs",
      fontSize: 14,
      fontColor: "#fff",
      position: "top",
    },
  },
  maintainAspectRatio: true,

  responsive: true,
};

const API_URL = "/api/BugInfo";

const BarGraph = () => {
  const [data, setData] = useState({
    type: "bar",
    labels: ["Low", "Medium", "High"],

    datasets: [
      {
        label: "Severity of Bugs",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 6,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const severityDataset = [];

      await fetch(API_URL)
        .then((data) => {
          console.log("API DATA:", data);
          const response = data.json();
          return response;
        })
        .then((response) => {
          console.log("RESPONSE:", response);
          for (const value of response) {
            severityDataset.push(value.severity);
          }
          setData({
            type: "bar",
            labels: ["Low", "Medium", "High"],
            datasets: [
              {
                label: "Severity of Bugs",
                data: [
                  severityDataset.filter((item) => item === "Low").length,
                  severityDataset.filter((item) => item === "Medium").length,
                  severityDataset.filter((item) => item === "High").length,
                ],
                backgroundColor: [
                  "rgba(17, 216, 10, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: [
                  "rgba(17, 216, 10, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
              },
            ],
          });
          console.log("SEVERITY DATASET:", severityDataset);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Bar
        className="bar-graph"
        id="myChart"
        height={200}
        data={data}
        options={options}
      />
    </Container>
  );
};

export default BarGraph;
