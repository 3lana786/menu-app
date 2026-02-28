import React, { useState, useEffect } from "react";

function pad(number) {
  return number.toString().padStart(2, "0");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return pad(minutes) + ":" + pad(secs);
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>{name}</h2>

      <p>Time: {formatTime(seconds)}</p>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}