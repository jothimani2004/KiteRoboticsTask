
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 px-10 flex flex-col md:flex-row items-center gap-10">
      <img src="/images/about/about-img.png" className="w-80 rounded-xl shadow-lg" />

      <div>
        <h2 className="text-3xl font-bold mb-4">
  Welcome to <span className="text-blue-500">KITE ROBOTICS</span>
</h2>

        <p className="text-gray-700 leading-relaxed">
          KITE Robotics assists innovators in unlocking creativity, inspiring
          students to build and innovate with Robotics, AI, and IoT solutions.
        </p>

        <div className="flex items-center gap-6">

  {/* Gradient Logo Box */}
  <div className="p-[4px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 shadow-xl">
    <div className="bg-white rounded-xl p-3">
      <img
        src="/images/logo.png"
        alt="KITE Robotics"
        className="w-20 h-20 object-contain"
      />
    </div>
  </div>


  <button className="px-6 py-3 font-semibold text-white rounded-xl 
    bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg hover:opacity-90 transition flex items-center gap-2">
    Join Us <span>🚀</span>
  </button>

</div>

      </div>
    </section>
  );
};

export default AboutSection;
