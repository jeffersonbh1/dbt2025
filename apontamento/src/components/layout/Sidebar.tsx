import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  ClipboardList, 
  Settings, 
  User as UserIcon, 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Clock,
  LineChart,
  Users,
  Cog,
  FileText,
  Factory,
  ChevronDown
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { User } from '../../types';

interface SidebarProps {
  user: User;
}

export function Sidebar({ user }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleRegistration = () => {
    setRegistrationOpen(!registrationOpen);
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/activities', label: 'Activities', icon: <Clock size={20} /> },
    { path: '/tasks', label: 'Tasks', icon: <ClipboardList size={20} /> },
    { path: '/reports', label: 'Reports', icon: <BarChart3 size={20} /> },
  ];

  const registrationItems = [
    { path: '/register/clients', label: 'Clients', icon: <Users size={20} /> },
    { path: '/register/machines', label: 'Machines', icon: <Cog size={20} /> },
    { path: '/register/production-orders', label: 'Production Orders', icon: <FileText size={20} /> },
    { path: '/register/employees', label: 'Employees', icon: <UserIcon size={20} /> },
    { path: '/register/activities', label: 'Activities', icon: <Factory size={20} /> },
  ];

  const bottomNavItems = [
    { path: '/profile', label: 'Profile', icon: <UserIcon size={20} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside 
      className={`bg-primary border-r border-border flex flex-col transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={`flex items-center ${collapsed ? 'justify-center w-full' : ''}`}>
          <Logo collapsed={collapsed} />
        </div>
        <button 
          onClick={toggleCollapse} 
          className="text-text-secondary hover:text-text-primary p-1 rounded-md hover:bg-secondary"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''} ${collapsed ? 'justify-center px-2' : ''}`
              }
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}

          {/* Registration Menu */}
          <div className="relative">
            <button
              onClick={toggleRegistration}
              className={`nav-link w-full ${
                location.pathname.startsWith('/register') ? 'active' : ''
              } ${collapsed ? 'justify-center px-2' : ''}`}
            >
              <FileText size={20} />
              {!collapsed && (
                <>
                  <span className="flex-1">Registration</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      registrationOpen ? 'rotate-180' : ''
                    }`}
                  />
                </>
              )}
            </button>

            {registrationOpen && !collapsed && (
              <div className="pl-4 space-y-1 mt-1">
                {registrationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="p-2 border-t border-border">
        <nav className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''} ${collapsed ? 'justify-center px-2' : ''}`
              }
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}