import { useState } from 'react';
import { Task as TaskType, User } from '../types';

interface TasksProps {
  user: User;
}

export function Tasks({ user }: TasksProps) {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 'task-1',
      title: 'Equipment maintenance on production line A',
      description: 'Perform regular maintenance on production line A equipment including calibration and safety checks.',
      departmentId: 'dept-1',
      priority: 'high',
      status: 'in-progress',
      assignedTo: [user.id],
      progress: 70
    },
    {
      id: 'task-2',
      title: 'Quality inspection of new batch',
      description: 'Perform quality checks on the latest production batch according to quality control procedures.',
      departmentId: 'dept-1',
      priority: 'medium',
      status: 'pending',
      assignedTo: [user.id],
      progress: 0
    },
    {
      id: 'task-3',
      title: 'Inventory stock count',
      description: 'Conduct a complete inventory count of raw materials in warehouse section B.',
      departmentId: 'dept-2',
      priority: 'low',
      status: 'completed',
      assignedTo: [user.id],
      progress: 100
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const updateTaskStatus = (taskId: string, status: TaskType['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            status, 
            progress: status === 'completed' ? 100 : status === 'in-progress' ? 50 : 0 
          } 
        : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button className="btn-primary">
          Create Task
        </button>
      </div>

      <div className="flex space-x-2 overflow-x-auto">
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-accent text-primary' : 'bg-secondary'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'pending' ? 'bg-accent text-primary' : 'bg-secondary'}`}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'in-progress' ? 'bg-accent text-primary' : 'bg-secondary'}`}
          onClick={() => setFilter('in-progress')}
        >
          In Progress
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'completed' ? 'bg-accent text-primary' : 'bg-secondary'}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="space-y-4">
        {filteredTasks.map(task => (
          <div 
            key={task.id} 
            className={`card border-l-4 ${
              task.priority === 'high' ? 'border-l-error' : 
              task.priority === 'medium' ? 'border-l-warning' : 'border-l-info'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="font-medium">{task.title}</h3>
                  <span 
                    className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      task.priority === 'high' ? 'bg-error bg-opacity-10 text-error' : 
                      task.priority === 'medium' ? 'bg-warning bg-opacity-10 text-warning' : 
                      'bg-info bg-opacity-10 text-info'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
                <p className="text-text-secondary mt-1">{task.description}</p>
                
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-text-secondary">Progress</span>
                    <span className="text-sm">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-primary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        task.status === 'completed' ? 'bg-success' : 
                        task.status === 'in-progress' ? 'bg-warning' : 'bg-error'
                      }`}
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                {task.status !== 'in-progress' && (
                  <button 
                    className="btn-secondary whitespace-nowrap"
                    onClick={() => updateTaskStatus(task.id, 'in-progress')}
                  >
                    Start Task
                  </button>
                )}
                {task.status === 'in-progress' && (
                  <button 
                    className="btn-primary whitespace-nowrap"
                    onClick={() => updateTaskStatus(task.id, 'completed')}
                  >
                    Complete
                  </button>
                )}
                {task.status === 'completed' && (
                  <button 
                    className="btn-secondary whitespace-nowrap"
                    onClick={() => updateTaskStatus(task.id, 'pending')}
                  >
                    Reopen
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredTasks.length === 0 && (
          <div className="text-center py-12 text-text-secondary">
            No tasks found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}