import { useState } from 'react';
import { User } from '../../types';

interface RegisterMachinesProps {
  user: User;
}

export function RegisterMachines({ user }: RegisterMachinesProps) {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    serialNumber: '',
    manufacturer: '',
    department: '',
    maintenanceInterval: '',
    status: 'active'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Register Machine</h1>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Machine Name
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
              <label htmlFor="model" className="block text-sm font-medium mb-1">
                Model
              </label>
              <input
                type="text"
                id="model"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="input w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="serialNumber" className="block text-sm font-medium mb-1">
                Serial Number
              </label>
              <input
                type="text"
                id="serialNumber"
                value={formData.serialNumber}
                onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                className="input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="manufacturer" className="block text-sm font-medium mb-1">
                Manufacturer
              </label>
              <input
                type="text"
                id="manufacturer"
                value={formData.manufacturer}
                onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                className="input w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium mb-1">
                Department
              </label>
              <input
                type="text"
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="maintenanceInterval" className="block text-sm font-medium mb-1">
                Maintenance Interval (days)
              </label>
              <input
                type="number"
                id="maintenanceInterval"
                value={formData.maintenanceInterval}
                onChange={(e) => setFormData({ ...formData, maintenanceInterval: e.target.value })}
                className="input w-full"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="input w-full"
              required
            >
              <option value="active">Active</option>
              <option value="maintenance">Under Maintenance</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Register Machine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}