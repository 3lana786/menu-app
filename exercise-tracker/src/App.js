import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" }
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  if (!selectedExercise) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Exercise Tracker</h1>

        {exercises.map((exercise) => (
          <button
            key={exercise.name}
            onClick={() => setSelectedExercise(exercise)}
            style={{ display: "block", margin: "10px" }}
          >
            {exercise.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{selectedExercise.name}</h1>

      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}

      <button onClick={() => setSelectedExercise(null)}>
        Back to Menu
      </button>
    </div>
  );
}

export default App;