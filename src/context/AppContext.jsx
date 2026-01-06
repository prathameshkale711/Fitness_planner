import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [workoutHistory, setWorkoutHistory] = useState(
    JSON.parse(localStorage.getItem("workoutHistory")) || []
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [routines, setRoutines] = useState(
    JSON.parse(localStorage.getItem("routines")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "workoutHistory",
      JSON.stringify(workoutHistory)
    );
  }, [workoutHistory]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  // ⭐ Favorites (IMAGE FIXED)
  const toggleFavorite = (exercise) => {
    const exists = favorites.find((e) => e.id === exercise.id);

    if (exists) {
      setFavorites(favorites.filter((e) => e.id !== exercise.id));
    } else {
      setFavorites([
        ...favorites,
        {
          ...exercise,
          // 🔥 image guarantee
          displayImage:
            exercise.displayImage ||
            `/default.jpg`,
        },
      ]);
    }
  };

  // 🏋️ Routines
  const createRoutine = (name, description, exercises) => {
    setRoutines([
      ...routines,
      { id: Date.now(), name, description, exercises },
    ]);
  };

  const deleteRoutine = (id) => {
    setRoutines(routines.filter((r) => r.id !== id));
  };

  // 📜 History
  const saveWorkout = (workout) => {
    setWorkoutHistory([...workoutHistory, workout]);
  };

  const deleteWorkoutHistory = (index) => {
    const updated = [...workoutHistory];
    updated.splice(index, 1);
    setWorkoutHistory(updated);
  };

  const clearWorkoutHistory = () => {
    setWorkoutHistory([]);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,

        routines,
        createRoutine,
        deleteRoutine,

        workoutHistory,
        saveWorkout,
        deleteWorkoutHistory,
        clearWorkoutHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
