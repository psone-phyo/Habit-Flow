import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-8 bg-black text-white">
      <div className="flex items-center gap-4">
      <img src={logo} alt="Habit Flow Logo" className="w-14 h-12 rounded" />
      <h1 className="text-white text-2xl font-bold font-['Nunito'] leading-9">Habit Flow</h1>
      </div>
      <div className="flex gap-8">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>© 2025 HabitFlow. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;