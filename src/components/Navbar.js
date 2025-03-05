import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-8 bg-black text-white">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Habit Flow Logo" className="w-14 h-12 rounded"
        />
         <h1 className="text-white text-2xl font-bold font-['Nunito'] leading-9">Habit Flow</h1>
      </div>
      <Link to="/signup">
      <button className="bg-[#FF7423] px-6 py-3 rounded text-white hover:bg-[#e06620] transition">
        Sign Up
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;