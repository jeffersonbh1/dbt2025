import { User } from '../types';

interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <button className="btn-primary">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card flex flex-col items-center p-6">
          <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-primary text-3xl font-bold mb-4">
            {user.name.charAt(0)}
          </div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-text-secondary">{user.role}</p>
          <p className="mt-1">{user.department}</p>
          <button className="btn-secondary mt-4 w-full">
            Change Avatar
          </button>
        </div>

        <div className="md:col-span-2">
          <div className="card">
            <h3 className="font-medium mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Full Name</label>
                  <div className="input py-2.5">{user.name}</div>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Email</label>
                  <div className="input py-2.5">{user.email}</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Role</label>
                  <div className="input py-2.5">{user.role}</div>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Department</label>
                  <div className="input py-2.5">{user.department}</div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1">Employee ID</label>
                <div className="input py-2.5">EMP-{user.id}</div>
              </div>
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="font-medium mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                <div>
                  <h4 className="font-medium">Password</h4>
                  <p className="text-text-secondary text-sm">Last changed 30 days ago</p>
                </div>
                <button className="btn-secondary">
                  Change
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-text-secondary text-sm">Not enabled</p>
                </div>
                <button className="btn-secondary">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                <div>
                  <h4 className="font-medium">Notification Preferences</h4>
                  <p className="text-text-secondary text-sm">Manage email and app notifications</p>
                </div>
                <button className="btn-secondary">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}