import React from "react";



const ContactForm = () => {
  return (
    <section className="py-16 px-10 bg-gradient-to-r  from-blue-500 to-purple-500 text-white">
    <h2 className="text-4xl font-bold text-center mb-10 flex justify-center items-center gap-3">

  {/* Part 1: Light text */}
  <span className="text-white/70">Get in</span>

  {/* Part 2: Golden gradient text */}
  <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
    Touch
  </span>

  {/* Icon */}
  <span className="text-4xl">📨</span>

</h2>


      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg text-gray-400">
        <input
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded mb-3"
        />
        <input
          placeholder="Your Phone"
          className="w-full border px-4 py-2 rounded mb-3"
        />
        <input
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded mb-3"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border px-4 py-2 rounded mb-3"
        ></textarea>

        <button className="w-full bg-gradient-to-r from-blue-700 to-fuchsia-600 text-white py-2 rounded-lg">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
