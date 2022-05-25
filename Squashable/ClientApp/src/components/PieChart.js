import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { Container } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title);

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
      text: "Priority of Bugs",
      fontSize: 16,
      scaleFontColor: "#ffffff",
      position: "bottom",
    },
  },
  maintainAspectRatio: true,

  responsive: true,
};

const API_URL = "/api/BugInfo";

const PieChart = () => {
  const [data, setData] = useState({
    type: "pie",
    labels: ["Low", "Medium", "High"],

    datasets: [
      {
        label: "Priority of Bugs",
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
      const priorityDataset = [];

      await fetch(API_URL)
        .then((data) => {
          console.log("API DATA:", data);
          const response = data.json();
          return response;
        })
        .then((response) => {
          console.log("RESPONSE:", response);
          for (const value of response) {
            priorityDataset.push(value.severity);
          }
          setData({
            type: "pie",
            labels: ["Low", "Medium", "High"],
            datasets: [
              {
                label: "Priority of Bugs",
                data: [
                  priorityDataset.filter((item) => item === "Low").length,
                  priorityDataset.filter((item) => item === "Medium").length,
                  priorityDataset.filter((item) => item === "High").length,
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
          console.log("PRIORITY DATASET:", priorityDataset);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Pie className="pie-chart" id="myChart" data={data} options={options} />
    </Container>
  );
};

export default PieChart;
