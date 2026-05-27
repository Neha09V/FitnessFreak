"use client";

import React from "react";
import { useParams } from "next/navigation";
import "./workoutPage.css";

type Exercise = {
  exercise: string;
  videoUrl: string;
  sets: number;
  reps: number;
  rest: number;
  description: string;
};

type Workout = {
  type: string;
  exercises: Exercise[];
};

const workoutData: Record<string, Workout> = {
  chest: {
    type: "Chest",
    exercises: [
      {
        exercise: "Flat Bench Press",
        videoUrl: "https://gymvisual.com/img/p/1/7/5/5/2/17552.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description: "Compound chest exercise targeting pectoralis major.",
      },
      {
        exercise: "Incline Bench Press",
        videoUrl: "https://gymvisual.com/img/p/1/0/3/9/8/10398.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description: "Targets upper chest and front deltoids.",
      },
      {
        exercise: 'Decline Bench Press',
        videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
        sets: 3,    
        reps: 10,
        rest: 45,
        description: 'Emphasizes the lower chest region. Maintain a steady tempo and avoid locking your elbows at the top to reduce joint stress.',

      },
      {
        exercise: "Chest Flyes",
        videoUrl: "https://gymvisual.com/img/p/1/7/5/5/3/17553.gif",
        sets: 3,
        reps: 12,
        rest: 45,
        description: 'An isolation exercise that stretches and contracts the chest muscles deeply. Keep a slight bend in the elbows throughout the movement.'
      },
      {
        exercise: "Push-Ups",
        videoUrl: "https://gymvisual.com/img/p/3/6/2/3/8/36238.gif",
        sets: 3,
        reps: 15,
        rest: 30,
        description: "Bodyweight exercise that targets the chest, shoulders, and triceps. Keep your body in a straight line and engage your core for maximum effectiveness."
      }
    ],
  },


  abs: {
    type: "Abs",
    exercises: [
      {
        exercise: "Crunches",
        videoUrl: "https://gymvisual.com/img/p/1/4/9/8/0/14980.gif",
        sets: 3,
        reps: 20,
        rest: 30,
        description: "Targets upper abdominal muscles.",
      },
      {
        exercise: "Leg Raises",
        videoUrl: "https://gymvisual.com/img/p/7/0/3/0/7030.gif",
        sets: 3,
        reps: 15,
        rest: 30,
        description: "Targets lower abs.",
      },
      {
        exercise: "Plank",
        videoUrl: "https://gymvisual.com/img/p/2/4/7/0/1/24701.gif",
        sets: 3,
        reps: 60,
        rest: 30,
        description: "Isometric exercise that strengthens the entire core. Keep your body in a straight line from head to heels and engage your abdominal muscles throughout the hold."
      },
        
    ],
  },

  back: {
    type: "Back",
    exercises: [
      {
        exercise: "Pull Ups",
        videoUrl: "https://gymvisual.com/img/p/4/8/7/5/4875.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Builds upper back strength.",
      },
      {
        exercise: "Deadlifts",
        videoUrl: "https://gymvisual.com/img/p/3/6/6/9/4/36694.gif",
        sets: 4,
        reps: 8,
        rest: 90,
        description: "Compound movement targeting the entire back and posterior chain.",

      },
      {
        exercise: "Bent Over Rows",
        videoUrl: "https://gymvisual.com/img/p/2/8/9/7/7/28977.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description: "Targets the middle back and lats. Keep your back straight and pull the bar towards your lower ribcage for maximum engagement."
      }
    ],
  },

  legs: {
    type: "Legs",
    exercises: [
      {
        exercise: "Squats",
        videoUrl: "https://gymvisual.com/img/p/2/0/8/6/9/20869.gif",
        sets: 4,
        reps: 12,
        rest: 90,
        description: "Builds quadriceps and glutes.",
      },
      {
        exercise: " Band Lunges",
        videoUrl: "https://gymvisual.com/img/p/5/6/2/5/5625.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Targets quads, hamstrings, and glutes. Use a resistance band around your thighs to increase the challenge and activate more muscle fibers."

      },
      {
        exercise: "Leg Press",
        videoUrl: "https://gymvisual.com/img/p/6/6/5/5/6655.gif",
        sets: 3,
        reps: 10,
        rest: 60,
        description: "Focuses on quadriceps and glutes. Adjust the seat to ensure your knees are at a 90-degree angle when your feet are on the platform. Push through your heels for maximum activation."

      }
    ],
  },

  biceps: {
    type: "Biceps",
    exercises: [
      {
        exercise: " EZ Barbell Seated  Curl",
        videoUrl: "https://gymvisual.com/img/p/1/5/7/0/6/15706.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Builds arm strength.",
      },
      {
        exercise: "Hammer Curl",
        videoUrl: "https://gymvisual.com/img/p/1/0/4/6/9/10469.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Targets the brachialis muscle for thicker arms.",
      },
      {
        exercise: "Concentration Curl",
        videoUrl: "https://gymvisual.com/img/p/2/7/3/4/6/27346.gif",
        sets: 3,
        reps: 12,
        rest: 45,
        description: "Isolates the biceps for maximum contraction. Sit on a bench with your legs apart and rest your elbow on the inside of your thigh. Curl the dumbbell towards your shoulder while keeping your upper arm stationary."
      }

    ],
  },

  triceps: {
    type: "Triceps",
    exercises: [
      {
        exercise: "Tricep Pushdown",
        videoUrl: "https://gymvisual.com/img/p/2/6/3/0/7/26307.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Targets triceps muscle.",
      },
      {
        exercise: "Overhead Tricep Extension",
        videoUrl: "https://gymvisual.com/img/p/2/7/4/4/8/27448.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Isolates the long head of the triceps. Hold a dumbbell with both hands and extend it overhead. Lower the dumbbell behind your head by bending your elbows, then extend back up to the starting position."
      },
      {
        exercise: " Elbow Dips",
        videoUrl: "https://gymvisual.com/img/p/1/3/1/3/6/13136.gif",
        sets: 3,
        reps: 15,
        rest: 45,
        description: "Bodyweight exercise that targets the triceps, chest, and shoulders. Use parallel bars or a bench to perform dips. Lower your body by bending your elbows until your upper arms are parallel to the ground, then push back up to the starting position."
      }
    ],
  },

  shoulder: {
    type: "Shoulder",
    exercises: [
      {
        exercise: "Barbell Standing Shoulder Pin Press",
        videoUrl: "https://gymvisual.com/img/p/2/5/0/3/9/25039.gif",
        sets: 3,
        reps: 12,
        rest: 60,
        description: "Builds shoulder strength and stability.",
      },
 {
        exercise: " Cable Side Lying Single ArmLateral Raises",
        videoUrl: "https://gymvisual.com/img/p/3/6/7/0/8/36708.gif",
        sets: 3,
        reps: 12,
        rest: 45,
        description: "Targets the lateral deltoids for wider shoulders. Keep a slight bend in your elbows and raise the dumbbells to shoulder height, then lower back down with control."
 },
 {
        exercise: "Front Back Leg  Raises",
        videoUrl: "https://gymvisual.com/img/p/7/0/3/0/7030.gif",
        sets: 3,            
        reps: 12,
        rest: 45,
        description: "Targets the front and back deltoids for balanced shoulder development. Lie on your side with your bottom arm extended straight out in front of you and your top arm bent at 90 degrees. Raise the top arm up and back down with control."
 }
    ],
  },

  cardio: {
    type: "Cardio",
    exercises: [
      {
        exercise: "Jump skip Rope",
        videoUrl: "https://gymvisual.com/img/p/3/1/6/4/7/31647.gif",
        sets: 3,
        reps: 100,
        rest: 30,
        description: "Improves heart health.",
      },
      {
        exercise: "Burpees",
        videoUrl: "https://gymvisual.com/img/p/3/3/1/3/6/33136.gif",
        sets: 3,
        reps: 15,
        rest: 30,
        description: "Full-body exercise that boosts cardiovascular fitness. Start in a standing position, drop into a squat with your hands on the ground, kick your feet back into a plank position, perform a push-up, return to the squat position, and jump up explosively."
      },
      {
        exercise: "Cardio Lunge",
        videoUrl: "https://gymvisual.com/img/p/1/6/9/2/4/16924.gif",
        sets: 3,
        reps: 20,
        rest: 30,
        description: "Cardio exercise that improves leg strength and endurance. Step forward with one leg and lower your body until both knees are bent at 90 degrees. Return to the starting position and repeat with the other leg."

      }
    ],
  },

  forearms: {
    type: "Forearms",
    exercises: [
      {
        exercise: " Kettlebell Wrist Curls",
        videoUrl: "https://gymvisual.com/img/p/2/6/2/3/1/26231.gif",
        sets: 3,
        reps: 15,
        rest: 45,
        description: "Targets forearm flexor muscles.",
      },
      {
        exercise: " EZ Bar Seated Reverse Wrist Curls",
        videoUrl: "https://gymvisual.com/img/p/2/8/2/1/3/28213.gif",
        sets: 3,
        reps: 15,
        rest: 45,
        description: "Focuses on forearm extensor muscles. Sit on a bench and hold a barbell with an overhand grip. Rest your forearms on your thighs with your wrists hanging off the edge. Curl the barbell upwards by extending your wrists, then lower it back down with control."
      },
      {
        exercise: "Farmer's Walk",
        videoUrl: "https://gymvisual.com/img/p/1/7/5/4/4/17544.gif",
        sets: 3,
        reps: 30,
        rest: 60,
        description: "Full-body exercise that strengthens grip and forearms. Hold a heavy dumbbell or kettlebell in each hand and walk for a set distance or time while maintaining good posture and a strong grip."

      }

    ],
  },
};

const Page = () => {
  const params = useParams();
  const type = params?.type as string;

  const workout = workoutData[type?.toLowerCase()];

  if (!workout) {
    return <h2 style={{ textAlign: "center" }}>Workout Not Found</h2>;
  }

  return (
    <div className="workout">
      <h1 className="mainhead1">{workout.type} Day</h1>

      <div className="workout__exercises">
        {workout.exercises.map((item, index) => (
          <div
            key={item.exercise}
            className={
              index % 2 === 0
                ? "workout__exercise"
                : "workout__exercise workout__exercise--reverse"
            }
          >
            <h3>{index + 1}</h3>

            <div className="workout__exercise__image">
              <img src={item.videoUrl} alt={item.exercise} />
            </div>

            <div className="workout__exercise__content">
              <h2>{item.exercise}</h2>
              <span>
                {item.sets} sets X {item.reps} reps
              </span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
