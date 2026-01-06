import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchAllExercises,
  fetchExercisesByTarget,
} from "../services/exerciseApi";
import ExerciseCard from "../components/ExerciseCard";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const muscle = new URLSearchParams(location.search).get("muscle");

  // 🔥 target → local image (public folder)
  const targetImageMap = {
    pectorals: "/chest.jpg",
    lats: "/back.jpg",
    quads: "/legs.jpg",
    biceps: "/arms.jpg",
    delts: "/shoulders.jpg",
    abs: "/abs.jpg",
  };

  const muscleTargetMap = {
    chest: "pectorals",
    back: "lats",
    legs: "quads",
    arms: "biceps",
    shoulders: "delts",
    abs: "abs",
  };

  useEffect(() => {
    // ✅ CASE 1: Home वरून muscle click
    if (muscle && muscleTargetMap[muscle]) {
      fetchExercisesByTarget(muscleTargetMap[muscle]).then(
        (data) => {
          const updated = data.map((ex) => ({
            ...ex,
            displayImage:
              targetImageMap[ex.target] || "/test.jpg",
          }));
          setExercises(updated);
        }
      );
    }
    // ✅ CASE 2: Direct /exercises → ALL exercises
    else {
      fetchAllExercises().then((data) => {
        const updated = data.map((ex) => ({
          ...ex,
          displayImage:
            targetImageMap[ex.target] || "/test.jpg",
        }));
        setExercises(updated);
      });
    }
  }, [muscle]);

  // 🔍 Search by name
  const filteredExercises = exercises.filter((ex) =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {muscle ? `${muscle} Workouts` : "All Exercises"}
      </h2>

      <input
        type="text"
        placeholder="Search exercise by name..."
        className="border p-3 w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  );
}
