import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // <-- This is the important part;

export const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Visit",
        backgroundColor: "#cdeabc",
        data: [65, 59, 80, 81, 56, 55, 40, 57, 32, 50, 80, 50],
      },
      {
        label: "Course sales",
        backgroundColor: "#f0bc8d",
        data: [35, 39, 60, 61, 36, 35, 20, 37, 12, 30, 60, 30],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    // plugins: {
    //   legend: {
    //     display: false,
    //   },
    // },
  };
  return (
    <div>
      <Bar height={200} data={data} options={options} />
    </div>
  );
};
