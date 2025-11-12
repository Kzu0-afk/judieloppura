import React from 'react';

const TechStack = () => {
  const technologies = {
    'Languages': [
      { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-600' },
      { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
      { name: 'SQL', icon: '🗄️', color: 'from-cyan-500 to-blue-600' },
    ],
    'Frontend': [
      { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'from-sky-400 to-cyan-500' },
      { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', icon: '🎭', color: 'from-blue-500 to-purple-500' },
    ],
    'Backend': [
      { name: 'Spring Boot', icon: '🍃', color: 'from-green-500 to-emerald-600' },
      { name: 'Django', icon: '🎸', color: 'from-green-600 to-teal-700' },
      { name: 'Node.js', icon: '📦', color: 'from-green-500 to-lime-600' },
      { name: 'REST APIs', icon: '🔌', color: 'from-purple-500 to-pink-600' },
    ],
    'Database': [
      { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-700' },
      { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-cyan-600' },
      { name: 'Flyway', icon: '🦅', color: 'from-red-500 to-orange-600' },
    ],
    'Tools & DevOps': [
      { name: 'Git', icon: '📚', color: 'from-orange-500 to-red-600' },
      { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
      { name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' },
      { name: 'IntelliJ IDEA', icon: '💡', color: 'from-pink-500 to-purple-600' },
      { name: 'VS Code', icon: '📝', color: 'from-blue-500 to-cyan-500' },
    ],
  };

  return (
    <section id="tech" className="py-24 px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div
              key={category}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-sm">
                  {categoryIndex + 1}
                </span>
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techs.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group relative p-6 bg-zinc-800 border border-zinc-700 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3 animate-float">{tech.icon}</div>
                      <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                        {tech.name}
                      </div>
                    </div>
                    {/* Gradient glow effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Patterns */}
        <div className="mt-16 p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-zinc-100">Architecture & Patterns</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Event-Driven Architecture',
              'Service Layer Pattern',
              'Repository Pattern',
              'DTO Pattern',
              'Strategy Pattern',
              'Observer Pattern',
              'Optimistic UI',
              'RESTful Design',
            ].map((pattern) => (
              <div
                key={pattern}
                className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-primary-500/50 transition-colors"
              >
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-300">{pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

