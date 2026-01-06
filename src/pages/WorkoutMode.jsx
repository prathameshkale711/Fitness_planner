import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function WorkoutMode() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { routines, saveWorkout } = useAppContext();

  const routine = routines.find((r) => r.id === Number(id));

  const [log, setLog] = useState(
    routine.exercises.map((ex) => ({
      ...ex,
      actualSets: "",
      actualReps: "",
      actualWeight: "",
    }))
  );

  const updateLog = (index, field, value) => {
    const updated = [...log];
    updated[index][field] = value;
    setLog(updated);
  };

  const finishWorkout = () => {
    const workoutData = {
      id: Date.now(),
      routineName: routine.name,
      date: new Date().toLocaleString(),
      exercises: log,
    };

    saveWorkout(workoutData);
    navigate("/history");
  };

  if (!routine) return <p className="p-6">Routine not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Workout: {routine.name}
      </h1>

      {log.map((ex, index) => (
        <div key={index} className="border p-4 mb-4">
          <h2 className="font-semibold mb-2">
            {ex.name}
          </h2>

          <div className="flex gap-2">
            <input
              placeholder="Sets"
              className="border p-2 w-1/3"
              onChange={(e) =>
                updateLog(index, "actualSets", e.target.value)
              }
            />
            <input
              placeholder="Reps"
              className="border p-2 w-1/3"
              onChange={(e) =>
                updateLog(index, "actualReps", e.target.value)
              }
            />
            <input
              placeholder="Weight"
              className="border p-2 w-1/3"
              onChange={(e) =>
                updateLog(index, "actualWeight", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        onClick={finishWorkout}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Finish Workout
      </button>
    </div>
  );
}
