import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const muscleGroups = [
    {
      name: "Chest",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
    {
      name: "Back",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    },
    {
      name: "Legs",
      image: "https://images.unsplash.com/photo-1596357395217-80de13130e92",
    },
    {
      name: "Arms",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    },
    {
      name: "Shoulders",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      name: "Abs",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 🔹 Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Train <span className="text-red-500">Smarter</span>,<br />
              Build a <span className="text-red-500">Stronger</span> Body
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Explore workouts, customize routines, and track your progress —
              all in one powerful fitness platform.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/exercises")}
                className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold cursor-pointer"
              >
                Explore Exercises
              </button>

              <button
                onClick={() => navigate("/routines")}
                className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg transition cursor-pointer"
              >
                My Routines
              </button>
            </div>
          </div>

          {/* 🔹 Right Image (PNG) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://pngimg.com/uploads/fitness/fitness_PNG45.png"
              alt="Fitness Training"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Muscle Groups */}
      <section className="p-6 md:p-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Target Your Muscles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {muscleGroups.map((muscle) => (
            <div
              key={muscle.name}
              onClick={() =>
                navigate(`/exercises?muscle=${muscle.name.toLowerCase()}`)
              }
              className="cursor-pointer rounded-2xl overflow-hidden shadow-xl 
                         transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64">
                <img
                  src={muscle.image}
                  alt={muscle.name}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    {muscle.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
<footer className="bg-black text-gray-400 py-10 mt-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Brand */}
    <div>
      <h3 className="text-white text-xl font-bold mb-3">
      PowerZone
      </h3>
      <p className="text-sm">
        Build strength, stay consistent, and track your
        fitness journey with confidence.
      </p>
    </div>

    {/* Links */}
    <div>
      <h4 className="text-white font-semibold mb-3">
        Quick Links
      </h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">
          Exercises
        </li>
        <li className="hover:text-white cursor-pointer">
          Routines
        </li>
        <li className="hover:text-white cursor-pointer">
          Favorites
        </li>
        <li className="hover:text-white cursor-pointer">
          Workout History
        </li>
      </ul>
    </div>

    {/* Copyright */}
    <div className="md:text-right">
      <p className="text-sm">
        © {new Date().getFullYear()} PowerZone
      </p>
      <p className="text-xs mt-2">
        Designed & Developed with  by You
      </p>
    </div>

  </div>
</footer>

    </>
  );
}
