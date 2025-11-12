import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Full-Stack Developer</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Passionate about building scalable web applications and exploring the intersection of backend logic and intuitive user interfaces. Experienced in developing comprehensive features from database design to frontend implementation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Continuous Learner</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Currently diving deeper into the React ecosystem and Java language. Daily routine: 
                  <span className="font-mono text-primary-400"> workout(); sleep(); code(); grind(); gaming();</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Security-Focused</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Implementing best practices in authentication, authorization, rate limiting, and secure data handling. Building applications with anti-DDoS methods and encryption standards.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl hover:border-primary-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-zinc-100">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">6,833+</div>
                  <div className="text-sm text-zinc-400">Lines of Code</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">7+</div>
                  <div className="text-sm text-zinc-400">Major Features</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">105+</div>
                  <div className="text-sm text-zinc-400">Files Changed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">8+</div>
                  <div className="text-sm text-zinc-400">Security Features</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-zinc-100">Currently Focused On</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Advanced React patterns & performance optimization
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Spring Boot microservices architecture
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  PostgreSQL query optimization & indexing
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Cloud deployment with Vercel & AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

