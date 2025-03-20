
import { Workout } from "@/components/WorkoutCard";
import { Exercise } from "@/components/ExerciseCard";

// Day 1: Chest & Triceps
const mondayExercises: Exercise[] = [
  {
    id: "bench-press",
    title: "Bench Press",
    duration: 12,
    sets: 4,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "incline-press",
    title: "Incline Bench Press",
    duration: 10,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1598268030450-5d5579b5d11e?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "push-ups",
    title: "Push-Ups",
    duration: 5,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-b106186f57b6?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "dips",
    title: "Triceps Dips",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "chest-flys",
    title: "Dumbbell Chest Flys",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "tricep-extension",
    title: "Tricep Extensions",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1598575285627-d1ded1921f95?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "skull-crushers",
    title: "Skull Crushers",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "chest-stretching",
    title: "Chest & Triceps Stretching",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1601412436167-d1fefeaba35b?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

// Day 2: Back & Biceps
const tuesdayExercises: Exercise[] = [
  {
    id: "deadlifts",
    title: "Conventional Deadlifts",
    duration: 12,
    sets: 4,
    reps: 8,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "pull-ups",
    title: "Pull-Ups",
    duration: 10,
    sets: 4,
    reps: 8,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1566351557863-467d204a9f8a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "barbell-rows",
    title: "Barbell Rows",
    duration: 10,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1542466500-dccb2789cbbb?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "dumbbell-rows",
    title: "One-Arm Dumbbell Rows",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1603233720024-4ee9b8b8b510?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "lat-pulldown",
    title: "Lat Pulldown",
    duration: 10,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1597452485677-d661670d9640?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "face-pulls",
    title: "Face Pulls",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "bicep-curls",
    title: "Dumbbell Bicep Curls",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1581009137363-edd0ed4f7666?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "preacher-curls",
    title: "Preacher Curls",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1534368786749-d40d26006360?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

// Day 3: Legs
const wednesdayExercises: Exercise[] = [
  {
    id: "squats",
    title: "Barbell Squats",
    duration: 12,
    sets: 4,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "lunges",
    title: "Walking Lunges",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "leg-press",
    title: "Leg Press",
    duration: 10,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "leg-curls",
    title: "Hamstring Curls",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "leg-extensions",
    title: "Leg Extensions",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1614236224416-9a88c2e195e1?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "calf-raises",
    title: "Standing Calf Raises",
    duration: 6,
    sets: 3,
    reps: 20,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1597452485677-d661670d9640?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "split-squats",
    title: "Bulgarian Split Squats",
    duration: 10,
    sets: 3,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1544033527-b543fe5f5d37?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "leg-stretching",
    title: "Lower Body Stretching",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

// Day 4: Shoulders & Abs
const thursdayExercises: Exercise[] = [
  {
    id: "overhead-press",
    title: "Overhead Press",
    duration: 10,
    sets: 4,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1580086319619-3ed498161c77?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "arnold-press",
    title: "Arnold Press",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "lateral-raises",
    title: "Lateral Raises",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "shoulder-press",
    title: "Seated Shoulder Press",
    duration: 8,
    sets: 3,
    reps: 10,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "shrugs",
    title: "Dumbbell Shrugs",
    duration: 6,
    sets: 3,
    reps: 15,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1532384555668-bc0c32a17ffd?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "planks",
    title: "Plank Hold",
    duration: 5,
    sets: 3,
    reps: 0,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1566241142559-40a9552c8a76?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "russian-twists",
    title: "Russian Twists",
    duration: 6,
    sets: 3,
    reps: 20,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "bicycle-crunches",
    title: "Bicycle Crunches",
    duration: 6,
    sets: 3,
    reps: 20,
    type: "strength",
    imageUrl: "https://images.unsplash.com/photo-1544033527-b543fe5f5d37?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

// Day 5: Cardio & HIIT
const fridayExercises: Exercise[] = [
  {
    id: "jump-rope",
    title: "Jump Rope",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "burpees",
    title: "Burpees",
    duration: 8,
    sets: 3,
    reps: 12,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1590239926044-4a753ddc6138?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "mountain-climbers",
    title: "Mountain Climbers",
    duration: 5,
    sets: 3,
    reps: 20,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "battle-ropes",
    title: "Battle Ropes",
    duration: 8,
    sets: 4,
    reps: 0,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1520046190395-56b20fa6a5e5?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "cycling",
    title: "Indoor Cycling",
    duration: 15,
    sets: 0,
    reps: 0,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "box-jumps",
    title: "Box Jumps",
    duration: 8,
    sets: 3,
    reps: 15,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "jumping-jacks",
    title: "Jumping Jacks",
    duration: 5,
    sets: 0,
    reps: 0,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

// Day 6: Yoga & Mobility
const saturdayExercises: Exercise[] = [
  {
    id: "downward-dog",
    title: "Downward Dog",
    duration: 5,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "cat-cow",
    title: "Cat-Cow Stretch",
    duration: 5,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "warrior-pose",
    title: "Warrior Pose Sequence",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "childs-pose",
    title: "Child's Pose",
    duration: 5,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "hip-opener",
    title: "Hip Opener Sequence",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "pigeon-pose",
    title: "Pigeon Pose",
    duration: 6,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "sun-salutation",
    title: "Sun Salutation Sequence",
    duration: 15,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1506126944674-00c6c192e0a3?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "foam-rolling",
    title: "Foam Rolling",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1570440828762-a64930fc1c54?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

// Day 7: Active Rest & Recovery
const sundayExercises: Exercise[] = [
  {
    id: "light-jog",
    title: "Light Jogging",
    duration: 15,
    sets: 0,
    reps: 0,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "stretching",
    title: "Full Body Stretching",
    duration: 15,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "breathing",
    title: "Breathing Exercises",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "swimming",
    title: "Light Swimming",
    duration: 20,
    sets: 0,
    reps: 0,
    type: "cardio",
    imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  {
    id: "massage",
    title: "Self-Massage Techniques",
    duration: 10,
    sets: 0,
    reps: 0,
    type: "flexibility",
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    completed: false
  }
];

export const workoutData: Record<string, Workout> = {
  monday: {
    id: "monday",
    title: "Chest & Triceps",
    day: "Monday",
    description: "Build upper body strength with focused chest and triceps exercises.",
    duration: mondayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: mondayExercises.length,
    completedExercises: mondayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  tuesday: {
    id: "tuesday",
    title: "Back & Biceps",
    day: "Tuesday",
    description: "Develop a powerful back and arms with these pulling-focused exercises.",
    duration: tuesdayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: tuesdayExercises.length,
    completedExercises: tuesdayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1584952811565-c4c4013e9c26?q=80&w=800&auto=format&fit=crop"
  },
  wednesday: {
    id: "wednesday",
    title: "Legs",
    day: "Wednesday",
    description: "Build strength in your legs with compound movements and isolation exercises.",
    duration: wednesdayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: wednesdayExercises.length,
    completedExercises: wednesdayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=800&auto=format&fit=crop"
  },
  thursday: {
    id: "thursday",
    title: "Shoulders & Abs",
    day: "Thursday",
    description: "Sculpt your shoulders and core with these targeted exercises.",
    duration: thursdayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: thursdayExercises.length,
    completedExercises: thursdayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
  },
  friday: {
    id: "friday",
    title: "Cardio & HIIT",
    day: "Friday",
    description: "High intensity interval training focused on your cardiovascular system.",
    duration: fridayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: fridayExercises.length,
    completedExercises: fridayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=800&auto=format&fit=crop"
  },
  saturday: {
    id: "saturday",
    title: "Yoga & Mobility",
    day: "Saturday",
    description: "Improve flexibility and mobility with dynamic stretches and yoga poses.",
    duration: saturdayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: saturdayExercises.length,
    completedExercises: saturdayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  },
  sunday: {
    id: "sunday",
    title: "Active Recovery",
    day: "Sunday",
    description: "Light activity and recovery techniques to promote healing and prepare for the next week.",
    duration: sundayExercises.reduce((total, ex) => total + ex.duration, 0),
    exerciseCount: sundayExercises.length,
    completedExercises: sundayExercises.filter(ex => ex.completed).length,
    imageUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=800&auto=format&fit=crop"
  }
};

export const exerciseData: Record<string, Exercise[]> = {
  monday: mondayExercises,
  tuesday: tuesdayExercises,
  wednesday: wednesdayExercises,
  thursday: thursdayExercises,
  friday: fridayExercises,
  saturday: saturdayExercises,
  sunday: sundayExercises
};
