import React from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BooksNotes from "./components/BooksNotes";
import Courses from "./components/Courses";
import LiveDemos from "./components/LiveDemos";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <BooksNotes />
      <Courses />
      <LiveDemos />
      <AboutSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
