import { BarChart3 } from 'lucide-react';

interface LogoProps {
  collapsed?: boolean;
}

export function Logo({ collapsed = false }: LogoProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center bg-accent rounded-md p-1">
        <BarChart3 size={24} className="text-primary" />
      </div>
      {!collapsed && (
        <span className="ml-2 text-xl font-bold text-text-primary">InduTrack</span>
      )}
    </div>
  );
}