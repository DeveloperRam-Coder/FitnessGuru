import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WorkoutProgress } from "@/components/WorkoutProgress";
import { WorkoutTimer } from "@/components/WorkoutTimer";
import { WorkoutNotes } from "@/components/WorkoutNotes";
import { ListFilter } from "lucide-react";

interface SidebarProps {
  workoutId?: string;
  totalExercises: number;
  completedExercises: number;
  showTimer?: boolean;
  showNotes?: boolean;
  className?: string;
  onToggle?: () => void;
  isVisible?: boolean;
}

export function Sidebar({
  workoutId = "",
  totalExercises,
  completedExercises,
  showTimer = false,
  showNotes = false,
  className,
  onToggle,
  isVisible = true
}: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="md:hidden fixed top-20 right-4 z-30"
        >
          <ListFilter className="h-4 w-4 mr-1" />
          {isVisible ? "Hide Stats" : "Show Stats"}
        </Button>
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          "fixed right-0 top-16 h-[calc(100vh-4rem)] w-72 border-l border-slate-200",
          "dark:border-slate-800 bg-sidebar dark:bg-sidebar p-4 transition-transform duration-300",
          "overflow-y-auto md:translate-x-0",
          isMobile ? (isVisible ? "translate-x-0" : "translate-x-full") : "",
          className
        )}
      >
        <div className="space-y-6">
          <WorkoutProgress
            workoutId={workoutId}
            totalExercises={totalExercises}
            completedExercises={completedExercises}
          />

          {showTimer && <WorkoutTimer />}

          {showNotes && <WorkoutNotes workoutId={workoutId} />}
        </div>
      </aside>
    </>
  );
}