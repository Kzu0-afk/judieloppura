import React from 'react';

const Hero = () => {
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
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-800/10 via-transparent to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto text-center animate-slide-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
            Full-Stack Developer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-zinc-100">Judiel Oppura</span>
          <span className="block text-gradient mt-2">Kazu00 です!</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Fourth-year <span className="text-primary-400 font-medium">Information Technology</span> undergraduate specializing in 
          <span className="text-primary-400 font-medium"> Full-Stack Development</span>. 
          Building scalable web applications with <span className="text-primary-400 font-medium">Java</span>, 
          <span className="text-primary-400 font-medium"> React</span>, and 
          <span className="text-primary-400 font-medium"> Python</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:glow flex items-center gap-2"
          >
            View My Work
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-zinc-700 hover:border-zinc-600"
          >
            Get in Touch
          </button>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {['Java', 'React', 'Spring Boot', 'Python', 'Django', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 hover:border-primary-500/50 hover:text-primary-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

