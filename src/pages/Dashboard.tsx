
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { ExerciseCard, Exercise } from "@/components/ExerciseCard";
import { ProgressBar } from "@/components/ProgressBar";
import { Calendar, BarChart2, Award, Heart, Clock, Dumbbell, CheckCircle } from "lucide-react";
import { exerciseDetails } from "@/data/exerciseDetails";

// Mock data for workouts and exercises
const mockExercises = {
  "chest-press": {
    id: "chest-press",
    title: "Dumbbell Chest Press",
    duration: 10,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    completed: true
  },
  "shoulder-press": {
    id: "shoulder-press",
    title: "Seated Shoulder Press",
    duration: 8,
    sets: 3,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=800&auto=format&fit=crop",
    completed: true
  },
  "tricep-extension": {
    id: "tricep-extension",
    title: "Tricep Extensions",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1598575285627-d1ded1921f95?q=80&w=800&auto=format&fit=crop",
    completed: true
  },
  "squats": {
    id: "squats",
    title: "Barbell Squats",
    duration: 12,
    sets: 4,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  "deadlifts": {
    id: "deadlifts",
    title: "Romanian Deadlifts",
    duration: 10,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
};

const Dashboard = () => {
  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);
  const [completedExercises, setCompletedExercises] = useState<Exercise[]>([]);
  const [weeklyProgress, setWeeklyProgress] = useState({
    completed: 0,
    total: 35, // Total number of exercises for the week
    streak: 2, // Current streak of consecutive days with completed exercises
    minutesCompleted: 0,
  });

  // Simulated data for weekly activity
  const weeklyActivityData = [
    { day: "Mon", completed: 5, total: 5 },
    { day: "Tue", completed: 3, total: 6 },
    { day: "Wed", completed: 0, total: 8 },
    { day: "Thu", completed: 0, total: 5 },
    { day: "Fri", completed: 0, total: 7 },
    { day: "Sat", completed: 0, total: 4 },
    { day: "Sun", completed: 0, total: 0 },
  ];

  useEffect(() => {
    // Load favorite exercises from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteExercises') || '[]');
    const favExercises = storedFavorites
      .map((id: string) => {
        const exercise = exerciseDetails[id];
        if (!exercise) return null;
        return {
          id: exercise.id,
          title: exercise.title,
          duration: exercise.duration,
          sets: exercise.sets,
          reps: exercise.reps,
          type: exercise.type,
          imageUrl: exercise.thumbnailUrl,
          completed: exercise.completed
        } as Exercise;
      })
      .filter(Boolean);
    setFavoriteExercises(favExercises);

    // Load completed exercises from local storage
    const storedCompleted = JSON.parse(localStorage.getItem('completedExercises') || '[]');
    const compExercises = storedCompleted
      .map((id: string) => {
        const exercise = exerciseDetails[id];
        if (!exercise) return null;
        return {
          id: exercise.id,
          title: exercise.title,
          duration: exercise.duration,
          sets: exercise.sets,
          reps: exercise.reps,
          type: exercise.type,
          imageUrl: exercise.thumbnailUrl,
          completed: exercise.completed
        } as Exercise;
      })
      .filter(Boolean);
    setCompletedExercises(compExercises);

    // Load workout completions and streak
    const workoutCompletions = JSON.parse(localStorage.getItem('workout_completions') || '{}');
    const streak = parseInt(localStorage.getItem('workout_streak') || '0', 10);

    // Calculate progress metrics
    const completed = storedCompleted.length;
    const minutesCompleted = compExercises.reduce((total: number, ex: Exercise) => total + ex.duration, 0);
    
    setWeeklyProgress({
      completed,
      total: 35,
      streak,
      minutesCompleted,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <main className="page-container animate-fade-in">
        <h1 className="page-header">Your Dashboard</h1>
        
        {/* Progress Overview Section */}
        <section className="mb-12">
          <h2 className="section-header">Progress Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Completed</h3>
              </div>
              <p className="text-3xl font-bold">
                {weeklyProgress.completed}/{weeklyProgress.total}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">exercises this week</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Workout Time</h3>
              </div>
              <p className="text-3xl font-bold">{weeklyProgress.minutesCompleted}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">minutes this week</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-3">
                <Award className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Streak</h3>
              </div>
              <p className="text-3xl font-bold">{weeklyProgress.streak}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">days in a row</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center mb-3">
                <Heart className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Favorites</h3>
              </div>
              <p className="text-3xl font-bold">{favoriteExercises.length}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">saved exercises</p>
            </div>
          </div>
          
          {/* Weekly Activity */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-4">Weekly Activity</h3>
            
            <div className="grid grid-cols-7 gap-2">
              {weeklyActivityData.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium mb-2">{day.day}</div>
                  <div className="relative mb-2 mx-auto w-12 h-16">
                    <div className="absolute bottom-0 w-full bg-slate-200 dark:bg-slate-800 rounded-sm">
                      <div 
                        className="bg-primary rounded-sm transition-all duration-500"
                        style={{ 
                          height: day.total ? `${(day.completed / day.total) * 100}%` : '0%',
                          minHeight: day.completed ? '4px' : '0' 
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {day.completed}/{day.total}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Favorites Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-header mb-0">Your Favorites</h2>
          </div>
          
          {favoriteExercises.length > 0 ? (
            <div className="space-y-4">
              {favoriteExercises.map((exercise, index) => (
                <div 
                  key={exercise.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ExerciseCard 
                    exercise={exercise} 
                    workoutId={exercise.id.split('-')[0]} // Extract workout ID from exercise ID
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 text-center shadow-sm animate-fade-up">
              <Heart className="h-12 w-12 mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Mark exercises as favorites to save them here for quick access.
              </p>
            </div>
          )}
        </section>
        
        {/* Recently Completed Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-header mb-0">Recently Completed</h2>
          </div>
          
          {completedExercises.length > 0 ? (
            <div className="space-y-4">
              {completedExercises.map((exercise, index) => (
                <div 
                  key={exercise.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ExerciseCard 
                    exercise={exercise} 
                    workoutId={exercise.id.split('-')[0]} // Extract workout ID from exercise ID
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 text-center shadow-sm animate-fade-up">
              <CheckCircle className="h-12 w-12 mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No completed exercises</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                As you complete exercises, they will appear here to track your progress.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
