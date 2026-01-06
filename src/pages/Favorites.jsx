import { useAppContext } from "../context/AppContext";
import ExerciseCard from "../components/ExerciseCard";

export default function Favorites() {
  const { favorites } = useAppContext();

  if (favorites.length === 0) {
    return <p className="p-6">No favorites added yet ❤️</p>;
  }

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {favorites.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
        />
      ))}
    </div>
  );
}
