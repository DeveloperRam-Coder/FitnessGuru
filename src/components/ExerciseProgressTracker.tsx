
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar, TrendingUp, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Exercise } from "@/components/ExerciseCard";

interface ExerciseProgressTrackerProps {
  exerciseId: string;
  exerciseType: "strength" | "cardio" | "flexibility";
  className?: string;
  exercise?: Exercise;
}

interface ProgressEntry {
  date: string;
  value: number;
  notes?: string;
}

export function ExerciseProgressTracker({ 
  exerciseId, 
  exerciseType,
  className 
}: ExerciseProgressTrackerProps) {
  const [progressData, setProgressData] = useState<ProgressEntry[]>([]);
  const [weightInput, setWeightInput] = useState("");
  const [repsInput, setRepsInput] = useState("");
  const [durationInput, setDurationInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const { toast } = useToast();
  
  // Load progress data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem(`exercise_progress_${exerciseId}`);
    if (storedData) {
      setProgressData(JSON.parse(storedData));
    }
  }, [exerciseId]);
  
  const saveProgress = () => {
    const today = new Date().toISOString().split('T')[0];
    let value = 0;
    let errorMessage = "";
    
    // Different input validation based on exercise type
    if (exerciseType === "strength") {
      const weight = parseFloat(weightInput);
      const reps = parseInt(repsInput, 10);
      
      if (isNaN(weight) || weight <= 0) {
        errorMessage = "Please enter a valid weight";
      } else if (isNaN(reps) || reps <= 0) {
        errorMessage = "Please enter a valid number of reps";
      } else {
        // One-rep max estimation formula: weight * (1 + reps/30)
        value = weight * (1 + reps/30);
      }
    } else if (exerciseType === "cardio") {
      const duration = parseInt(durationInput, 10);
      
      if (isNaN(duration) || duration <= 0) {
        errorMessage = "Please enter a valid duration";
      } else {
        value = duration;
      }
    } else {
      // For flexibility, just track occurrences
      value = 1;
    }
    
    if (errorMessage) {
      toast({
        title: "Input Error",
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }
    
    // Create new progress entry
    const newEntry: ProgressEntry = {
      date: today,
      value,
    };
    
    if (noteInput.trim() !== "") {
      newEntry.notes = noteInput;
    }
    
    // Check if there's already an entry for today
    const existingEntryIndex = progressData.findIndex(entry => entry.date === today);
    let updatedData: ProgressEntry[];
    
    if (existingEntryIndex !== -1) {
      // Update existing entry
      updatedData = [...progressData];
      updatedData[existingEntryIndex] = newEntry;
    } else {
      // Add new entry
      updatedData = [...progressData, newEntry];
    }
    
    // Sort by date
    updatedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    // Save to state and localStorage
    setProgressData(updatedData);
    localStorage.setItem(`exercise_progress_${exerciseId}`, JSON.stringify(updatedData));
    
    // Reset inputs
    setWeightInput("");
    setRepsInput("");
    setDurationInput("");
    setNoteInput("");
    
    toast({
      title: "Progress Saved",
      description: "Your exercise progress has been recorded.",
    });
  };
  
  // Get appropriate label based on exercise type
  const getValueLabel = () => {
    if (exerciseType === "strength") return "Estimated 1RM (lbs)";
    if (exerciseType === "cardio") return "Duration (minutes)";
    return "Completion";
  };
  
  // Format value for display
  const formatValue = (value: number) => {
    if (exerciseType === "strength") return `${Math.round(value)} lbs`;
    if (exerciseType === "cardio") return `${value} min`;
    return "Completed";
  };
  
  // Calculate stats
  const calculateStats = () => {
    if (progressData.length === 0) return { best: 0, average: 0, streak: 0 };
    
    const values = progressData.map(entry => entry.value);
    const best = Math.max(...values);
    const average = values.reduce((sum, val) => sum + val, 0) / values.length;
    
    // Calculate current streak
    let streak = 0;
    const sortedDates = [...progressData]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(entry => entry.date);
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Check if last entry was today or yesterday
    const lastEntryDate = new Date(sortedDates[0]);
    const isRecent = 
      lastEntryDate.toDateString() === today.toDateString() || 
      lastEntryDate.toDateString() === yesterday.toDateString();
    
    if (isRecent) {
      streak = 1;
      
      // Count back days
      for (let i = 1; i < sortedDates.length; i++) {
        const currentDate = new Date(sortedDates[i - 1]);
        const prevDate = new Date(sortedDates[i]);
        
        // Check if dates are consecutive
        const diffTime = currentDate.getTime() - prevDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          streak++;
        } else {
          break;
        }
      }
    }
    
    return { best, average, streak };
  };
  
  const stats = calculateStats();
  
  return (
    <div className={cn("bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm", className)}>
      <h3 className="font-semibold flex items-center mb-4">
        <TrendingUp className="h-4 w-4 mr-2 text-primary" /> 
        Progress Tracker
      </h3>
      
      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-center">
          <p className="text-xs text-slate-600 dark:text-slate-400">Best</p>
          <p className="font-bold">{formatValue(stats.best)}</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-center">
          <p className="text-xs text-slate-600 dark:text-slate-400">Average</p>
          <p className="font-bold">{exerciseType === "strength" ? `${Math.round(stats.average)} lbs` : 
                                  exerciseType === "cardio" ? `${Math.round(stats.average)} min` : "N/A"}</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-center">
          <p className="text-xs text-slate-600 dark:text-slate-400">Streak</p>
          <p className="font-bold">{stats.streak} days</p>
        </div>
      </div>
      
      {/* Progress Chart */}
      {progressData.length > 0 && (
        <div className="h-[200px] mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => {
                  const d = new Date(date);
                  return `${d.getMonth()+1}/${d.getDate()}`;
                }}
              />
              <YAxis />
              <Tooltip 
                formatter={(value) => formatValue(value as number)}
                labelFormatter={(date) => {
                  const d = new Date(date as string);
                  return d.toLocaleDateString();
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      
      {/* Input Form */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm flex items-center mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          Log Today's Progress
        </h4>
        
        {exerciseType === "strength" && (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
                Weight (lbs)
              </label>
              <Input
                type="number"
                min="0"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                placeholder="135"
              />
            </div>
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
                Reps
              </label>
              <Input
                type="number"
                min="0"
                value={repsInput}
                onChange={(e) => setRepsInput(e.target.value)}
                placeholder="8"
              />
            </div>
          </div>
        )}
        
        {exerciseType === "cardio" && (
          <div>
            <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
              Duration (minutes)
            </label>
            <Input
              type="number"
              min="0"
              value={durationInput}
              onChange={(e) => setDurationInput(e.target.value)}
              placeholder="20"
            />
          </div>
        )}
        
        <div>
          <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
            Notes (optional)
          </label>
          <Input
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="How did it feel?"
          />
        </div>
        
        <Button 
          onClick={saveProgress}
          className="w-full"
        >
          <BarChart2 className="h-4 w-4 mr-1" />
          Save Progress
        </Button>
      </div>
      
      {/* Recent Entries */}
      {progressData.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Recent Entries</h4>
          <div className="max-h-[200px] overflow-y-auto">
            {[...progressData]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 5)
              .map((entry, index) => (
                <div 
                  key={index} 
                  className="border-b last:border-b-0 border-slate-200 dark:border-slate-800 py-2"
                >
                  <div className="flex justify-between">
                    <span className="text-sm">{new Date(entry.date).toLocaleDateString()}</span>
                    <span className="font-medium text-sm">{formatValue(entry.value)}</span>
                  </div>
                  {entry.notes && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {entry.notes}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
