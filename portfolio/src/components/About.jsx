import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in-down" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedSection animation="fade-in-left" delay={100}>
              <div className="flex items-start gap-4 group glow-hover-area p-6 rounded-xl transition-all duration-500 hover:bg-zinc-900/30 hover:scale-[1.02] cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:glow group-hover:rotate-6 transition-all duration-500">
                <svg className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Full-Stack Developer</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Architecting end-to-end solutions from database design to polished UIs. Specialized in building robust, production-ready features that balance performance with user experience.
                </p>
              </div>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="flex items-start gap-4 group glow-hover-area p-6 rounded-xl transition-all duration-500 hover:bg-zinc-900/30 hover:scale-[1.02] cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:glow group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">Continuous Learner</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Mastering React patterns and Java architecture through hands-on projects. 
                    <span className="font-mono text-primary-400"> while(alive) {'{ workout(); code(); grind(); }'}</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="flex items-start gap-4 group glow-hover-area p-6 rounded-xl transition-all duration-500 hover:bg-zinc-900/30 hover:scale-[1.02] cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:glow group-hover:rotate-6 transition-all duration-500">
                <svg className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Security-Focused</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Integrating industry-standard security from day one: JWT auth, rate limiting, encrypted data transmission, and DDoS protection across all projects.
                </p>
              </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection animation="fade-in-right" delay={100}>
              <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl hover:border-primary-500/50 transition-all duration-500 glow-hover-area hover:glow-strong hover:scale-[1.02] group cursor-default">
              <h3 className="text-2xl font-bold mb-6 text-zinc-100 group-hover:text-gradient transition-all duration-500">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">6,833+</div>
                  <div className="text-sm text-zinc-400">Lines of Code</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">7+</div>
                  <div className="text-sm text-zinc-400">Major Features</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">105+</div>
                  <div className="text-sm text-zinc-400">Files Changed</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">8+</div>
                  <div className="text-sm text-zinc-400">Security Features</div>
                </div>
              </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl glow-hover-area hover:border-primary-500/30 transition-all duration-500 hover:scale-[1.02] group cursor-default">
              <h3 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-gradient transition-all duration-500">Currently Focused On</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zinc-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  Advanced React patterns & performance optimization
                </li>
                <li className="flex items-center gap-3 text-zinc-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  Spring Boot microservices architecture
                </li>
                <li className="flex items-center gap-3 text-zinc-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  PostgreSQL query optimization & indexing
                </li>
                <li className="flex items-center gap-3 text-zinc-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  Cloud deployment with Vercel & AWS
                </li>
              </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

