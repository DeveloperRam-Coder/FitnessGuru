
interface ExerciseDetail {
  id: string;
  title: string;
  workoutId: string;
  description: string;
  duration: number;
  sets: number;
  reps: number;
  restTime: number;
  type: "strength" | "cardio" | "flexibility";
  targetMuscles: string[];
  instructions: string[];
  tips: string[];
  videoUrl: string;
  thumbnailUrl: string;
  completed: boolean;
}

export const exerciseDetails: Record<string, ExerciseDetail> = {
  // DAY 1: CHEST & TRICEPS
  "bench-press": {
    id: "bench-press",
    title: "Bench Press",
    workoutId: "monday",
    description: "The bench press is a compound exercise that targets the chest, shoulders, and triceps.",
    duration: 12,
    sets: 4,
    reps: 10,
    restTime: 90,
    type: "strength",
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
    completed: false
  },
  "incline-press": {
    id: "incline-press",
    title: "Incline Bench Press",
    workoutId: "monday",
    description: "The incline bench press emphasizes the upper chest and anterior deltoids.",
    duration: 10,
    sets: 3,
    reps: 12,
    restTime: 90,
    type: "strength",
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
    completed: false
  },
  "push-ups": {
    id: "push-ups",
    title: "Push-Ups",
    workoutId: "monday",
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
    workoutId: "monday",
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
    workoutId: "tuesday",
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
    workoutId: "tuesday",
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
    workoutId: "wednesday",
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
    workoutId: "thursday",
    description: "The overhead press is a compound exercise that primarily targets the shoulders and triceps.",
    duration: 10,
    sets: 4,
    reps: 10,
    restTime: 90,
    type: "strength",
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
    completed: false
  },
  
  // DAY 5: CARDIO & HIIT
  "burpees": {
    id: "burpees",
    title: "Burpees",
    workoutId: "friday",
    description: "Burpees are a full-body exercise that combines a squat, push-up, and jump, providing both cardiovascular and strength benefits.",
    duration: 8,
    sets: 3,
    reps: 12,
    restTime: 45,
    type: "cardio",
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
    completed: false
  },
  
  // DAY 6: YOGA & MOBILITY
  "warrior-pose": {
    id: "warrior-pose",
    title: "Warrior Pose Sequence",
    workoutId: "saturday",
    description: "The Warrior poses are fundamental yoga poses that build strength, stability, and balance while opening the hips and shoulders.",
    duration: 10,
    sets: 0,
    reps: 0,
    restTime: 0,
    type: "flexibility",
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
    completed: false
  },
  
  // DAY 7: ACTIVE RECOVERY
  "stretching": {
    id: "stretching",
    title: "Full Body Stretching",
    workoutId: "sunday",
    description: "A comprehensive stretching routine that targets all major muscle groups to improve flexibility and aid in recovery.",
    duration: 15,
    sets: 0,
    reps: 0,
    restTime: 0,
    type: "flexibility",
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
    completed: false
  }
};

// Add more exercise details as needed
export default exerciseDetails;
