
import React from "react";

import Card from "./Card";
import services from "../data/services";

const Services = () => {
  return (
    <section className="py-16 px-10 bg-indigo-100">
  <h2 className="text-3xl font-bold text-center mb-10">
    <span className="bg-clip-text text-black">⚙️ Our</span>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-blue-700"> Services</span>
</h2> 

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <Card key={index} {...item}
          buttonColor="bg-gradient-to-r from-violet-600 via-blue-700 to-pink-500 "
          borderColor=" from-violet-600 via-blue-700 to-pink-500 " />
        ))}
      </div>
  
    </section>
  );
};

export default Services;
