import React from "react";
import Card from "./Card";
import books from "../data/books";

const BooksNotes = () => {
  return (
    <section className="py-16 bg-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">

       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 flex justify-center items-center gap-2">
  {/* Black text */}
  <span className="text-black">📚 Buy Our</span>

  {/* Gradient text */}
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Books & Notes
  </span>
</h2>


        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((item, index) => (
            <Card
              key={index}
              {...item}
              buttonColor="bg-gradient-to-r from-blue-400 via-violet-600 to-pink-500"
              borderColor="from-blue-500 via-pink-600 to-red-500"
              priceColor="text-blue-600"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BooksNotes;
