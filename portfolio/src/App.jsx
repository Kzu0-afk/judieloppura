import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
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

export default App;
