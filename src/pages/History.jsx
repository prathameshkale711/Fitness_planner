import { useAppContext } from "../context/AppContext";

export default function History() {
  const {
    workoutHistory,
    deleteWorkoutHistory,
    clearWorkoutHistory,
  } = useAppContext();

  if (workoutHistory.length === 0) {
    return <p className="p-6">No workouts done yet 💤</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Workout History
      </h1>

      {/* 🔴 Clear All */}
      <button
        onClick={clearWorkoutHistory}
        className="bg-red-600 text-white px-4 py-2 rounded mb-4"
      >
        Clear All History
      </button>

      {workoutHistory.map((workout, index) => (
        <div
          key={workout.id || index}
          className="border p-4 mb-4 rounded"
        >
          <h2 className="font-semibold">
            {workout.routineName}
          </h2>

          <p className="text-sm text-gray-500">
            {workout.date}
          </p>

          <ul className="mt-2 text-sm">
            {workout.exercises.map((ex, i) => (
              <li key={i}>
                {ex.name} – {ex.actualSets}x
                {ex.actualReps} @ {ex.actualWeight}
              </li>
            ))}
          </ul>

          {/* 🔴 Delete single history */}
          <button
            onClick={() => deleteWorkoutHistory(index)}
            className="text-red-600 mt-3"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
