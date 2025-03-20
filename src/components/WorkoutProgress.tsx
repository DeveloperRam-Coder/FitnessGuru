
import { useState, useEffect } from "react";
import { BarChart, TrendingUp, Award } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

interface WorkoutProgressProps {
  workoutId: string;
  totalExercises: number;
  completedExercises: number;
  className?: string;
}

export function WorkoutProgress({ 
  workoutId, 
  totalExercises, 
  completedExercises,
  className 
}: WorkoutProgressProps) {
  const [streakCount, setStreakCount] = useState(0);
  const [totalWorkoutsCompleted, setTotalWorkoutsCompleted] = useState(0);
  
  useEffect(() => {
    // Load streak and total workouts completed from localStorage
    const streak = parseInt(localStorage.getItem('workout_streak') || '0', 10);
    const totalCompleted = parseInt(localStorage.getItem('total_workouts_completed') || '0', 10);
    
    setStreakCount(streak);
    setTotalWorkoutsCompleted(totalCompleted);
    
    // Update stats if this workout is completed
    if (completedExercises === totalExercises && totalExercises > 0) {
      const workoutCompletions = JSON.parse(localStorage.getItem('workout_completions') || '{}');
      const today = new Date().toISOString().split('T')[0];
      
      // If this workout wasn't already marked as completed today
      if (!workoutCompletions[workoutId] || workoutCompletions[workoutId] !== today) {
        // Mark this workout as completed today
        workoutCompletions[workoutId] = today;
        localStorage.setItem('workout_completions', JSON.stringify(workoutCompletions));
        
        // Update total workouts completed
        const newTotalCompleted = totalCompleted + 1;
        localStorage.setItem('total_workouts_completed', newTotalCompleted.toString());
        setTotalWorkoutsCompleted(newTotalCompleted);
        
        // Update streak logic
        const lastWorkoutDate = localStorage.getItem('last_workout_date');
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (!lastWorkoutDate || lastWorkoutDate === yesterdayStr || lastWorkoutDate === today) {
          // Increment streak if first workout or worked out yesterday/today
          const newStreak = lastWorkoutDate === today ? streak : streak + 1;
          localStorage.setItem('workout_streak', newStreak.toString());
          setStreakCount(newStreak);
        } else {
          // Reset streak
          localStorage.setItem('workout_streak', '1');
          setStreakCount(1);
        }
        
        // Update last workout date
        localStorage.setItem('last_workout_date', today);
      }
    }
  }, [workoutId, totalExercises, completedExercises]);
  
  return (
    <div className={cn("bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm", className)}>
      <h3 className="font-semibold flex items-center mb-4">
        <BarChart className="h-4 w-4 mr-2 text-primary" /> 
        Workout Progress
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-center">
          <div className="flex justify-center mb-1">
            <Award className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">Current Streak</p>
          <p className="text-xl font-bold">{streakCount} days</p>
        </div>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-center">
          <div className="flex justify-center mb-1">
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">Total Workouts</p>
          <p className="text-xl font-bold">{totalWorkoutsCompleted}</p>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Today's Progress</p>
        <ProgressBar 
          value={completedExercises} 
          max={totalExercises}
          showPercentage
        />
        <p className="text-xs text-right mt-1 text-slate-500 dark:text-slate-500">
          {completedExercises} of {totalExercises} exercises completed
        </p>
      </div>
    </div>
  );
}
