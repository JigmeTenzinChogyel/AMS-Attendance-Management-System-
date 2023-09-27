import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(
    ArcElement,
    Legend,
    Tooltip
);

function PieChart() {

  const data = {
    labels: ['Assembly', 'SUPW', 'Others'],
    datasets: [
      {
        data: [120, 100, 200],
        fill: true, // Fill the area under the line
        backgroundColor: ['red', 'yellow', 'green'],
      },
    ],
  };

  const options = {};

  return (
    <div>
        <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
