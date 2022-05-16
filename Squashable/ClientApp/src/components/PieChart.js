import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title);

let options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  legend: {
    labels: {
      fontSize: 26,
    },
  },
};

const API_URL = "https://localhost:7091/api/BugInfo";

const PieChart = () => {
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "Severity of Bugs",
                data: severityDataset,
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
    <div>
      <Pie data={data} height={400} options={options} />
    </div>
  );
};

export default PieChart;
