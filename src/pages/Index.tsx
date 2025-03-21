
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { WorkoutCard, Workout } from "@/components/WorkoutCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ChevronRight, Calendar, BarChart2, Dumbbell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = days[new Date().getDay()];
    const workout = mockWorkouts.find(w => w.id.toLowerCase() === today);
    if (workout) {
      setTodayWorkout(workout);
    }
    
    const completed = mockWorkouts.reduce((acc, w) => acc + w.completedExercises, 0);
    const total = mockWorkouts.reduce((acc, w) => acc + w.exerciseCount, 0);
    setWeeklyProgress({ completed, total });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-muted py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Body,
                    <br />
                    Elevate Your Life
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Expert-designed workouts, personalized tracking, and a supportive community to help you achieve your fitness goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/daily-workout">
                      Start Your Journey
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>

        {/* Today's Workout Section */}
        {todayWorkout && (
          <section className="py-12 bg-background border-t">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Today's Workout</h2>
                    <p className="text-muted-foreground">
                      Ready for your {todayWorkout.day} workout? Here's what's planned.
                    </p>
                  </div>
                  <Card>
                    <CardContent className="p-0">
                      <WorkoutCard workout={todayWorkout} />
                    </CardContent>
                  </Card>
                </div>
                <Card className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Weekly Progress</h3>
                    <ProgressBar 
                      value={weeklyProgress.completed} 
                      max={weeklyProgress.total}
                      label="Overall Completion"
                      showPercentage
                      className="mb-6"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <div className="flex items-center text-primary">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="font-medium">Active Days</span>
                          </div>
                          <p className="text-2xl font-bold">
                            {mockWorkouts.filter(w => w.completedExercises > 0).length}/7
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <div className="flex items-center text-primary">
                            <BarChart2 className="h-4 w-4 mr-2" />
                            <span className="font-medium">Exercises Done</span>
                          </div>
                          <p className="text-2xl font-bold">
                            {weeklyProgress.completed}/{weeklyProgress.total}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Weekly Schedule Section */}
        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Weekly Schedule</h2>
              <Button variant="ghost" asChild>
                <Link to="/daily-workout" className="gap-2">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockWorkouts.map((workout, index) => (
                <Card key={workout.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <WorkoutCard workout={workout} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Why Choose Our Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert-Designed Workouts</h3>
                  <p className="text-muted-foreground">
                    All our workouts are designed by certified fitness professionals to ensure effectiveness and safety.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Structured Weekly Plan</h3>
                  <p className="text-muted-foreground">
                    Follow our balanced weekly plan that targets all muscle groups and includes rest days for optimal recovery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Progress Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your completed exercises and monitor your progress to stay motivated and accountable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center text-primary font-bold text-xl mb-6">
              <Dumbbell className="h-6 w-6 mr-2" />
              <span>Fitness Guru</span>
            </div>
            <p className="text-center text-muted-foreground mb-4">
              © 2023 Fitness Guru. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="link" asChild>
                <a href="#">Terms</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#">Privacy</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#">Contact</a>
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
