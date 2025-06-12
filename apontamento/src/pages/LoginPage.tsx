import { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { User as UserType } from '../types';

interface LoginPageProps {
  onLogin: (user: UserType) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo credentials check
      if (email === 'demo@example.com' && password === 'password') {
        const user: UserType = {
          id: '1',
          name: 'Demo User',
          email: 'demo@example.com',
          role: 'employee',
          department: 'Production'
        };
        onLogin(user);
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-primary flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-secondary p-8 rounded-lg border border-border shadow-lg">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold">
            Sign in to your account
          </h2>
          
          {error && (
            <div className="bg-error bg-opacity-10 border border-error rounded-md p-3 flex items-start">
              <AlertCircle size={18} className="text-error mr-2 mt-0.5" />
              <p className="text-sm text-error">{error}</p>
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-text-secondary" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input pl-10 w-full"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-text-secondary" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input pl-10 w-full"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-accent hover:text-opacity-90">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>

            <div className="text-center text-sm">
              <p className="text-text-secondary">
                For demo, use: demo@example.com / password
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Hero image and company info */}
      <div className="hidden lg:block lg:w-1/2 bg-secondary relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6">
              Industrial Activity Tracking Solution
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Track employee activities, monitor productivity, and generate detailed reports to optimize your industrial operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Activity Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Performance Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Productivity Reports</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Team Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}