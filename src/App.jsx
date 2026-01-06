import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import ExerciseDetail from "./pages/ExerciseDetail";
import Routines from "./pages/Routines";
import History from "./pages/History";
import Favorites from "./pages/Favorites";
import CreateRoutine from "./pages/CreateRoutine";
import WorkoutMode from "./pages/WorkoutMode";

function App() {
  return (
    <BrowserRouter>
     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/history" element={<History />} /> 
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/create-routine" element={<CreateRoutine />} />
          <Route path="/workout/:id" element={<WorkoutMode />} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
