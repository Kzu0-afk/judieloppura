import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const technologies = {
    'Languages': [
      { name: 'Java', icon: '☕', level: 90 },
      { name: 'Python', icon: '🐍', level: 85 },
      { name: 'JavaScript', icon: '⚡', level: 88 },
      { name: 'TypeScript', icon: '📘', level: 75 },
      { name: 'SQL', icon: '🗄️', level: 80 },
    ],
    'Frontend': [
      { name: 'React', icon: '⚛️', level: 88 },
      { name: 'Tailwind CSS', icon: '🎨', level: 92 },
      { name: 'HTML5', icon: '🌐', level: 95 },
      { name: 'CSS3', icon: '🎭', level: 90 },
    ],
    'Backend': [
      { name: 'Spring Boot', icon: '🍃', level: 85 },
      { name: 'Django', icon: '🎸', level: 82 },
      { name: 'Node.js', icon: '📦', level: 75 },
      { name: 'REST APIs', icon: '🔌', level: 90 },
    ],
    'Database': [
      { name: 'PostgreSQL', icon: '🐘', level: 88 },
      { name: 'NeonDB', icon: '⚡', level: 80 },
      { name: 'Railway', icon: '🚂', level: 78 },
      { name: 'MySQL', icon: '🐬', level: 82 },
      { name: 'Flyway', icon: '🦅', level: 75 },
    ],
    'Tools & DevOps': [
      { name: 'Git', icon: '📚', level: 90 },
      { name: 'GitHub', icon: '🐙', level: 92 },
      { name: 'Vercel', icon: '▲', level: 85 },
      { name: 'IntelliJ IDEA', icon: '💡', level: 88 },
      { name: 'VS Code', icon: '📝', level: 90 },
    ],
  };

  return (
    <section id="tech" className="py-24 px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fade-in-down" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fade-in-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(technologies).map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech Cards with Progress Bars */}
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies[activeCategory].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-zinc-100 mb-1">{tech.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-primary-400 min-w-[3rem] text-right">
                        {tech.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Architecture Patterns */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="mt-16 p-8 bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-3xl hover:border-primary-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-zinc-100 flex items-center gap-3">
              <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Architecture & Design Patterns
            </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Event-Driven Architecture',
              'Service Layer Pattern',
              'Repository Pattern',
              'DTO Pattern',
              'Strategy Pattern',
              'Observer Pattern',
              'Optimistic UI',
              'RESTful Design',
            ].map((pattern, index) => (
              <div
                key={pattern}
                className="flex items-center gap-2.5 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-primary-500/50 hover:bg-zinc-800 transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></div>
                <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">{pattern}</span>
              </div>
            ))}
          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;

