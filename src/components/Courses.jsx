
import React from "react";

import Card from "./Card";
import courses from "../data/courses";

const Courses = () => {
  return (
    <section className="py-16 px-10  bg-indigo-100">
     <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">

  {/* Icon */}
  <span className="text-4xl">🎓</span>

  {/* Black part */}
  <span className="text-black">Our</span>

  {/* Green gradient part */}
  <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
    Courses
  </span>

</h2>


      <div className="grid md:grid-cols-3 gap-8 ">
        {courses.map((item, index) => (
          <Card key={index} {...item} 
            buttonColor="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500"
            borderColor="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" 
            priceColor="text-green-500" />
        ))}
      </div>
    </section>
  );
};

export default Courses;
