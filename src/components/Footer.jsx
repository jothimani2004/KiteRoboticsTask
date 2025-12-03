import React from "react";

const Footer = () => {
  return (
    <>
      {/* TOP SECTION */}
      <footer>

        {/* Dark background area */}
        <div className="bg-[#0b1320] py-12 px-6 sm:px-12 md:px-32 lg:px-48 
                        flex flex-col md:flex-row items-center md:items-start 
                        gap-6 md:gap-10">

          {/* Logo with gradient border + glow */}
          <div className="p-[3px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 shadow-xl">
            <div className="bg-[#0b1320] rounded-xl p-3 flex justify-center">
              <img
                src="/images/logo.png"
                alt="KITE Robotics"
                className="w-20 h-20"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-2xl font-bold">KITE ROBOTICS</h2>
            <p className="text-gray-400 mt-1 max-w-md">
              Empowering Innovation with Robotics, AI & IoT
            </p>
          </div>

        </div>
      </footer>

      {/* White thin line */}
      <div className="h-[1px] w-full bg-white opacity-20"></div>

      {/* COPYRIGHT BAR */}
      <footer className="py-6 bg-gray-900 text-center text-white text-sm sm:text-base">
        © 2025 KITE ROBOTICS — All Rights Reserved
      </footer>
    </>
  );
};

export default Footer;
