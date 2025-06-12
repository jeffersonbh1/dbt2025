import { useState } from 'react';
import { 
  Bell, 
  Search, 
  LogOut, 
  User as UserIcon, 
  Settings,
  ChevronDown
} from 'lucide-react';
import { User } from '../../types';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="bg-secondary border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex-1">
        <h1 className="text-xl font-semibold">InduTrack</h1>
      </div>

      <div className="hidden md:flex items-center bg-primary rounded-md border border-border">
        <Search size={18} className="ml-3 text-text-secondary" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none px-3 py-2 w-64"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-primary">
          <Bell size={20} className="text-text-secondary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </button>

        <div className="relative">
          <button 
            onClick={toggleUserMenu}
            className="flex items-center space-x-2 hover:bg-primary rounded-md px-2 py-1.5"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-medium">
              {user.name.charAt(0)}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-text-secondary">{user.role}</p>
            </div>
            <ChevronDown size={16} className="hidden md:block text-text-secondary" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-secondary border border-border rounded-md shadow-lg py-1 z-10 animate-fade-in">
              <button 
                className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-primary"
                onClick={() => {
                  setShowUserMenu(false);
                  // Navigate to profile
                }}
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </button>
              <button 
                className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-primary"
                onClick={() => {
                  setShowUserMenu(false);
                  // Navigate to settings
                }}
              >
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <div className="border-t border-border my-1"></div>
              <button 
                className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-primary text-error"
                onClick={() => {
                  setShowUserMenu(false);
                  onLogout();
                }}
              >
                <LogOut size={16} />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}