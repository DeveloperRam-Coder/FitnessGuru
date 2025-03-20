
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { cn } from "@/lib/utils";

export interface Workout {
  id: string;
  title: string;
  day: string;
  description: string;
  duration: number;
  exerciseCount: number;
  completedExercises: number;
  imageUrl: string;
}

interface WorkoutCardProps {
  workout: Workout;
  className?: string;
}

export function WorkoutCard({ workout, className }: WorkoutCardProps) {
  const {
    id,
    title,
    day,
    description,
    duration,
    exerciseCount,
    completedExercises,
    imageUrl,
  } = workout;

  return (
    <Link
      to={`/daily-workout/${id}`}
      className={cn(
        "block rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 card-hover",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded">
          {day}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration} min</span>
          <span className="mx-2">•</span>
          <span>{exerciseCount} exercises</span>
        </div>
        <ProgressBar
          value={completedExercises}
          max={exerciseCount}
          label="Progress"
          showPercentage
        />
      </div>
    </Link>
  );
}
