"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import Contributions from "./Contributions";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function PortfolioApp() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Contributions />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioApp;
