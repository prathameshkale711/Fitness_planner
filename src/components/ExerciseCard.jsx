import { useNavigate } from "react-router-dom";

// 🔹 Muscle-wise fallback images (public folder)
const muscleImages = {
  pectorals: "/chest.jpg",
  lats: "/back.jpg",
  quads: "/legs.jpg",
  biceps: "/arms.jpg",
  triceps: "/arms.jpg",
  delts: "/shoulders.jpg",
  abs: "/abs.jpg",
  glutes: "/legs.jpg",
};

export default function ExerciseCard({ exercise }) {
  const navigate = useNavigate();

  // 🔥 FINAL IMAGE LOGIC (GUARANTEED)
  const imageSrc =
    exercise.displayImage ||
    muscleImages[exercise.target] ||
    "/default.jpg";

  return (
    <div
      onClick={() => navigate(`/exercise/${exercise.id}`)}
      className="border bg-white rounded-lg p-5 shadow cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={imageSrc}
        alt={exercise.name}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="mt-2 font-semibold capitalize text-black">
        {exercise.name}
      </h3>

      <p className="text-sm text-black">
        Target: {exercise.target}
      </p>
    </div>
  );
}
