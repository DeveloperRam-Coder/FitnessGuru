
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ExerciseCard, Exercise } from "@/components/ExerciseCard";
import { ProgressBar } from "@/components/ProgressBar";
import { WorkoutTimer } from "@/components/WorkoutTimer";
import { WorkoutNotes } from "@/components/WorkoutNotes";
import { WorkoutProgress } from "@/components/WorkoutProgress";
import { Filter, Clock, Dumbbell, ArrowLeft, Info, ListFilter } from "lucide-react";
import { workoutData, exerciseData } from "@/data/workoutData";
import exerciseDetails from "@/data/exerciseDetails";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const DailyWorkout = () => {
  const { workoutId } = useParams<{ workoutId?: string }>();
  const [workout, setWorkout] = useState(workoutData.monday);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    if (workoutId && workoutData[workoutId]) {
      setWorkout(workoutData[workoutId]);
      setExercises(exerciseData[workoutId]);
    } else if (!workoutId) {
      // Get today's day name to show the appropriate workout
      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      const today = days[new Date().getDay()];
      
      if (workoutData[today]) {
        setWorkout(workoutData[today]);
        setExercises(exerciseData[today]);
      }
    }
  }, [workoutId]);

  useEffect(() => {
    // Update completed exercises count from localStorage
    const completedExercisesFromStorage = JSON.parse(localStorage.getItem('completedExercises') || '[]');
    
    const updatedExercises = exercises.map(ex => ({
      ...ex,
      completed: completedExercisesFromStorage.includes(ex.id)
    }));
    
    setExercises(updatedExercises);
  }, [exercises]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredExercises(exercises);
    } else {
      setFilteredExercises(
        exercises.filter(exercise => exercise.type === filter)
      );
    }
  }, [exercises, filter]);

  const totalExercises = exercises.length || 0;
  const completedExercises = exercises.filter(ex => ex.completed).length || 0;
  const totalDuration = exercises.reduce((total, ex) => total + ex.duration, 0) || 0;

  const markAllCompleted = () => {
    const completedExercisesFromStorage = JSON.parse(localStorage.getItem('completedExercises') || '[]');
    
    const allExerciseIds = exercises.map(ex => ex.id);
    const updatedCompletedExercises = [...new Set([...completedExercisesFromStorage, ...allExerciseIds])];
    
    localStorage.setItem('completedExercises', JSON.stringify(updatedCompletedExercises));
    
    const updatedExercises = exercises.map(ex => ({
      ...ex,
      completed: true
    }));
    
    setExercises(updatedExercises);
    
    toast({
      title: "Workout Completed",
      description: "All exercises have been marked as completed!",
      variant: "success",
    });
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <div className="flex">
        {/* Main Content */}
        <main className={`page-container animate-fade-in pb-20 ${showSidebar ? 'md:ml-72' : 'ml-0'} transition-all duration-300 flex-1`}>
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="md:hidden"
              >
                <ListFilter className="h-4 w-4 mr-1" />
                {showSidebar ? 'Hide Stats' : 'Show Stats'}
              </Button>
            </div>
            
            <h1 className="page-header">{workout?.title}</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
              {workout?.description}
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm flex items-center animate-fade-up">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Dumbbell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Exercises</p>
                  <p className="text-xl font-semibold">{totalExercises} total</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm flex items-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Duration</p>
                  <p className="text-xl font-semibold">{totalDuration} min</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Progress</p>
                <ProgressBar 
                  value={completedExercises} 
                  max={totalExercises}
                  showPercentage
                />
              </div>
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center flex-wrap">
                <Filter className="h-5 w-5 mr-2 text-slate-600 dark:text-slate-400" />
                <span className="mr-4 text-slate-600 dark:text-slate-400">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === 'all' 
                        ? 'bg-primary text-white' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter('strength')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === 'strength' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    Strength
                  </button>
                  <button 
                    onClick={() => setFilter('cardio')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === 'cardio' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    Cardio
                  </button>
                  <button 
                    onClick={() => setFilter('flexibility')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === 'flexibility' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    Flexibility
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                >
                  <Info className="h-4 w-4" />
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                <Button 
                  size="sm"
                  onClick={markAllCompleted}
                  variant="outline"
                >
                  Mark All Complete
                </Button>
              </div>
            </div>
          </div>
          
          {/* Exercise List */}
          <div className="space-y-4">
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise, index) => (
                <div 
                  key={exercise.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ExerciseCard 
                    exercise={exercise} 
                    workoutId={workout.id}
                  />
                  {showDetails && exerciseDetails[exercise.id] && (
                    <div className="mt-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <h4 className="font-semibold text-md mb-2">Exercise Details</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">{exerciseDetails[exercise.id].description}</p>
                      
                      {exerciseDetails[exercise.id].targetMuscles && (
                        <div className="mb-3">
                          <h5 className="font-medium text-sm mb-1">Target Muscles:</h5>
                          <div className="flex flex-wrap gap-1">
                            {exerciseDetails[exercise.id].targetMuscles.map((muscle, i) => (
                              <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                                {muscle}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {exerciseDetails[exercise.id].instructions && (
                        <div className="mb-3">
                          <h5 className="font-medium text-sm mb-1">Instructions:</h5>
                          <ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            {exerciseDetails[exercise.id].instructions.map((instruction, i) => (
                              <li key={i}>{instruction}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                      
                      {exerciseDetails[exercise.id].tips && (
                        <div>
                          <h5 className="font-medium text-sm mb-1">Tips:</h5>
                          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            {exerciseDetails[exercise.id].tips.map((tip, i) => (
                              <li key={i}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-3">
                        <Link 
                          to={`/exercise/${workout.id}/${exercise.id}`} 
                          className="text-primary text-sm font-medium hover:underline inline-flex items-center"
                        >
                          View full details and video
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400">
                  No exercises found with the selected filter.
                </p>
                <button
                  onClick={() => setFilter('all')}
                  className="mt-4 text-primary hover:underline"
                >
                  Show all exercises
                </button>
              </div>
            )}
          </div>
        </main>
        
        {/* Sidebar */}
        <aside className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 overflow-y-auto transition-transform duration-300 transform ${
          showSidebar ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        } md:block z-20 p-4 space-y-4`}>
          <h3 className="font-bold text-lg border-b pb-2 mb-4">Workout Stats</h3>
          
          <WorkoutTimer className="mb-4" />
          
          <WorkoutProgress
            workoutId={workout.id}
            totalExercises={totalExercises}
            completedExercises={completedExercises}
            className="mb-4"
          />
          
          <WorkoutNotes workoutId={workout.id} />
        </aside>
      </div>
    </div>
  );
};

export default DailyWorkout;
