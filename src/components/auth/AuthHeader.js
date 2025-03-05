import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const AuthHeader = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="HabitFlow Logo" className="w-14 h-10" />
        <span className="text-white text-2xl font-bold font-['Nunito'] leading-9">HabitFlow</span>
      </Link>
      <Link to="/" className="bg-[#FF7423] px-6 py-3 rounded text-white hover:bg-[#e06620] transition">
        Back to home
      </Link>
    </nav>
  );
};

export default AuthHeader;