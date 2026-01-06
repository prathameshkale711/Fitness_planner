// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchExerciseById } from "../services/exerciseApi";
// import { useAppContext } from "../context/AppContext";

// export default function ExerciseDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { toggleFavorite, addToCurrentWorkout } =
//     useAppContext();

//   const [exercise, setExercise] = useState(null);

//   useEffect(() => {
//     fetchExerciseById(id).then(setExercise);
//   }, [id]);

//   if (!exercise) {
//     return <div className="p-6">Loading...</div>;
//   }

//   const steps = [
//     "Start with proper posture and correct equipment.",
//     `Slowly perform the movement targeting the ${exercise.target} muscles.`,
//     "Breathe properly and avoid jerky movements.",
//     "Return to the starting position with control.",
//     "Repeat for required repetitions.",
//   ];

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="text-blue-600 underline mb-4"
//       >
//         ← Back
//       </button>

//       <h1 className="text-3xl font-bold capitalize mb-6">
//         {exercise.name}
//       </h1>

//       <img
//   src={exercise.displayImage || "/test.jpg"}
//   alt={exercise.name}
//   className="w-full max-w-xl rounded mb-6"
// />

//       <div className="grid md:grid-cols-2 gap-4 mb-6">
//         <p><b>Target:</b> {exercise.target}</p>
//         <p><b>Body Part:</b> {exercise.bodyPart}</p>
//         <p><b>Equipment:</b> {exercise.equipment}</p>
//       </div>

//       <h2 className="text-2xl font-semibold mb-3">
//         How to Perform
//       </h2>

//       <ol className="list-decimal ml-6 space-y-2 mb-8">
//         {steps.map((s, i) => (
//           <li key={i}>{s}</li>
//         ))}
//       </ol>

//       <div className="flex gap-4">
//        <button
//   onClick={() => toggleFavorite(exercise)}
//   className="bg-red-500 text-white px-6 py-3 rounded cursor-pointer hover:bg-red-600 transition"
// >
//    Add to Favorites
// </button>

//       </div>
//     </div>
//   );
// }

import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchExerciseById } from "../services/exerciseApi";
import { useAppContext } from "../context/AppContext";

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
export default function ExerciseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleFavorite } = useAppContext();

  // 🔥 Card मधून आलेला exercise
  const passedExercise = location.state?.exercise;

  const [exercise, setExercise] = useState(passedExercise || null);

  // 🔁 Fallback: direct URL open केल्यास
  useEffect(() => {
    if (!passedExercise) {
      fetchExerciseById(id).then(setExercise);
    }
  }, [id, passedExercise]);

  if (!exercise) {
    return <div className="p-6">Loading...</div>;
  }

  const steps = [
    "Start with proper posture and correct equipment.",
    `Slowly perform the movement targeting the ${exercise.target} muscles.`,
    "Breathe properly and avoid jerky movements.",
    "Return to the starting position with control.",
    "Repeat for required repetitions.",
  ];

  return (
    <div className="p-6 max-w mx-10   ">
      <button
        onClick={() => navigate(-1)}
        className="bg-white text-black px-2 py rounded cursor-pointer hover:bg-red-600 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold capitalize mb-6">{exercise.name}</h1>

      {/* ✅ SAME IMAGE AS CARD */}

      {/* IMAGE + DETAILS + STEPS */}
<div className=" rounded-2xl p-6 mb-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

    {/* 🔹 LEFT: Image */}
    <div className="flex justify-center ">
      <img
        src={
          exercise.displayImage ||
          muscleImages[exercise.target] ||
          "/default.jpg"
        }
        alt={exercise.name}
        className="w-48 md:w-56 rounded-xl shadow bg-white p-2"
      />
    </div>

    {/* 🔹 RIGHT: Details + Perform + Fav */}
    <div>
      {/* Details */}
      <h2 className="text-xl font-semibold mb-4">
        Exercise Details
      </h2>

      <p className="mb-2">
        <b>Target:</b> {exercise.target}
      </p>
      <p className="mb-2">
        <b>Body Part:</b> {exercise.bodyPart}
      </p>
      <p className="mb-4">
        <b>Equipment:</b> {exercise.equipment}
      </p>

      {/* Perform */}
      <h2 className="text-xl font-semibold mb-3">
        How to Perform
      </h2>

      <ol className="list-decimal ml-5 space-y-2 mb-6 ">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      {/* Add to Favorites */}
      <button
        onClick={() => toggleFavorite(exercise)}
        className="bg-red-500 text-white px-6 py-3 rounded cursor-pointer hover:bg-red-600 transition"
      >
         Add to Favorites
      </button>
    </div>

  </div>
</div>

    </div>
  );
}
