import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),_var(--tw-gradient-stops))] from-primary-900/30 via-transparent to-transparent transition-all duration-300"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20 animate-pulse-slow"></div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-6 animate-fade-in-down">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-semibold mb-4 backdrop-blur-sm">
            ✨ Full-Stack Developer & Creative Problem Solver
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
          <span className="block text-zinc-100 mb-2">
            Hi, I'm <span className="text-gradient inline-block hover:scale-105 transition-transform cursor-default">Judiel Oppura</span>
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 animate-gradient-x mt-2">
            Kazu00 です！
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          Fourth-year <span className="text-primary-400 font-semibold">Information Technology</span> undergraduate crafting elegant solutions through 
          <span className="text-primary-400 font-semibold"> Full-Stack Development</span>. 
          Passionate about building <span className="text-purple-400 font-semibold">scalable</span>, 
          <span className="text-pink-400 font-semibold"> secure</span>, and 
          <span className="text-cyan-400 font-semibold"> user-centric</span> web applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection('contributions')}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-700/50 text-zinc-100 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-zinc-700 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
          >
            Get in Touch
          </button>
        </div>

        {/* Tech stack showcase */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm animate-fade-in-up animation-delay-600">
          {[
            { name: 'Java', color: 'border-orange-500/30 hover:border-orange-500 hover:text-orange-400' },
            { name: 'React', color: 'border-cyan-500/30 hover:border-cyan-500 hover:text-cyan-400' },
            { name: 'Spring Boot', color: 'border-green-500/30 hover:border-green-500 hover:text-green-400' },
            { name: 'Python', color: 'border-blue-500/30 hover:border-blue-500 hover:text-blue-400' },
            { name: 'Django', color: 'border-emerald-500/30 hover:border-emerald-500 hover:text-emerald-400' },
            { name: 'Tailwind CSS', color: 'border-teal-500/30 hover:border-teal-500 hover:text-teal-400' },
            { name: 'PostgreSQL', color: 'border-indigo-500/30 hover:border-indigo-500 hover:text-indigo-400' },
          ].map((tech) => (
            <span
              key={tech.name}
              className={`px-4 py-2 bg-zinc-800/50 backdrop-blur-sm border-2 ${tech.color} rounded-xl text-zinc-300 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-500 font-medium">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

