import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": "3dccea6e11msh379671af699836ep1e789ajsn5fea9ca9f695",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

// 🔹 1. ALL exercises (1300+)
export const fetchAllExercises = async () => {
  const res = await axios.get(
    `${BASE_URL}/exercises`,
    options
  );
  return res.data;
};

// 🔹 2. Muscle target wise (Chest, Back etc)
export const fetchExercisesByTarget = async (target) => {
  const res = await axios.get(
    `${BASE_URL}/exercises/target/${target}`,
    options
  );
  return res.data;
};

// 🔹 3. Exercise detail by ID
export const fetchExerciseById = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/exercises/exercise/${id}`,
    options
  );
  return res.data;
};
