import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-700 to-fuchsia-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Welcome to <span className="text-yellow-300">KITE ROBOTICS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Empowering innovation with Robotics, AI & IoT.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

          <button className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium">
            Learn More
          </button>

          <button className="w-full sm:w-auto bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium">
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
