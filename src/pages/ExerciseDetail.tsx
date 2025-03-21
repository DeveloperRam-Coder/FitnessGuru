
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ExerciseProgressTracker } from "@/components/ExerciseProgressTracker";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Navbar } from "@/components/Navbar";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { WorkoutNotes } from "@/components/WorkoutNotes";
import { useToast } from "@/components/ui/use-toast";
import { 
  ArrowLeft, 
  Play, 
  Dumbbell, 
  Clock, 
  BarChart2, 
  CheckCircle, 
  XCircle,
  Clipboard,
  Timer,
  Pause,
  RotateCcw,
  ListFilter
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

import exerciseDetails from "@/data/exerciseDetails";
import { workoutData } from "@/data/workoutData";

export default function ExerciseDetail() {
  const { workoutId, exerciseId } = useParams<{ workoutId: string; exerciseId: string }>();
  const [exercise, setExercise] = useState<any>(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState<'video' | 'timer' | 'notes'>('video');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (exerciseId && workoutId) {
      const exerciseData = exerciseDetails[exerciseId];
      
      if (exerciseData) {
        // Load completed status from localStorage
        const completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '[]');
        const isCompleted = completedExercises.includes(exerciseId);
        
        setExercise(exerciseData);
        setCompleted(isCompleted);
        
        // Initialize timer based on rest time
        if (exerciseData.restTime) {
          setTimerSeconds(exerciseData.restTime);
        }
      }
    }
  }, [exerciseId, workoutId]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prevSeconds => {
          const newSeconds = prevSeconds - 1;
          
          if (newSeconds === 0) {
            setTimerRunning(false);
            toast({
              title: "Rest Complete",
              description: "Your rest period is over. Ready for the next set!",
            });
          }
          
          return newSeconds;
        });
      }, 1000);

      // Cleanup interval when component unmounts or timerRunning changes
      return () => clearInterval(interval);
    }
  }, [timerRunning, timerSeconds, toast]);

  const handleToggleComplete = () => {
    const completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '[]');
    
    let updatedCompletedExercises: string[];
    
    if (completed) {
      // Remove from completed
      updatedCompletedExercises = completedExercises.filter((id: string) => id !== exerciseId);
      toast({
        title: "Exercise Marked as Incomplete",
        description: "You can mark it complete when you're done.",
      });
    } else {
      // Add to completed
      updatedCompletedExercises = [...completedExercises, exerciseId];
      toast({
        title: "Exercise Completed!",
        description: "Great job! Keep up the good work.",
      });
    }
    
    localStorage.setItem('completedExercises', JSON.stringify(updatedCompletedExercises));
    setCompleted(!completed);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startRestTimer = () => {
    setTimerRunning(true);
    setActiveSection('timer');
    toast({
      title: "Rest Timer Started",
      description: `Taking a ${formatTime(timerSeconds)} rest before your next set.`,
    });
  };

  const resetRestTimer = () => {
    if (exercise?.restTime) {
      setTimerSeconds(exercise.restTime);
      setTimerRunning(false);
    }
  };

  const handleProgressChange = (progress: number) => {
    setVideoProgress(progress);
    
    if (progress >= 95 && !completed) {
      handleToggleComplete();
    }
  };

  if (!exercise) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <div className="page-container pt-10">
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Exercise not found
            </p>
            <Link to="/" className="text-primary font-medium mt-4 inline-block hover:underline">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const workout = workoutData[workoutId || ''] || { title: 'Workout' };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <div className="flex">
        <main className="page-container animate-fade-in pb-20 flex-1">
          <Sidebar
            workoutId={workoutId}
            totalExercises={1}
            completedExercises={completed ? 1 : 0}
            showTimer
            showNotes
            isVisible={true}
          />

        {/* Header */}
        <div className="mb-8">
          <Link 
            to={`/daily-workout/${workoutId}`} 
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to {workout.title}
          </Link>
          
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h1 className="page-header">{exercise.title}</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {exercise.description}
              </p>
            </div>
            
            <Button
              size="lg"
              variant={completed ? "outline" : "default"}
              onClick={handleToggleComplete}
              className={`${
                completed 
                  ? "border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950" 
                  : ""
              }`}
            >
              {completed ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Completed
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 mr-2" />
                  Mark Complete
                </>
              )}
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                <Dumbbell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Type</p>
                <p className="font-medium capitalize">{exercise.type}</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">
                <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Duration</p>
                <p className="font-medium">{exercise.duration} min</p>
              </div>
            </div>
            
            {exercise.sets > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm flex items-center">
                <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-full mr-3">
                  <BarChart2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Sets × Reps</p>
                  <p className="font-medium">{exercise.sets} × {exercise.reps}</p>
                </div>
              </div>
            )}
            
            {exercise.restTime > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm flex items-center">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                  <Timer className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Rest Between Sets</p>
                  <p className="font-medium">{exercise.restTime} seconds</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Main content with tabs */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm">
              <div className="flex border-b border-slate-200 dark:border-slate-800">
                <button
                  className={`flex-1 py-3 px-4 text-center ${
                    activeSection === 'video'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                  onClick={() => setActiveSection('video')}
                >
                  <Play className="h-4 w-4 inline-block mr-1" />
                  Watch Video
                </button>
                
                <button
                  className={`flex-1 py-3 px-4 text-center ${
                    activeSection === 'timer'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                  onClick={() => setActiveSection('timer')}
                >
                  <Timer className="h-4 w-4 inline-block mr-1" />
                  Rest Timer
                </button>
                
                <button
                  className={`flex-1 py-3 px-4 text-center ${
                    activeSection === 'notes'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                  onClick={() => setActiveSection('notes')}
                >
                  <Clipboard className="h-4 w-4 inline-block mr-1" />
                  Exercise Notes
                </button>
              </div>
              
              <div className="p-4">
                {/* Video Section */}
                {activeSection === 'video' && (
                  <div>
                    <div className="relative rounded-lg overflow-hidden mb-4">
                      <VideoPlayer
                        src={exercise.videoUrl}
                        poster={exercise.thumbnailUrl}
                        onProgressChange={handleProgressChange}
                      />
                      
                      <div className="mt-3">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Video Progress</p>
                        <ProgressBar 
                          value={videoProgress} 
                          max={100}
                          showPercentage
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Timer Section */}
                {activeSection === 'timer' && (
                  <div className="py-6 text-center">
                    <div className="mb-6">
                      <div className="text-5xl font-mono font-bold mb-3">
                        {formatTime(timerSeconds)}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {timerRunning 
                          ? "Rest between sets" 
                          : "Start your rest timer between sets"}
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      {!timerRunning ? (
                        <Button 
                          onClick={startRestTimer}
                          className="px-8"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Start Rest
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => setTimerRunning(false)}
                          variant="outline"
                          className="px-8"
                        >
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </Button>
                      )}
                      
                      <Button 
                        onClick={resetRestTimer}
                        variant="outline"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Reset
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Notes Section */}
                {activeSection === 'notes' && (
                  <div className="py-2">
                    <WorkoutNotes workoutId={`exercise_${exercise.id}`} />
                  </div>
                )}
              </div>
            </div>
            
            {/* Instructions */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">How to perform</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Instructions</h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    {exercise.instructions.map((instruction: string, i: number) => (
                      <li key={i} className="pl-2">
                        <span className="text-slate-900 dark:text-white font-medium mr-1">Step {i + 1}:</span> {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Tips</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    {exercise.tips.map((tip: string, i: number) => (
                      <li key={i} className="pl-2">{tip}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Target Muscles</h3>
                  <div className="flex flex-wrap gap-2">
                    {exercise.targetMuscles.map((muscle: string, i: number) => (
                      <span 
                        key={i} 
                        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <ExerciseProgressTracker 
              exerciseId={exercise.id}
              exerciseType={exercise.type}
              className="mb-4"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
);
}
