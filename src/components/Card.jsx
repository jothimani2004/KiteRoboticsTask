import React from "react";


const Card = ({ image, title, buttonText, price, day, buttonColor, borderColor, priceColor}) => {
  return (
    <div className={`p-[3px] rounded-lg bg-gradient-to-r ${borderColor}`}>
    <div className={`bg-white p-4 hover:shadow-2xl transition duration-300`}>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold mt-3">{title}</h3>

      {price && (
        <p className={`text-sm mt-1 ${priceColor}`}>₹{price}</p>
      )}

      {day && (
        <p className="text-sm text-gray-600 mt-1">{day}</p>
      )}

      <button className={`mt-3 w-full ${buttonColor} text-white px-10 py-1 rounded-md text-sm hover:bg-blue-700 `}>
        {buttonText}
      </button>
         </div>
    </div>
  );
};

export default Card;
