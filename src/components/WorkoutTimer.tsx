
import { useState, useEffect } from "react";
import { Clock, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WorkoutTimerProps {
  initialTime?: number; // in seconds
  className?: string;
}

export function WorkoutTimer({ initialTime = 0, className }: WorkoutTimerProps) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  
  // Format time as mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning) {
      interval = window.setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);
  
  const handleStart = () => {
    setIsRunning(true);
  };
  
  const handlePause = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  
  return (
    <div className={cn("bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm", className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold flex items-center">
          <Clock className="h-4 w-4 mr-2 text-primary" /> 
          Workout Timer
        </h3>
        <span className="text-2xl font-bold font-mono">{formatTime(time)}</span>
      </div>
      
      <div className="flex space-x-2">
        {!isRunning ? (
          <Button
            size="sm" 
            onClick={handleStart}
            className="flex-1"
          >
            <Play className="h-4 w-4 mr-1" /> Start
          </Button>
        ) : (
          <Button 
            size="sm"
            onClick={handlePause}
            variant="secondary"
            className="flex-1"
          >
            <Pause className="h-4 w-4 mr-1" /> Pause
          </Button>
        )}
        <Button 
          size="sm" 
          variant="outline" 
          onClick={handleReset}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
