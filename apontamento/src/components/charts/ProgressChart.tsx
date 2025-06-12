import { useEffect, useRef } from 'react';

interface ProgressChartProps {
  value: number;
  label: string;
  color: string;
}

export function ProgressChart({ value, label, color }: ProgressChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Canvas setup
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    
    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(59, 70, 95, 0.5)';
    ctx.lineWidth = 10;
    ctx.stroke();
    
    // Progress arc
    const startAngle = -0.5 * Math.PI;
    const endAngle = startAngle + (2 * Math.PI * value / 100);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.stroke();
    
    // Value text
    ctx.font = 'bold 24px Inter';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${value}%`, centerX, centerY);

    // Label text
    ctx.font = '12px Inter';
    ctx.fillStyle = 'rgba(156, 163, 175, 1)';
    ctx.fillText(label, centerX, centerY + 24);
  }, [value, label, color]);

  return (
    <div className="flex flex-col items-center">
      <canvas 
        ref={canvasRef} 
        width={120} 
        height={120}
      />
    </div>
  );
}