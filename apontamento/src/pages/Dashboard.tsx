import { useState, useEffect } from 'react';
import { Clock, CheckCircle, AlertCircle, BarChart3, TrendingUp } from 'lucide-react';
import { User, DashboardStats } from '../types';
import { LineChart } from '../components/charts/LineChart';
import { ProgressChart } from '../components/charts/ProgressChart';

interface DashboardProps {
  user: User;
}

export function Dashboard({ user }: DashboardProps) {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get dashboard stats
    setTimeout(() => {
      const mockStats: DashboardStats = {
        activitiesCompleted: 26,
        activitiesInProgress: 4,
        totalHoursWorked: 42.5,
        productivityScore: 87,
        weeklyProgress: [
          { date: 'Mon', completedTasks: 5, efficiency: 0.78, averageTaskDuration: 45 },
          { date: 'Tue', completedTasks: 6, efficiency: 0.82, averageTaskDuration: 42 },
          { date: 'Wed', completedTasks: 4, efficiency: 0.75, averageTaskDuration: 50 },
          { date: 'Thu', completedTasks: 7, efficiency: 0.88, averageTaskDuration: 38 },
          { date: 'Fri', completedTasks: 4, efficiency: 0.76, averageTaskDuration: 48 },
          { date: 'Sat', completedTasks: 0, efficiency: 0, averageTaskDuration: 0 },
          { date: 'Sun', completedTasks: 0, efficiency: 0, averageTaskDuration: 0 },
        ],
      };
      setStats(mockStats);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading dashboard data...</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-error">Error loading dashboard data</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-text-secondary">
          Welcome back, {user.name}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm">Completed Activities</p>
              <h3 className="text-2xl font-bold mt-1">{stats.activitiesCompleted}</h3>
            </div>
            <div className="p-2 bg-success bg-opacity-10 rounded-md">
              <CheckCircle size={20} className="text-success" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-success text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>+12% vs last week</span>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm">In Progress</p>
              <h3 className="text-2xl font-bold mt-1">{stats.activitiesInProgress}</h3>
            </div>
            <div className="p-2 bg-warning bg-opacity-10 rounded-md">
              <Clock size={20} className="text-warning" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-warning text-sm">
            <AlertCircle size={16} className="mr-1" />
            <span>2 approaching deadlines</span>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm">Hours Worked</p>
              <h3 className="text-2xl font-bold mt-1">{stats.totalHoursWorked}</h3>
            </div>
            <div className="p-2 bg-info bg-opacity-10 rounded-md">
              <Clock size={20} className="text-info" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-info text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>+4.5 hours vs last week</span>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm">Productivity Score</p>
              <h3 className="text-2xl font-bold mt-1">{stats.productivityScore}%</h3>
            </div>
            <div className="p-2 bg-accent bg-opacity-10 rounded-md">
              <BarChart3 size={20} className="text-accent" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-accent text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>+3% vs last week</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-medium mb-4">Weekly Activity Progress</h3>
          <LineChart data={stats.weeklyProgress} />
        </div>

        <div className="card">
          <h3 className="font-medium mb-4">Productivity Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <ProgressChart 
              value={stats.productivityScore} 
              label="Productivity" 
              color="#53D76A" 
            />
            <ProgressChart 
              value={78} 
              label="Task Completion" 
              color="#3B82F6" 
            />
            <ProgressChart 
              value={92} 
              label="Attendance" 
              color="#F97316" 
            />
            <ProgressChart 
              value={65} 
              label="Efficiency" 
              color="#8B5CF6" 
            />
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Recent Activities</h3>
          <button className="text-accent text-sm hover:underline">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-3 rounded-md hover:bg-primary transition-colors">
            <div className="w-10 h-10 rounded-full bg-info bg-opacity-10 flex items-center justify-center mr-4">
              <Clock size={20} className="text-info" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Assembly Line Maintenance</p>
              <p className="text-text-secondary text-sm">Today, 10:30 AM - 12:45 PM</p>
            </div>
            <div className="bg-success bg-opacity-10 text-success text-xs rounded-full px-2 py-1">
              Completed
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-md hover:bg-primary transition-colors">
            <div className="w-10 h-10 rounded-full bg-warning bg-opacity-10 flex items-center justify-center mr-4">
              <Clock size={20} className="text-warning" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Quality Inspection</p>
              <p className="text-text-secondary text-sm">Today, 1:15 PM - 3:30 PM</p>
            </div>
            <div className="bg-warning bg-opacity-10 text-warning text-xs rounded-full px-2 py-1">
              In Progress
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-md hover:bg-primary transition-colors">
            <div className="w-10 h-10 rounded-full bg-info bg-opacity-10 flex items-center justify-center mr-4">
              <Clock size={20} className="text-info" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Inventory Management</p>
              <p className="text-text-secondary text-sm">Yesterday, 2:00 PM - 4:15 PM</p>
            </div>
            <div className="bg-success bg-opacity-10 text-success text-xs rounded-full px-2 py-1">
              Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}