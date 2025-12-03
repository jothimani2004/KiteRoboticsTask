import React from "react";
import Card from "./Card";
import books from "../data/books";

const BooksNotes = () => {
  return (
    <section className="py-16 px-10  bg-indigo-100">
     <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">
  
  {/* Black text */}
  <span className="text-black"> 📚 Buy Our</span>

  {/* Gradient text */}
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Books & Notes
  </span>
</h2>


      <div className="grid md:grid-cols-3 gap-8">
        {books.map((item, index) => (
          <Card key={index}
           {...item}
           buttonColor="bg-gradient-to-r  from-blue-400 via-violet-600 to-pink-500 " 
            borderColor=" from-blue-500 via-pink-600 to-red-500 "
            priceColor="text-blue-600" />
        ))}
      </div>
    </section>
  );
};

export default BooksNotes;
