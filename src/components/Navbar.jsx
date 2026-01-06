import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">PowerZone</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/history">History</Link>
        <Link to="/favorites">Favorites</Link>

      </div>
    </nav>
  );
}
