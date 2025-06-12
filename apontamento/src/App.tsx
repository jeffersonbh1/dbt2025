import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { ActivityTracker } from './pages/ActivityTracker';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Tasks } from './pages/Tasks';
import { Profile } from './pages/Profile';
import { AppLayout } from './components/layout/AppLayout';
import { User } from './types';
import { RegisterClients } from './pages/register/RegisterClients';
import { RegisterMachines } from './pages/register/RegisterMachines';
import { RegisterProductionOrders } from './pages/register/RegisterProductionOrders';
import { RegisterEmployees } from './pages/register/RegisterEmployees';
import { RegisterActivities } from './pages/register/RegisterActivities';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          user ? (
            <Navigate to="/dashboard\" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        } 
      />
      <Route 
        path="/*" 
        element={
          user ? (
            <AppLayout user={user} onLogout={handleLogout}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard user={user} />} />
                <Route path="/activities" element={<ActivityTracker user={user} />} />
                <Route path="/tasks" element={<Tasks user={user} />} />
                <Route path="/reports" element={<Reports user={user} />} />
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/settings" element={<Settings user={user} />} />
                <Route path="/register/clients" element={<RegisterClients user={user} />} />
                <Route path="/register/machines" element={<RegisterMachines user={user} />} />
                <Route path="/register/production-orders" element={<RegisterProductionOrders user={user} />} />
                <Route path="/register/employees" element={<RegisterEmployees user={user} />} />
                <Route path="/register/activities" element={<RegisterActivities user={user} />} />
                <Route path="*" element={<Navigate to="/dashboard\" replace />} />
              </Routes>
            </AppLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
    </Routes>
  );
}

export default App;