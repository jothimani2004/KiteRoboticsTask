import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-700 to-fuchsia-600 text-white shadow-md">
      <div className="flex justify-between items-center px-6 sm:px-10 py-4">

        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" className="h-10" alt="Logo" />
          <h1 className="font-bold text-xl">KITE ROBOTICS</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Services</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden block text-white focus:outline-none z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            // Close Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-blue-700 to-fuchsia-600 px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li className="hover:text-yellow-300 cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 cursor-pointer">Services</li>
            <li className="hover:text-yellow-300 cursor-pointer">About</li>
            <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
