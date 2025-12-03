import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-10 bg-gradient-to-r from-blue-700 to-fuchsia-600 text-white shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" className="h-10" alt="Logo" />
        <h1 className="font-bold text-xl">KITE ROBOTICS</h1>
      </div>

      <ul className="flex gap-6 font-medium">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Services</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
