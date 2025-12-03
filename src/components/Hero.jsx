
import React from "react";
const Hero = () => {
  return (
    <section className="text-center py-24 bg-gradient-to-r from-blue-700 to-fuchsia-600 text-white">
      <h1 className="text-4xl font-bold">
        Welcome to <span className="text-yellow-300">KITE ROBOTICS</span>
      </h1>

      <p className="mt-3 text-lg">Empowering innovation with Robotics, AI & IoT.</p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium">
          Learn More
        </button>

        <button className="bg-transparent border-1 text-white px-6 py-2 rounded-lg font-medium">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
