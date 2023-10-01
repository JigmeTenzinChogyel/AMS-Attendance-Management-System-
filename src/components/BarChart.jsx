import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from "chart.js";
import { overview } from "../Data/overview";

ChartJS.register(
    BarElement,
    CategoryScale, // x-axis
    LinearScale, // y-axis
    Legend,
    Tooltip
);

function BarChart() {

  const data = {
    labels: overview.map((data) => data.year),
    datasets: [
      {
        label: "Assembly",
        data: overview.map((data) => data.event === "Assembly" && data.present),
        fill: true, // Fill the area under the line
        backgroundColor: "red",
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backWidth: "1", // Fill color under the line
      },
      {
        label: "SUPW",
        data: overview.map((data) => data.event === "SUPW" && data.present),
        fill: true, // Fill the area under the line
        backgroundColor: "green",
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backWidth: "1", // Fill color under the line
      },
      {
        label: "Others",
        data: overview.map((data) => data.event === "Others" && data.present),
        fill: true, // Fill the area under the line
        backgroundColor: "yellow",
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backWidth: "1", // Fill color under the line
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top", // Adjust the legend position
      },
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Present",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
        <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
