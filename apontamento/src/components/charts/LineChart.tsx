import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ProductivityMetric } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: ProductivityMetric[];
}

export function LineChart({ data }: LineChartProps) {
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
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Completed Tasks',
        data: data.map(item => item.completedTasks),
        borderColor: 'rgb(83, 215, 106)',
        backgroundColor: 'rgba(83, 215, 106, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Efficiency',
        data: data.map(item => item.efficiency * 100),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
      }
    ],
  };

  return (
    <div className="h-64">
      <Line options={options} data={chartData} />
    </div>
  );
}