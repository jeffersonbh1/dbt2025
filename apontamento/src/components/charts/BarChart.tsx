import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    name: string;
    tasks: number;
    hours: number;
  }[];
}

export function BarChart({ data }: BarChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(59, 70, 95, 0.2)',
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(255, 255, 255)',
        }
      },
      tooltip: {
        backgroundColor: 'rgb(32, 41, 69)',
        titleColor: 'rgb(255, 255, 255)',
        bodyColor: 'rgb(156, 163, 175)',
        borderColor: 'rgb(59, 70, 95)',
        borderWidth: 1,
        padding: 10,
      }
    },
  };

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Completed Tasks',
        data: data.map(item => item.tasks),
        backgroundColor: 'rgba(83, 215, 106, 0.7)',
        borderColor: 'rgb(83, 215, 106)',
        borderWidth: 1,
      },
      {
        label: 'Hours Worked',
        data: data.map(item => item.hours),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      }
    ],
  };

  return <Bar options={options} data={chartData} />;
}