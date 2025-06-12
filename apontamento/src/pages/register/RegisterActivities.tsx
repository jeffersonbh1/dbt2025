import { useState } from 'react';
import { User } from '../../types';

interface RegisterActivitiesProps {
  user: User;
}

export function RegisterActivities({ user }: RegisterActivitiesProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    department: '',
    duration: '',
    machine: '',
    requiredSkills: '',
    priority: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Register Activity</h1>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Activity Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Select a category</option>
                <option value="maintenance">Maintenance</option>
                <option value="operation">Operation</option>
                <option value="quality">Quality Control</option>
                <option value="setup">Setup</option>
                <option value="cleaning">Cleaning</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="input w-full"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium mb-1">
                Department
              </label>
              <select
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Select a department</option>
                <option value="production">Production</option>
                
                <option value="maintenance">Maintenance</option>
                <option value="quality">Quality Control</option>
                <option value="logistics">Logistics</option>
              </select>
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium mb-1">
                Expected Duration (minutes)
              </label>
              <input
                type="number"
                id="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="input w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="machine" className="block text-sm font-medium mb-1">
                Machine
              </label>
              <select
                id="machine"
                value={formData.machine}
                onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Select a machine</option>
                <option value="machine1">Machine 1</option>
                <option value="machine2">Machine 2</option>
                <option value="machine3">Machine 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="priority" className="block text-sm font-medium mb-1">
                Priority
              </label>
              <select
                id="priority"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="input w-full"
                required
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="requiredSkills" className="block text-sm font-medium mb-1">
              Required Skills
            </label>
            <input
              type="text"
              id="requiredSkills"
              value={formData.requiredSkills}
              onChange={(e) => setFormData({ ...formData, requiredSkills: e.target.value })}
              className="input w-full"
              placeholder="Enter required skills, separated by commas"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Register Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}