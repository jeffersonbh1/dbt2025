import { useState } from 'react';
import { 
  PlayCircle, 
  StopCircle, 
  Plus, 
  Calendar, 
  Clock, 
  FileText,
  Tag
} from 'lucide-react';
import { User, Activity } from '../types';

interface ActivityTrackerProps {
  user: User;
}

export function ActivityTracker({ user }: ActivityTrackerProps) {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      userId: user.id,
      taskId: 'task-1',
      startTime: new Date(new Date().setHours(new Date().getHours() - 3)),
      endTime: new Date(new Date().setHours(new Date().getHours() - 1)),
      duration: 120, // minutes
      description: 'Equipment maintenance on production line A',
      status: 'completed',
      category: 'Maintenance'
    },
    {
      id: '2',
      userId: user.id,
      taskId: 'task-2',
      startTime: new Date(),
      description: 'Quality inspection of new batch',
      status: 'in-progress',
      category: 'Quality Control'
    }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [newActivity, setNewActivity] = useState({
    description: '',
    category: '',
  });

  const categories = [
    'Assembly', 'Maintenance', 'Quality Control', 'Logistics', 
    'Packaging', 'Inventory', 'Training', 'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const activity: Activity = {
      id: `activity-${Date.now()}`,
      userId: user.id,
      taskId: `task-${Date.now()}`,
      startTime: new Date(),
      description: newActivity.description,
      status: 'in-progress',
      category: newActivity.category,
    };
    
    setActivities([...activities, activity]);
    setNewActivity({ description: '', category: '' });
    setShowForm(false);
  };

  const stopActivity = (id: string) => {
    setActivities(activities.map(activity => {
      if (activity.id === id) {
        const endTime = new Date();
        const duration = Math.round(
          (endTime.getTime() - activity.startTime.getTime()) / 60000
        );
        return {
          ...activity,
          status: 'completed' as const,
          endTime,
          duration
        };
      }
      return activity;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Activity Tracker</h1>
        <button 
          className="btn-primary"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} className="mr-1" />
          New Activity
        </button>
      </div>

      {showForm && (
        <div className="card animate-fade-in">
          <h3 className="font-medium mb-4">Start New Activity</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Activity Description
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText size={18} className="text-text-secondary" />
                </div>
                <input 
                  type="text"
                  id="description"
                  required
                  value={newActivity.description}
                  onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                  className="input pl-10 w-full"
                  placeholder="Describe your activity..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Tag size={18} className="text-text-secondary" />
                </div>
                <select 
                  id="category"
                  required
                  value={newActivity.category}
                  onChange={(e) => setNewActivity({...newActivity, category: e.target.value})}
                  className="input pl-10 w-full"
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex space-x-3">
              <button type="submit" className="btn-primary flex-1">
                <PlayCircle size={18} className="mr-1" />
                Start Activity
              </button>
              <button 
                type="button"
                onClick={() => setShowForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Current Activities</h2>
        <div className="space-y-3">
          {activities.filter(activity => activity.status === 'in-progress').map(activity => (
            <div key={activity.id} className="card border-l-4 border-l-warning animate-slide-in">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{activity.description}</h3>
                  <div className="flex items-center mt-2 text-text-secondary text-sm">
                    <Tag size={16} className="mr-1" />
                    <span className="mr-4">{activity.category}</span>
                    <Clock size={16} className="mr-1" />
                    <span>Started: {activity.startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                </div>
                <button 
                  className="btn-danger"
                  onClick={() => stopActivity(activity.id)}
                >
                  <StopCircle size={18} className="mr-1" />
                  Stop
                </button>
              </div>
            </div>
          ))}
          {activities.filter(activity => activity.status === 'in-progress').length === 0 && (
            <div className="text-center py-6 text-text-secondary">
              No active tasks. Start a new activity to begin tracking.
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Completed Activities</h2>
        <div className="space-y-3">
          {activities.filter(activity => activity.status === 'completed').map(activity => (
            <div key={activity.id} className="card border-l-4 border-l-success">
              <div>
                <h3 className="font-medium">{activity.description}</h3>
                <div className="flex flex-wrap items-center mt-2 text-text-secondary text-sm">
                  <div className="flex items-center mr-4">
                    <Tag size={16} className="mr-1" />
                    <span>{activity.category}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{activity.startTime.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock size={16} className="mr-1" />
                    <span>
                      {activity.startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 
                      {activity.endTime?.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{activity.duration} minutes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {activities.filter(activity => activity.status === 'completed').length === 0 && (
            <div className="text-center py-6 text-text-secondary">
              No completed activities yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}