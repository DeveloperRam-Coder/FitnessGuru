
import { useState, useEffect } from "react";
import { StickyNote, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface WorkoutNotesProps {
  workoutId: string;
  className?: string;
}

export function WorkoutNotes({ workoutId, className }: WorkoutNotesProps) {
  const [notes, setNotes] = useState("");
  const { toast } = useToast();
  
  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem(`workout_notes_${workoutId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [workoutId]);
  
  const handleSaveNotes = () => {
    localStorage.setItem(`workout_notes_${workoutId}`, notes);
    toast({
      title: "Notes saved",
      description: "Your workout notes have been saved successfully.",
    });
  };
  
  return (
    <div className={cn("bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm", className)}>
      <h3 className="font-semibold flex items-center mb-3">
        <StickyNote className="h-4 w-4 mr-2 text-primary" /> 
        Workout Notes
      </h3>
      
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes about this workout..."
        className="min-h-[120px] mb-3"
      />
      
      <Button 
        size="sm" 
        onClick={handleSaveNotes}
        className="w-full"
      >
        <Save className="h-4 w-4 mr-1" /> Save Notes
      </Button>
    </div>
  );
}
