import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

export function PieChartComponent({ data }: PieChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'rgb(255, 255, 255)',
          padding: 20,
          font: {
            size: 12,
          }
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

  const colors = [
    'rgba(83, 215, 106, 0.7)',
    'rgba(59, 130, 246, 0.7)',
    'rgba(249, 115, 22, 0.7)',
    'rgba(139, 92, 246, 0.7)',
    'rgba(239, 68, 68, 0.7)',
  ];

  const borderColors = [
    'rgb(83, 215, 106)',
    'rgb(59, 130, 246)',
    'rgb(249, 115, 22)',
    'rgb(139, 92, 246)',
    'rgb(239, 68, 68)',
  ];

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={chartData} />;
}