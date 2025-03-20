
import { Link } from "react-router-dom";
import { Play, Clock, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Exercise {
  id: string;
  title: string;
  duration: number;
  sets: number;
  reps: number;
  type: "strength" | "cardio" | "flexibility";
  imageUrl: string;
  completed: boolean;
}

interface ExerciseCardProps {
  exercise: Exercise;
  workoutId: string;
  className?: string;
}

export function ExerciseCard({ exercise, workoutId, className }: ExerciseCardProps) {
  const { id, title, duration, sets, reps, type, imageUrl, completed } = exercise;

  const typeColors = {
    strength: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    cardio: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    flexibility: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };

  return (
    <Link
      to={`/exercise/${workoutId}/${id}`}
      className={cn(
        "flex flex-col md:flex-row rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 card-hover",
        className,
        completed && "border-l-4 border-l-green-500"
      )}
    >
      <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-primary rounded-full p-3">
            <Play className="h-6 w-6 text-white" fill="white" />
          </div>
        </div>
        {completed && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
            Completed
          </div>
        )}
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={cn("text-xs px-2 py-1 rounded", typeColors[type])}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          {sets > 0 && (
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">
              {sets} sets
            </span>
          )}
          {reps > 0 && (
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">
              {reps} reps
            </span>
          )}
        </div>
        <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration} min</span>
          {sets > 0 && (
            <>
              <span className="mx-2">•</span>
              <BarChart2 className="h-4 w-4 mr-1" />
              <span>{sets} x {reps}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
