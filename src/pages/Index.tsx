
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { WorkoutCard, Workout } from "@/components/WorkoutCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ChevronRight, Calendar, BarChart2, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for the weekly workouts
const mockWorkouts: Workout[] = [
  {
    id: "monday",
    title: "Upper Body Strength",
    day: "Monday",
    description: "Focus on chest, shoulders and triceps with compound movements.",
    duration: 45,
    exerciseCount: 5,
    completedExercises: 3,
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "tuesday",
    title: "Lower Body Power",
    day: "Tuesday",
    description: "Build strength in your legs with squats, lunges and deadlifts.",
    duration: 50,
    exerciseCount: 6,
    completedExercises: 0,
    imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "wednesday",
    title: "Core & Cardio",
    day: "Wednesday",
    description: "High intensity interval training focused on your core and cardiovascular system.",
    duration: 30,
    exerciseCount: 8,
    completedExercises: 0,
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "thursday",
    title: "Pull Day",
    day: "Thursday",
    description: "Focus on back and biceps with rows and pull exercises.",
    duration: 40,
    exerciseCount: 5,
    completedExercises: 0,
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "friday",
    title: "Full Body Mobility",
    day: "Friday",
    description: "Improve flexibility and mobility with dynamic stretches and movements.",
    duration: 35,
    exerciseCount: 7,
    completedExercises: 0,
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "saturday",
    title: "Active Recovery",
    day: "Saturday",
    description: "Light cardio and stretching to promote recovery and blood flow.",
    duration: 25,
    exerciseCount: 4,
    completedExercises: 0,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "sunday",
    title: "Rest Day",
    day: "Sunday",
    description: "Give your body the rest it needs to grow stronger.",
    duration: 0,
    exerciseCount: 0,
    completedExercises: 0,
    imageUrl: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1600&auto=format&fit=crop"
  }
];

const Index = () => {
  const [todayWorkout, setTodayWorkout] = useState<Workout | null>(null);
  const [weeklyProgress, setWeeklyProgress] = useState({
    completed: 0,
    total: 0
  });

  useEffect(() => {
    // Get today's day name
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = days[new Date().getDay()];
    
    // Find today's workout
    const workout = mockWorkouts.find(w => w.id.toLowerCase() === today);
    if (workout) {
      setTodayWorkout(workout);
    }
    
    // Calculate weekly progress
    const completed = mockWorkouts.reduce((acc, w) => acc + w.completedExercises, 0);
    const total = mockWorkouts.reduce((acc, w) => acc + w.exerciseCount, 0);
    setWeeklyProgress({ completed, total });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
          <div className="page-container py-16 md:py-24">
            <div className="max-w-2xl animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Transform Your Body
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Follow our expert-designed video workouts, track your progress, and achieve your fitness goals.
              </p>
              <Link 
                to="/daily-workout" 
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Start Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop" 
              alt="Fitness Background"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        </section>
        
        {/* Today's Workout Section */}
        {todayWorkout && (
          <section className="bg-white dark:bg-slate-900 py-12 border-b border-slate-200 dark:border-slate-800">
            <div className="page-container">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 animate-fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Today's Workout</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Ready for your {todayWorkout.day} workout? Here's what's planned.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <WorkoutCard workout={todayWorkout} />
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-xl p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-xl font-semibold mb-4">Weekly Progress</h3>
                  <ProgressBar 
                    value={weeklyProgress.completed} 
                    max={weeklyProgress.total}
                    label="Overall Completion"
                    showPercentage
                    className="mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                      <div className="flex items-center text-primary mb-2">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Active Days</span>
                      </div>
                      <p className="text-2xl font-bold">
                        {mockWorkouts.filter(w => w.completedExercises > 0).length}/7
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                      <div className="flex items-center text-primary mb-2">
                        <BarChart2 className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Exercises Done</span>
                      </div>
                      <p className="text-2xl font-bold">
                        {weeklyProgress.completed}/{weeklyProgress.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Weekly Schedule Section */}
        <section className="page-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Weekly Schedule</h2>
            <Link 
              to="/daily-workout" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockWorkouts.map((workout, index) => (
              <div 
                key={workout.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <WorkoutCard workout={workout} />
              </div>
            ))}
          </div>
        </section>
        
        {/* Features Section */}
        <section className="page-container py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Our Program</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Designed Workouts</h3>
              <p className="text-slate-600 dark:text-slate-400">
                All our workouts are designed by certified fitness professionals to ensure effectiveness and safety.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Weekly Plan</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Follow our balanced weekly plan that targets all muscle groups and includes rest days for optimal recovery.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Track your completed exercises and monitor your progress to stay motivated and accountable.
              </p>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="page-container">
            <div className="flex items-center justify-center text-primary font-bold text-xl mb-6">
              <Dumbbell className="h-6 w-6 mr-2" />
              <span>Fitness Guru</span>
            </div>
            <p className="text-center text-slate-400 mb-4">
              © 2023 Fitness Guru. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
