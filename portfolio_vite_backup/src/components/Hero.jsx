import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
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
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), transparent 50%)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/8 via-transparent to-transparent"></div>
      </div>

      {/* Animated grid pattern with parallax */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20 transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      ></div>

      {/* Floating orbs with enhanced animation */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/15 rounded-full blur-3xl animate-float transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-float-delayed transition-transform duration-700"
        style={{
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
        }}
      ></div>
      
      {/* Additional accent orbs */}
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-primary-400/10 rounded-full blur-2xl animate-float opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed opacity-40"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-6 animate-fade-in-down">
          <span className="inline-block px-5 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-semibold mb-4 backdrop-blur-sm hover:bg-primary-500/20 hover:border-primary-500/40 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary-500/30">
            Full-Stack Developer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up group">
          <span className="block text-zinc-100">
            <span className="text-gradient inline-block hover:scale-105 transition-all duration-500 cursor-default hover:tracking-wider">
              Judiel Oppura
            </span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          <span className="text-primary-400 font-semibold">IT Student</span> & 
          <span className="text-primary-400 font-semibold"> Full-Stack Engineer</span> crafting 
          <span className="text-accent-400 font-semibold"> secure</span>, 
          <span className="text-accent-400 font-semibold">scalable</span>, and 
          <span className="text-accent-400 font-semibold">user-focused</span> digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection('contributions')}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 flex items-center gap-2 overflow-hidden"
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
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            { name: 'Java', color: 'hover:border-primary-500 hover:text-primary-400 hover:shadow-primary-500/30' },
            { name: 'React', color: 'hover:border-primary-500 hover:text-primary-400 hover:shadow-primary-500/30' },
            { name: 'Spring Boot', color: 'hover:border-accent-500 hover:text-accent-400 hover:shadow-accent-500/30' },
            { name: 'Python', color: 'hover:border-accent-500 hover:text-accent-400 hover:shadow-accent-500/30' },
            { name: 'Django', color: 'hover:border-primary-500 hover:text-primary-400 hover:shadow-primary-500/30' },
            { name: 'Tailwind CSS', color: 'hover:border-accent-500 hover:text-accent-400 hover:shadow-accent-500/30' },
            { name: 'PostgreSQL', color: 'hover:border-primary-500 hover:text-primary-400 hover:shadow-primary-500/30' },
          ].map((tech, index) => (
            <span
              key={tech.name}
              className={`px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 ${tech.color} rounded-lg text-zinc-300 transition-all duration-500 hover:scale-110 hover:bg-zinc-800/80 hover:shadow-lg cursor-default hover:-translate-y-1`}
              style={{ animationDelay: `${600 + index * 50}ms` }}
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

