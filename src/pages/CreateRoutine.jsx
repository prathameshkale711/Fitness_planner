import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function CreateRoutine() {
  const { createRoutine } = useAppContext();
  const navigate = useNavigate();

  const [routineName, setRoutineName] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState([]);

  const addExercise = () => {
    setExercises([
      ...exercises,
      {
        name: "",
        sets: "",
        reps: "",
        weight: "",
        rest: "",
        notes: "",
      },
    ]);
  };

  const updateExercise = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const saveRoutine = () => {
    if (!routineName || exercises.length === 0) {
      alert("Routine name & exercises required");
      return;
    }

    createRoutine(routineName, description, exercises);
    navigate("/routines");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Create Workout Routine
      </h1>

      <input
        placeholder="Routine Name"
        className="border p-3 w-full mb-3"
        value={routineName}
        onChange={(e) => setRoutineName(e.target.value)}
      />

      <textarea
        placeholder="Routine Description"
        className="border p-3 w-full mb-4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {exercises.map((ex, index) => (
        <div key={index} className="border p-4 mb-4 rounded">
          <input
            placeholder="Exercise name"
            className="border p-2 w-full mb-2"
            onChange={(e) =>
              updateExercise(index, "name", e.target.value)
            }
          />

          <div className="flex gap-2 mb-2">
            <input
              placeholder="Sets"
              className="border p-2 w-1/4"
              onChange={(e) =>
                updateExercise(index, "sets", e.target.value)
              }
            />
            <input
              placeholder="Reps"
              className="border p-2 w-1/4"
              onChange={(e) =>
                updateExercise(index, "reps", e.target.value)
              }
            />
            <input
              placeholder="Weight"
              className="border p-2 w-1/4"
              onChange={(e) =>
                updateExercise(index, "weight", e.target.value)
              }
            />
            <input
              placeholder="Rest (sec)"
              className="border p-2 w-1/4"
              onChange={(e) =>
                updateExercise(index, "rest", e.target.value)
              }
            />
          </div>

          <textarea
            placeholder="Notes"
            className="border p-2 w-full"
            onChange={(e) =>
              updateExercise(index, "notes", e.target.value)
            }
          />
        </div>
      ))}

      <button
        onClick={addExercise}
        className="bg-gray-200 px-4 py-2 rounded mr-3 text-black"
      >
        + Add Exercise
      </button>

      <button
        onClick={saveRoutine}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Save Routine
      </button>
    </div>
  );
}
