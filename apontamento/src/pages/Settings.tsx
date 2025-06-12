import { useState } from 'react';
import { User } from '../types';

interface SettingsProps {
  user: User;
}

export function Settings({ user }: SettingsProps) {
  const [activeTab, setActiveTab] = useState('appearance');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="card">
            <nav className="space-y-1">
              <button 
                className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'appearance' ? 'bg-accent text-primary' : 'hover:bg-primary'}`}
                onClick={() => setActiveTab('appearance')}
              >
                Appearance
              </button>
              <button 
                className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'notifications' ? 'bg-accent text-primary' : 'hover:bg-primary'}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
              <button 
                className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'privacy' ? 'bg-accent text-primary' : 'hover:bg-primary'}`}
                onClick={() => setActiveTab('privacy')}
              >
                Privacy & Security
              </button>
              <button 
                className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'account' ? 'bg-accent text-primary' : 'hover:bg-primary'}`}
                onClick={() => setActiveTab('account')}
              >
                Account
              </button>
              <button 
                className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'about' ? 'bg-accent text-primary' : 'hover:bg-primary'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
            </nav>
          </div>
        </div>

        <div className="md:col-span-3">
          {activeTab === 'appearance' && (
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Appearance</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Theme</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-accent rounded-md p-2 flex flex-col items-center">
                      <div className="w-full h-24 bg-primary rounded-md mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-accent rounded-md"></div>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="dark" name="theme" checked className="mr-2" />
                        <label htmlFor="dark">Dark</label>
                      </div>
                    </div>
                    <div className="border border-border rounded-md p-2 flex flex-col items-center">
                      <div className="w-full h-24 bg-text-primary rounded-md mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-accent rounded-md"></div>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="light" name="theme" className="mr-2" />
                        <label htmlFor="light">Light</label>
                      </div>
                    </div>
                    <div className="border border-border rounded-md p-2 flex flex-col items-center">
                      <div className="w-full h-24 bg-gradient-to-b from-primary to-text-primary rounded-md mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-accent rounded-md"></div>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="system" name="theme" className="mr-2" />
                        <label htmlFor="system">System</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Sidebar</h3>
                  <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                    <div>
                      <h4 className="font-medium">Collapsed Sidebar</h4>
                      <p className="text-text-secondary text-sm">Save space by default</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Accent Color</h3>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-white cursor-pointer"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full cursor-pointer"></div>
                  </div>
                </div>

                <button className="btn-primary">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Notifications</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Task Assignments</h4>
                    <p className="text-text-secondary text-sm">Get notified when you're assigned to a task</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Task Updates</h4>
                    <p className="text-text-secondary text-sm">Get notified about changes to tasks you're involved with</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Task Reminders</h4>
                    <p className="text-text-secondary text-sm">Get reminded about upcoming deadlines</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Activity Reports</h4>
                    <p className="text-text-secondary text-sm">Receive weekly activity summary reports</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                <button className="btn-primary">
                  Save Notification Settings
                </button>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Privacy & Security</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-text-secondary text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <button className="btn-secondary">
                    Enable
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Session Management</h4>
                    <p className="text-text-secondary text-sm">Manage your active sessions and sign out remotely</p>
                  </div>
                  <button className="btn-secondary">
                    Manage
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Privacy Settings</h4>
                    <p className="text-text-secondary text-sm">Control what information is visible to others</p>
                  </div>
                  <button className="btn-secondary">
                    Configure
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary rounded-md">
                  <div>
                    <h4 className="font-medium">Data Export</h4>
                    <p className="text-text-secondary text-sm">Download a copy of your data</p>
                  </div>
                  <button className="btn-secondary">
                    Export
                  </button>
                </div>

                <button className="btn-danger">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}