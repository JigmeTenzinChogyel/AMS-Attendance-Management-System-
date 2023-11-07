import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale, // x-axis
    LinearScale, // y-axis
    Legend,
    Tooltip
);

function Comparision() {
    const myData = [
        {
            thisWeek: {
                totalEvents: 3,
                expectedStudents: 120,
                totalPresents: 90,
                totalAbsents: 25,
                totalLeaves: 5,
            },
            pastWeek: {
                totalEvents: 4,
                expectedStudents: 110,
                totalPresents: 80,
                totalAbsents: 28,
                totalLeaves: 2,
            },
        },
    ];

    // Extract data from myData
    const thisWeekData = Object.values(myData[0].thisWeek);
    const pastWeekData = Object.values(myData[0].pastWeek);

    const data = {
        labels: ["Total Events", "Expected Students", "Total Presents", "Total Absents", "Total Leaves"],
        datasets: [
            {
                label: "This Week",
                data: thisWeekData,
                backgroundColor: "rgba(75, 192, 192, 0.5)", // Color for "This Week" bars
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Past Week",
                data: pastWeekData,
                backgroundColor: "rgba(255, 99, 132, 0.5)", // Color for "Past Week" bars
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="p-3 flex flex-col gap-3">
            <h2 className="text-lg font-semibold">2. Comparison to Past Week</h2>
            <div style={{ height: "400px" }} className="w-full flex justify-center">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default Comparision;
