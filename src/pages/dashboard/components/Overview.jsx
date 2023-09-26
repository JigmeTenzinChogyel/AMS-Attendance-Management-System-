import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import { overview } from "../../../Data/overview";

ChartJS.register(
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  Legend,
  Tooltip
);

function Overview() {

  const data = {
    labels: overview.map((data) => data.year),
    datasets: [
      {
        label: "Assembly",
        data: overview.map((data) => data.event === "Assembly" && data.present),
        fill: true, // Fill the area under the line
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
        pointRadius: 6, // Point size
        pointHoverRadius: 8, // Point size on hover
      },
      {
        label: "SUPW",
        data: overview.map((data) => data.event === "SUPW" && data.present),
        fill: true, // Fill the area under the line
        borderColor: "rgba(0, 205, 0, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
        pointRadius: 6, // Point size
        pointHoverRadius: 8, // Point size on hover
      },
      {
        label: "Others",
        data: overview.map((data) => data.event === "Others" && data.present),
        fill: true, // Fill the area under the line
        borderColor: "rgba(173, 0, 0, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
        pointRadius: 6, // Point size
        pointHoverRadius: 8, // Point size on hover
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
    <div className="rounded-xl flex flex-col justify-between items-center w-full h-full bg-white px-5 pt-3 pb-1">
      <h1 className="text-xl font-bold">Attendance Overview</h1>
      <div className="mt-5 h-10/12 w-10/12 flex justify-center items-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Overview;
