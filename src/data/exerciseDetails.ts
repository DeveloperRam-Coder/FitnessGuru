
import { Exercise } from '@/components/ExerciseCard';

interface ExerciseDetail extends Exercise {
  thumbnailUrl: string;
  restTime: number;
  description: string;
  targetMuscles: string[];
  instructions: string[];
  tips: string[];
  videoUrl: string;
  muscleGroups: string[];
  imageUrl: string;
  day:string;
}

export const exerciseDetails: Record<string, ExerciseDetail> = {
  // DAY 1: CHEST & TRICEPS
  "bench-press": {
    id: "bench-press",
    title: "Bench Press",
    day: "monday",
    description: "A fundamental compound exercise for building chest strength and muscle mass.",
    duration: 12,
    sets: 4,
    reps: 10,
    restTime: 120,
    type: "strength",
    muscleGroups: ["Chest", "Front Deltoids", "Triceps"],
    instructions: [
      "Lie flat on the bench with feet firmly on the ground",
      "Grip the bar slightly wider than shoulder width",
      "Unrack the bar and lower it to your chest with control",
      "Press the bar back up to the starting position",
      "Keep your wrists straight and elbows at about 45 degrees"
    ],
    tips: [
      "Keep your core tight throughout the movement",
      "Drive your feet into the ground for stability",
      "Don't bounce the bar off your chest",
      "Maintain a slight arch in your lower back"
    ],
    videoUrl: "https://player.vimeo.com/external/456913031.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Barbell", "Bench", "Weight Plates", "Safety Racks"],
    difficulty: "intermediate",
    calories: 150,
    alternatives: ["Dumbbell Press", "Push-Ups", "Floor Press"],
    warmupSets: 2
  },
  
  "incline-press": {
    id: "incline-press",
    title: "Incline Bench Press",
    day: "monday",
    description: "An upper chest focused pressing movement that targets the clavicular head of the pectoralis major.",
    duration: 10,
    sets: 3,
    reps: 12,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Upper Chest", "Front Deltoids", "Triceps"],
    instructions: [
      "Set the bench angle between 30-45 degrees",
      "Lie back on the incline bench with feet flat",
      "Grip the bar slightly wider than shoulder width",
      "Lower the bar to your upper chest",
      "Press the bar up and slightly back to the starting position"
    ],
    tips: [
      "Keep your back pressed against the bench",
      "Don't let your elbows flare out too much",
      "Focus on squeezing your upper chest",
      "Use a slightly narrower grip than flat bench"
    ],
    videoUrl: "https://player.vimeo.com/external/456913044.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1598268030450-5d5579b5d11e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Incline Bench", "Barbell", "Weight Plates", "Safety Racks"],
    difficulty: "intermediate",
    calories: 130,
    alternatives: ["Incline Dumbbell Press", "Landmine Press"],
    warmupSets: 2
  },

  // DAY 2: BACK & BICEPS
  "deadlifts": {
    id: "deadlifts",
    title: "Conventional Deadlifts",
    day: "tuesday",
    description: "A fundamental compound exercise that primarily targets the back, hamstrings, and core.",
    duration: 12,
    sets: 4,
    reps: 8,
    restTime: 120,
    type: "strength",
    muscleGroups: ["Lower Back", "Upper Back", "Hamstrings", "Glutes", "Core"],
    instructions: [
      "Stand with feet hip-width apart, toes under the barbell.",
      "Bend at hips and knees, keeping back straight and chest up.",
      "Grip the bar just outside your legs.",
      "Drive through your heels, extending hips and knees to stand up.",
      "Return the weight to the ground with controlled movement."
    ],
    tips: [
      "Keep the bar close to your body throughout the movement.",
      "Engage your lats before lifting to protect your lower back.",
      "Don't round your back - maintain a neutral spine.",
      "Think of the movement as pushing the ground away rather than pulling the weight."
    ],
    videoUrl: "https://player.vimeo.com/external/456913031.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    difficulty: "advanced",
    equipment: ["Barbell", "Weight Plates", "Optional: Belt"],
    calories: 200,
    alternatives: ["Romanian Deadlifts", "Rack Pulls", "Good Mornings"],
    warmupSets: 2
  },
  "pull-ups": {
    id: "pull-ups",
    title: "Pull-Ups",
    day: "tuesday",
    description: "A challenging bodyweight exercise that builds upper body strength and muscle.",
    duration: 10,
    sets: 4,
    reps: 8,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Latissimus Dorsi", "Biceps", "Forearms", "Core"],
    instructions: [
      "Grip the pull-up bar with hands slightly wider than shoulder-width",
      "Hang with arms fully extended and engage your shoulder blades",
      "Pull yourself up until your chin clears the bar",
      "Lower yourself with control to the starting position",
      "Repeat for prescribed reps"
    ],
    tips: [
      "Focus on pulling with your back muscles, not just your arms",
      "Keep your core engaged throughout the movement",
      "Avoid swinging or using momentum",
      "If needed, use assisted pull-up machines or resistance bands to build strength"
    ],
    videoUrl: "https://player.vimeo.com/external/456913054.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1598971639058-b106186f57b6?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Pull-up Bar", "Optional: Resistance Bands"],
    difficulty: "advanced",
    calories: 100,
    alternatives: ["Lat Pulldowns", "Inverted Rows", "Band-Assisted Pull-ups"],
    warmupSets: 2
  },

  "barbell-rows": {
    id: "barbell-rows",
    title: "Barbell Rows",
    day: "tuesday",
    description: "A compound back exercise that targets multiple muscles in the upper and middle back.",
    duration: 10,
    sets: 4,
    reps: 12,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Upper Back", "Lats", "Rear Deltoids", "Biceps"],
    instructions: [
      "Stand with feet shoulder-width apart, holding a barbell",
      "Hinge at hips until torso is nearly parallel to floor",
      "Keep back straight and core engaged",
      "Pull barbell to lower chest/upper abs",
      "Lower with control and repeat"
    ],
    tips: [
      "Keep your back straight throughout the movement",
      "Squeeze your shoulder blades at the top",
      "Don't let the weight pull you forward",
      "Use a weight that allows proper form"
    ],
    videoUrl: "https://player.vimeo.com/external/456913066.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Barbell", "Weight Plates"],
    difficulty: "intermediate",
    calories: 120,
    alternatives: ["Dumbbell Rows", "T-Bar Rows", "Cable Rows"],
    warmupSets: 2
  },
  "plank": {
    id: "plank",
    title: "Plank Hold",
    day: "wednesday",
    description: "A fundamental core exercise that builds stability and endurance.",
    duration: 5,
    sets: 3,
    reps: 1,
    restTime: 60,
    type: "strength",
    muscleGroups: ["Core", "Shoulders", "Lower Back", "Glutes"],
    instructions: [
      "Start in a push-up position with forearms on the ground.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and glutes.",
      "Hold the position for the prescribed duration.",
      "Maintain steady breathing throughout."
    ],
    tips: [
      "Don't let your hips sag or pike up.",
      "Keep your neck neutral - look at the floor.",
      "Squeeze your glutes to maintain proper position.",
      "If needed, drop to your knees to build endurance."
    ],
    videoUrl: "https://player.vimeo.com/external/456913088.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1566241142559-40e1742168f9?q=80&w=800&auto=format&fit=crop",
    completed: false,
    difficulty: "beginner",
    equipment: [],
    calories: 50,
    alternatives: ["Side Plank", "Bird Dog", "Dead Bug"],
    warmupSets: 0
  },
  "mountain-climbers": {
    id: "mountain-climbers",
    title: "Mountain Climbers",
    day: "wednesday",
    description: "A dynamic cardio exercise that targets the core and improves coordination.",
    duration: 8,
    sets: 3,
    reps: 30,
    restTime: 45,
    type: "cardio",
    targetMuscles: ["Core", "Hip Flexors", "Shoulders", "Quads"],
    instructions: [
      "Start in a high plank position.",
      "Drive one knee toward your chest.",
      "Quickly switch legs in a running motion.",
      "Keep your core tight and back flat.",
      "Maintain a steady pace."
    ],
    tips: [
      "Start slow and build up speed.",
      "Keep your hips level throughout the movement.",
      "Breathe rhythmically with the movement.",
      "Focus on form over speed."
    ],
    videoUrl: "https://player.vimeo.com/external/456913088.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: [],
    difficulty: "beginner",
    calories: 100,
    alternatives: ["High Knees", "Burpees", "Running in Place"],
    warmupSets: 1
  },

  "russian-twists": {
    id: "russian-twists",
    title: "Russian Twists",
    day: "wednesday",
    description: "An effective core exercise that targets the obliques and improves rotational strength.",
    duration: 6,
    sets: 3,
    reps: 20,
    restTime: 45,
    type: "strength",
    targetMuscles: ["Obliques", "Core", "Hip Flexors"],
    instructions: [
      "Sit with knees bent and feet lifted slightly off the ground",
      "Lean back slightly, maintaining a straight spine",
      "Hold your hands together or hold a weight at chest level",
      "Rotate your torso from side to side",
      "Touch the ground on each side with your hands"
    ],
    tips: [
      "Keep your feet elevated throughout the movement",
      "Engage your core throughout the exercise",
      "Control the movement - don't rush",
      "Progress by adding weight or increasing rotation range"
    ],
    videoUrl: "https://player.vimeo.com/external/456913099.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Optional: Weight Plate or Dumbbell"],
    difficulty: "intermediate",
    calories: 80,
    alternatives: ["Bicycle Crunches", "Side Bends", "Wood Chops"],
    warmupSets: 1
  },

  "bicycle-crunches": {
    id: "bicycle-crunches",
    title: "Bicycle Crunches",
    day: "wednesday",
    description: "A dynamic core exercise that targets multiple areas of the abdominals.",
    duration: 6,
    sets: 3,
    reps: 30,
    restTime: 45,
    type: "strength",
    targetMuscles: ["Rectus Abdominis", "Obliques", "Hip Flexors"],
    instructions: [
      "Lie on your back with hands behind your head",
      "Lift your shoulders off the ground and raise your legs",
      "Bring one knee towards your chest while extending the other leg",
      "Rotate your torso to bring opposite elbow to knee",
      "Alternate sides in a pedaling motion"
    ],
    tips: [
      "Keep your lower back pressed against the ground",
      "Don't pull on your neck with your hands",
      "Focus on the rotation and contraction",
      "Maintain a controlled pace"
    ],
    videoUrl: "https://player.vimeo.com/external/456913111.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: [],
    difficulty: "intermediate",
    calories: 70,
    alternatives: ["Reverse Crunches", "Russian Twists", "Dead Bugs"],
    warmupSets: 1
  },

  "russian-twists-2": {
    id: "russian-twists-2",
    title: "Russian Twists",
    day: "wednesday",
    description: "A rotational exercise that targets the obliques and core muscles.",
    duration: 6,
    sets: 3,
    reps: 20,
    restTime: 45,
    type: "strength",
    muscleGroups: ["Obliques", "Rectus Abdominis", "Hip Flexors"],
    targetMuscles: ["Obliques", "Rectus Abdominis", "Hip Flexors"],
    instructions: [
      "Sit with knees bent and feet elevated.",
      "Lean back slightly, keeping your back straight.",
      "Hold a weight or plate at chest level.",
      "Rotate your torso from side to side.",
      "Touch the weight to the ground on each side."
    ],
    tips: [
      "Keep your chest up throughout the movement.",
      "Start without weight to perfect form.",
      "Control the rotation - don't swing.",
      "Lift your feet higher to increase difficulty."
    ],
    videoUrl: "https://player.vimeo.com/external/456913111.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Optional: Weight Plate or Dumbbell"],
    difficulty: "intermediate",
    calories: 70,
    alternatives: ["Bicycle Crunches", "Side Bends", "Wood Chops"],
    warmupSets: 1
  },
  "barbell-rows-2": {
    id: "barbell-rows-2",
    title: "Barbell Rows",
    day: "tuesday",
    description: "A compound pulling movement that targets the middle back and biceps.",
    duration: 10,
    sets: 3,
    reps: 12,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Middle Back", "Lats", "Rear Deltoids", "Biceps"],
    targetMuscles: ["Middle Back", "Lats", "Rear Deltoids", "Biceps"],
    instructions: [
      "Bend at your hips and knees, keeping your back straight.",
      "Grip the barbell with hands slightly wider than shoulder-width.",
      "Pull the bar to your lower chest/upper abdomen.",
      "Lower the weight with control.",
      "Maintain a strong, stable position throughout."
    ],
    tips: [
      "Keep your core tight and back straight.",
      "Focus on squeezing your shoulder blades together.",
      "Don't let the weight pull you forward.",
      "Control the eccentric (lowering) portion of the movement."
    ],
    videoUrl: "https://player.vimeo.com/external/456913077.hd.mp4?s=9355c3b0c3a2a292d4a635bc52c498b4a7dff1e7&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1598971639058-b106186f57b6?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-b106186f57b6?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Barbell", "Weight Plates"],
    difficulty: "intermediate",
    calories: 120,
    alternatives: ["Dumbbell Rows", "T-Bar Rows", "Cable Rows"],
    warmupSets: 2
  },
  // DAY 1: CHEST & TRICEPS
  "bench-press-alt": {
    id: "bench-press-alt",
    title: "Bench Press",
    day: "monday",
    description: "The bench press is a compound exercise that targets the chest, shoulders, and triceps.",
    duration: 12,
    sets: 4,
    reps: 10,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Chest", "Shoulders", "Triceps"],
    targetMuscles: ["Chest", "Shoulders", "Triceps"],
    instructions: [
      "Lie flat on the bench with your feet on the ground.",
      "Grip the bar slightly wider than shoulder-width apart.",
      "Unrack the bar and lower it to the middle of your chest.",
      "Press the bar back up to starting position, extending your arms without locking elbows.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your wrists straight and elbows at about a 45-degree angle from your body.",
      "Maintain a slight arch in your lower back.",
      "Plant your feet firmly on the ground for stability.",
      "Exhale on the push, inhale on the way down."
    ],
    videoUrl: "https://player.vimeo.com/external/426291253.hd.mp4?s=66afd994a248a1dd5856af670c8f46d66bac0cadb&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Barbell", "Bench", "Weight Plates", "Safety Racks"],
    difficulty: "intermediate",
    calories: 150,
    alternatives: ["Dumbbell Press", "Push-Ups", "Floor Press"],
    warmupSets: 2
  },
  "incline-press-alt": {
    id: "incline-press-alt",
    title: "Incline Bench Press",
    day: "monday",
    description: "The incline bench press emphasizes the upper chest and anterior deltoids.",
    duration: 10,
    sets: 3,
    reps: 12,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Upper Chest", "Shoulders", "Triceps"],
    targetMuscles: ["Upper Chest", "Shoulders", "Triceps"],
    instructions: [
      "Set the bench to a 30-45 degree incline.",
      "Lie on the bench with your feet flat on the floor.",
      "Grip the bar slightly wider than shoulder width.",
      "Lower the bar to the upper part of your chest.",
      "Press the bar back up to starting position."
    ],
    tips: [
      "Keep your back and glutes in contact with the bench.",
      "The steeper the incline, the more shoulders are involved.",
      "Focus on squeezing your chest at the top of the movement.",
      "Don't let the bar bounce off your chest."
    ],
    videoUrl: "https://player.vimeo.com/external/440230236.hd.mp4?s=3af8be88f98613c4c900582bdd292b2fe3af35cc&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1598268030450-5d5579b5d11e?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1598268030450-5d5579b5d11e?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Incline Bench", "Barbell", "Weight Plates", "Safety Racks"],
    difficulty: "intermediate",
    calories: 130,
    alternatives: ["Incline Dumbbell Press", "Landmine Press"],
    warmupSets: 2
  },
  "push-ups": {
    id: "push-ups",
    title: "Push-Ups",
    day: "monday",
    description: "A bodyweight exercise that targets the chest, shoulders, triceps, and core.",
    duration: 5,
    sets: 3,
    reps: 15,
    restTime: 60,
    type: "strength",
    targetMuscles: ["Chest", "Shoulders", "Triceps", "Core"],
    instructions: [
      "Place your hands slightly wider than shoulder-width apart.",
      "Extend your legs back with your weight on your toes.",
      "Keep your body in a straight line from head to heels.",
      "Lower your body until your chest nearly touches the floor.",
      "Push yourself back up to the starting position."
    ],
    tips: [
      "Keep your core engaged throughout the movement.",
      "Don't let your hips sag or pike up.",
      "Focus on a full range of motion.",
      "Look slightly ahead rather than down to maintain proper alignment."
    ],
    videoUrl: "https://player.vimeo.com/external/386243469.hd.mp4?s=86f87656d93e38a50d424e5ae9d95c002b934744&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1598971639058-b106186f57b6?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  "dips": {
    id: "dips",
    title: "Triceps Dips",
    day: "monday",
    description: "Dips are a compound movement that primarily target the triceps, with secondary emphasis on the chest and shoulders.",
    duration: 8,
    sets: 3,
    reps: 12,
    restTime: 60,
    type: "strength",
    targetMuscles: ["Triceps", "Chest", "Shoulders"],
    instructions: [
      "Grip the parallel bars with your arms straight and shoulders above your hands.",
      "Lower your body by bending your elbows until they reach about 90 degrees.",
      "Keep your elbows relatively close to your body.",
      "Push yourself back up to the starting position until your arms are straight.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Lean slightly forward to target more chest, or stay upright for more triceps.",
      "Control the descent to prevent injury.",
      "Don't lock out your elbows at the top.",
      "Keep your shoulders down away from your ears."
    ],
    videoUrl: "https://player.vimeo.com/external/440232042.hd.mp4?s=3a7a74a72b223bb50042c980a3fb6d1b6dfd5fc2&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  
  // DAY 2: BACK & BICEPS
  "deadlifts": {
    id: "deadlifts",
    title: "Conventional Deadlifts",
    day: "tuesday",
    description: "The deadlift is a compound exercise that targets multiple muscle groups and is excellent for building overall strength.",
    duration: 12,
    sets: 4,
    reps: 8,
    restTime: 120,
    type: "strength",
    targetMuscles: ["Lower Back", "Hamstrings", "Glutes", "Traps", "Forearms"],
    instructions: [
      "Stand with feet hip-width apart, with the barbell over your mid-foot.",
      "Bend at the hips and knees, gripping the bar just outside your legs.",
      "Keep your back flat, chest up, and core engaged.",
      "Drive through your heels, extending your hips and knees to stand up with the bar.",
      "Return the weight to the ground by hinging at the hips and bending the knees."
    ],
    tips: [
      "Keep the bar close to your body throughout the movement.",
      "Don't round your back – maintain a neutral spine.",
      "Engage your lats by thinking about 'protecting your armpits'.",
      "Think of pushing the floor away rather than pulling the bar up."
    ],
    videoUrl: "https://player.vimeo.com/external/458115424.hd.mp4?s=c39ccca27eba8936827e18a17b5d18bcd3f6339c&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  "pull-ups": {
    id: "pull-ups",
    title: "Pull-Ups",
    day: "tuesday",
    description: "Pull-ups are one of the best exercises for building a strong back, biceps, and grip strength.",
    duration: 10,
    sets: 4,
    reps: 8,
    restTime: 90,
    type: "strength",
    targetMuscles: ["Lats", "Biceps", "Middle Back", "Forearms"],
    instructions: [
      "Grip the pull-up bar with hands slightly wider than shoulder-width apart.",
      "Hang with arms fully extended, shoulders engaged.",
      "Pull your body up by driving your elbows down toward your hips.",
      "Continue until your chin is over the bar.",
      "Lower yourself with control back to the starting position."
    ],
    tips: [
      "Avoid swinging or kipping unless specifically training for that style.",
      "Initiate the movement by depressing your shoulder blades.",
      "Focus on pulling with your back muscles, not just your arms.",
      "If full pull-ups are too difficult, try assisted versions or negative reps."
    ],
    videoUrl: "https://player.vimeo.com/external/386243530.hd.mp4?s=72a7e0e8c4aea52ac3a3ff8d96951195a24d6472&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1566351557863-467d204a9f8a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  
  // DAY 3: LEGS
  "squats": {
    id: "squats",
    title: "Barbell Squats",
    day: "wednesday",
    description: "The barbell squat is a fundamental compound exercise that targets multiple muscle groups in your lower body.",
    duration: 12,
    sets: 4,
    reps: 10,
    restTime: 120,
    type: "strength",
    targetMuscles: ["Quadriceps", "Hamstrings", "Glutes", "Core", "Lower Back"],
    instructions: [
      "Position the barbell on your upper back (not your neck).",
      "Stand with feet shoulder-width apart, toes slightly pointed outward.",
      "Bend at your hips and knees simultaneously, lowering your body as if sitting back into a chair.",
      "Lower until your thighs are parallel to the ground, or slightly below.",
      "Drive through your heels to stand back up to the starting position."
    ],
    tips: [
      "Keep your chest up and core engaged throughout the movement.",
      "Ensure your knees track in line with your toes.",
      "Maintain a neutral spine position.",
      "Breathe in as you lower, out as you stand."
    ],
    videoUrl: "https://player.vimeo.com/external/494769741.hd.mp4?s=ca1eb75ddbc7d0fd2d2431e01bf17bfb43f0a13a&profile_id=175&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=800&auto=format&fit=crop",
    completed: false
  },
  
  // DAY 4: SHOULDERS & ABS
  "overhead-press": {
    id: "overhead-press",
    title: "Overhead Press",
    day: "thursday",
    description: "The overhead press is a compound exercise that primarily targets the shoulders and triceps.",
    duration: 10,
    sets: 4,
    reps: 10,
    restTime: 90,
    type: "strength",
    muscleGroups: ["Shoulders", "Triceps", "Upper Chest", "Core"],
    targetMuscles: ["Shoulders", "Triceps", "Upper Chest", "Core"],
    instructions: [
      "Start with the barbell at shoulder height, hands just wider than shoulder-width.",
      "Keep your core tight and legs slightly bent.",
      "Press the bar directly overhead, fully extending your arms.",
      "Lower the bar with control back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Don't arch your back. Engage your core to maintain stability.",
      "As the bar passes your face, move your head slightly back to allow the bar to travel straight up.",
      "Lock out your elbows at the top without excessive hyperextension.",
      "Keep your wrists straight throughout the movement."
    ],
    videoUrl: "https://player.vimeo.com/external/401004854.hd.mp4?s=9bfc8a04f66fa13f19e7d5b24f95e42375f4425c&profile_id=175&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1580086319619-3ed498161c77?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1580086319619-3ed498161c77?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: ["Barbell", "Weight Plates"],
    difficulty: "intermediate",
    calories: 100,
    alternatives: ["Dumbbell Press", "Push Press", "Arnold Press"],
    warmupSets: 2
  },
  
  // DAY 5: CARDIO & HIIT
  "burpees": {
    id: "burpees",
    title: "Burpees",
    day: "friday",
    description: "Burpees are a full-body exercise that combines a squat, push-up, and jump, providing both cardiovascular and strength benefits.",
    duration: 8,
    sets: 3,
    reps: 12,
    restTime: 45,
    type: "cardio",
    muscleGroups: ["Full Body", "Core", "Chest", "Legs", "Shoulders"],
    targetMuscles: ["Full Body", "Core", "Chest", "Legs", "Shoulders"],
    instructions: [
      "Start in a standing position with your feet shoulder-width apart.",
      "Drop into a squat position and place your hands on the ground.",
      "Kick your feet back into a plank position.",
      "Perform a push-up (optional for added difficulty).",
      "Jump your feet back to the squat position.",
      "Explosively jump up with your arms overhead.",
      "Land softly and immediately begin the next repetition."
    ],
    tips: [
      "Maintain a brisk pace but don't sacrifice form for speed.",
      "Scale the movement to your fitness level by removing the push-up or jump if needed.",
      "Keep your core engaged throughout the entire movement.",
      "Land softly on the balls of your feet when jumping to reduce impact."
    ],
    videoUrl: "https://player.vimeo.com/external/422229482.hd.mp4?s=f8348178e7423e424504bbcb81c28c1d5ba35d62&profile_id=174&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1590239926044-4a753ddc6138?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1590239926044-4a753ddc6138?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: [],
    difficulty: "intermediate",
    calories: 150,
    alternatives: ["Mountain Climbers", "Jump Squats", "High Knees"],
    warmupSets: 1
  },
  
  // DAY 6: YOGA & MOBILITY
  "warrior-pose": {
    id: "warrior-pose",
    title: "Warrior Pose Sequence",
    day: "saturday",
    description: "The Warrior poses are fundamental yoga poses that build strength, stability, and balance while opening the hips and shoulders.",
    duration: 10,
    sets: 0,
    reps: 0,
    restTime: 0,
    type: "flexibility",
    muscleGroups: ["Legs", "Hips", "Core", "Shoulders", "Chest"],
    targetMuscles: ["Legs", "Hips", "Core", "Shoulders", "Chest"],
    instructions: [
      "Warrior I: Step one foot back into a lunge, turning the back foot at a 45-degree angle. Raise arms overhead with palms facing each other.",
      "Warrior II: From Warrior I, open your hips to the side, extending arms parallel to the floor in opposite directions.",
      "Warrior III: From standing, hinge at the hips and lift one leg behind you while extending arms forward, creating a 'T' shape with your body.",
      "Hold each pose for 5-10 deep breaths before transitioning to the next."
    ],
    tips: [
      "Keep your front knee tracking over your ankle, not beyond your toes.",
      "Engage your core for stability in all warrior poses.",
      "Breathe deeply and steadily throughout each pose.",
      "Focus on rooting down through your feet to create upward energy."
    ],
    videoUrl: "https://player.vimeo.com/external/394089341.hd.mp4?s=005e7a384ed96ddeac8aad16810763f4390e9f21&profile_id=175&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: [],
    difficulty: "beginner",
    calories: 80,
    alternatives: ["Triangle Pose", "Tree Pose", "Chair Pose"],
    warmupSets: 0
  },
  
  // DAY 7: ACTIVE RECOVERY
  "stretching": {
    id: "stretching",
    title: "Full Body Stretching",
    day: "sunday",
    description: "A comprehensive stretching routine that targets all major muscle groups to improve flexibility and aid in recovery.",
    duration: 15,
    sets: 0,
    reps: 0,
    restTime: 0,
    type: "flexibility",
    muscleGroups: ["Full Body", "Hamstrings", "Quads", "Shoulders", "Back", "Hips"],
    targetMuscles: ["Full Body", "Hamstrings", "Quads", "Shoulders", "Back", "Hips"],
    instructions: [
      "Start with a brief 5-minute warm-up such as light walking or marching in place.",
      "Perform each stretch for 20-30 seconds, breathing deeply.",
      "Begin with upper body stretches: neck, shoulders, chest, and arms.",
      "Move to core stretches: gentle twists and side bends.",
      "Finish with lower body stretches: hamstrings, quads, calves, and hip flexors.",
      "Hold each stretch at the point of mild tension, not pain."
    ],
    tips: [
      "Never bounce while stretching; use smooth, controlled movements.",
      "Breathe deeply into each stretch, exhaling as you deepen the position.",
      "Stretch both sides of your body equally for balance.",
      "If you have any injuries, modify stretches accordingly or consult a professional."
    ],
    videoUrl: "https://player.vimeo.com/external/394088670.hd.mp4?s=7a5c8641d46b13e20f924c10b09e12db917eca93&profile_id=175&oauth2_token_id=57447761",
    thumbnailUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=800&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=800&auto=format&fit=crop",
    completed: false,
    equipment: [],
    difficulty: "beginner",
    calories: 50,
    alternatives: ["Yoga", "Foam Rolling", "Light Walking"],
    warmupSets: 0
  }
};

// Add more exercise details as needed
export default exerciseDetails;
