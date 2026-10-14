
import React from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">

      <Toaster position="top-right" />

      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />

    </div>
  );
};

export default App;
