import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Routines() {
  const {
    routines,
    deleteRoutine,
    duplicateRoutine,
  } = useAppContext();

  // 🟢 No routines state
  if (routines.length === 0) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[60vh]">
        

        <Link
          to="/create-routine"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create Your First Routine
        </Link>
      </div>
    );
  }

  // 🟢 Routines list
  return (
    <div className="p-6">
      <Link
        to="/create-routine"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Create Routine
      </Link>

      {routines.map((routine) => (
        <div
          key={routine.id}
          className="border p-4 mt-4 rounded"
        >
          <h2 className="text-xl font-semibold">
            {routine.name}
          </h2>

          <p className="text-gray-600">
            {routine.description}
          </p>

          <ul className="mt-2 text-sm">
            {routine.exercises.map((ex, i) => (
              <li key={i}>
                {ex.name} — {ex.sets}x{ex.reps} | Rest:{" "}
                {ex.rest}s
              </li>
            ))}
          </ul>

          <div className="mt-3 flex gap-4">
            <Link
              to={`/workout/${routine.id}`}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Start Workout
            </Link>

            <button
              onClick={() => duplicateRoutine(routine)}
              className="text-blue-600"
            >
              Duplicate
            </button>

            <button
              onClick={() => deleteRoutine(routine.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
