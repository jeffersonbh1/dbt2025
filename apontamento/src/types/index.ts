export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  department: string;
  avatar?: string;
}

export interface Activity {
  id: string;
  userId: string;
  taskId: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  description: string;
  status: 'in-progress' | 'completed' | 'paused';
  category: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  departmentId: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  deadline?: Date;
  assignedTo: string[];
  progress: number;
}

export interface Department {
  id: string;
  name: string;
  managerId: string;
  employeeCount: number;
}

export interface ProductivityMetric {
  date: string;
  completedTasks: number;
  efficiency: number;
  averageTaskDuration: number;
}

export interface DashboardStats {
  activitiesCompleted: number;
  activitiesInProgress: number;
  totalHoursWorked: number;
  productivityScore: number;
  weeklyProgress: ProductivityMetric[];
}