
import React from "react";

import Card from "./Card";
import liveDemos from "../data/liveDemos";

const LiveDemos = () => {
  return (
    <section className="py-16 px-10  bg-indigo-100">
      <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">

  {/* Icon */}
  <span className="text-4xl">🎥</span>

  {/* Black text */}
  <span className="text-black">Live</span>

  {/* Orange to Red gradient text */}
  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
    Demos
  </span>

</h2>


      <div className="grid md:grid-cols-3 gap-8">
        {liveDemos.map((item, index) => (
          <Card key={index} {...item}
           buttonColor="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600" 
           borderColor="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600"
           
           
           />
        ))}
      </div>
    </section>
  );
};

export default LiveDemos;
