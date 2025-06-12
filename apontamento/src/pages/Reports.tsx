import { useState } from 'react';
import { 
  BarChart as BarChartIcon, 
  PieChart, 
  LineChart as LineChartIcon, 
  Calendar,
  Download,
  Filter
} from 'lucide-react';
import { User } from '../types';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { PieChartComponent } from '../components/charts/PieChart';

interface ReportsProps {
  user: User;
}

export function Reports({ user }: ReportsProps) {
  const [dateRange, setDateRange] = useState('week');
  const [category, setCategory] = useState('all');

  const weeklyData = [
    { date: 'Mon', completedTasks: 5, efficiency: 0.78, averageTaskDuration: 45 },
    { date: 'Tue', completedTasks: 6, efficiency: 0.82, averageTaskDuration: 42 },
    { date: 'Wed', completedTasks: 4, efficiency: 0.75, averageTaskDuration: 50 },
    { date: 'Thu', completedTasks: 7, efficiency: 0.88, averageTaskDuration: 38 },
    { date: 'Fri', completedTasks: 4, efficiency: 0.76, averageTaskDuration: 48 },
    { date: 'Sat', completedTasks: 0, efficiency: 0, averageTaskDuration: 0 },
    { date: 'Sun', completedTasks: 0, efficiency: 0, averageTaskDuration: 0 },
  ];

  const monthlyData = [
    { date: 'Week 1', completedTasks: 28, efficiency: 0.80, averageTaskDuration: 45 },
    { date: 'Week 2', completedTasks: 32, efficiency: 0.78, averageTaskDuration: 48 },
    { date: 'Week 3', completedTasks: 24, efficiency: 0.75, averageTaskDuration: 52 },
    { date: 'Week 4', completedTasks: 30, efficiency: 0.82, averageTaskDuration: 43 },
  ];

  const categoryData = [
    { name: 'Maintenance', value: 30 },
    { name: 'Assembly', value: 25 },
    { name: 'Quality Control', value: 20 },
    { name: 'Logistics', value: 15 },
    { name: 'Packaging', value: 10 },
  ];

  const performanceData = [
    { name: 'John', tasks: 32, hours: 38 },
    { name: 'Lisa', tasks: 28, hours: 42 },
    { name: 'Mike', tasks: 24, hours: 36 },
    { name: 'Sarah', tasks: 30, hours: 40 },
    { name: 'David', tasks: 26, hours: 37 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Productivity Reports</h1>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <Download size={18} className="mr-1" />
            Export
          </button>
          <button className="btn-secondary">
            <Filter size={18} className="mr-1" />
            Filter
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-wrap gap-4">
          <div>
            <label htmlFor="dateRange" className="block text-sm font-medium mb-1">
              Date Range
            </label>
            <select
              id="dateRange"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="input"
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              <option value="all">All Categories</option>
              <option value="maintenance">Maintenance</option>
              <option value="assembly">Assembly</option>
              <option value="quality">Quality Control</option>
              <option value="logistics">Logistics</option>
              <option value="packaging">Packaging</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary h-[42px]">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Productivity Trends */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium flex items-center">
            <LineChartIcon size={20} className="mr-2 text-accent" />
            Productivity Trends
          </h3>
          <div className="flex items-center space-x-2">
            <button className={`px-3 py-1 rounded-md text-sm ${dateRange === 'week' ? 'bg-accent text-primary' : 'bg-primary'}`}
                    onClick={() => setDateRange('week')}>
              Week
            </button>
            <button className={`px-3 py-1 rounded-md text-sm ${dateRange === 'month' ? 'bg-accent text-primary' : 'bg-primary'}`}
                    onClick={() => setDateRange('month')}>
              Month
            </button>
          </div>
        </div>
        <LineChart data={dateRange === 'week' ? weeklyData : monthlyData} />
      </div>

      {/* Category Distribution & Employee Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-medium flex items-center mb-4">
            <PieChart size={20} className="mr-2 text-accent" />
            Activity Categories Distribution
          </h3>
          <div className="h-80">
            <PieChartComponent data={categoryData} />
          </div>
        </div>
        
        <div className="card">
          <h3 className="font-medium flex items-center mb-4">
            <BarChartIcon size={20} className="mr-2 text-accent" />
            Employee Performance
          </h3>
          <div className="h-80">
            <BarChart data={performanceData} />
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="card">
        <h3 className="font-medium mb-4">Key Productivity Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="pb-3 pr-4">Metric</th>
                <th className="pb-3 px-4">Current</th>
                <th className="pb-3 px-4">Previous</th>
                <th className="pb-3 px-4">Change</th>
                <th className="pb-3 pl-4">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium">Activities Completed</td>
                <td className="py-3 px-4">42</td>
                <td className="py-3 px-4">36</td>
                <td className="py-3 px-4 text-success">+16.7%</td>
                <td className="py-3 pl-4">↗️</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium">Average Activity Duration</td>
                <td className="py-3 px-4">45 min</td>
                <td className="py-3 px-4">52 min</td>
                <td className="py-3 px-4 text-success">-13.5%</td>
                <td className="py-3 pl-4">↗️</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium">Efficiency Score</td>
                <td className="py-3 px-4">87%</td>
                <td className="py-3 px-4">82%</td>
                <td className="py-3 px-4 text-success">+6.1%</td>
                <td className="py-3 pl-4">↗️</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium">Total Hours Worked</td>
                <td className="py-3 px-4">142.5</td>
                <td className="py-3 px-4">138.0</td>
                <td className="py-3 px-4 text-success">+3.3%</td>
                <td className="py-3 pl-4">↗️</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Idle Time</td>
                <td className="py-3 px-4">12.8%</td>
                <td className="py-3 px-4">15.3%</td>
                <td className="py-3 px-4 text-success">-16.3%</td>
                <td className="py-3 pl-4">↗️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}