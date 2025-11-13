import React from 'react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'blockchain-notepad',
      description: 'A decentralized note-taking application using basic blockchain principles. Django-powered backend with React frontend implementing blockchain technology for secure, tamper-proof note storage.',
      technologies: ['Django', 'React', 'Python', 'HTML5', 'Blockchain'],
      github: 'https://github.com/Kzu0-afk/blockchain-notepad',
      features: [
        'Decentralized note storage using blockchain',
        'Tamper-proof data integrity',
        'React-based modern UI',
        'Django REST API backend',
      ],
      gradient: 'from-purple-500 to-pink-600',
      stats: { stars: 2, forks: 1 },
    },
    {
      id: 2,
      title: 'ledgerly-web',
      description: 'A web-based ledger application for tracking personal transactions. Built with Python Django backend and Tailwind CSS for a modern, responsive interface.',
      technologies: ['Python', 'Django', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/Kzu0-afk/ledgerly-web',
      features: [
        'Personal transaction tracking',
        'Modern Tailwind CSS interface',
        'Django-powered backend',
        'Financial reporting and analytics',
      ],
      gradient: 'from-blue-500 to-cyan-600',
      stats: { stars: 0, forks: 0 },
    },
    {
      id: 3,
      title: 'farmIT',
      description: 'A platform connecting farmers and sellers for local product display and purchases. Django-powered marketplace enabling direct farmer-to-consumer transactions with product management and order processing.',
      technologies: ['Django', 'Python', 'HTML5', 'NeonDB', 'Railway'],
      github: 'https://github.com/Kzu0-afk/farmIT-main',
      features: [
        'Farmer-seller interaction platform',
        'Local product marketplace',
        'Direct purchase system',
        'Product display and management',
      ],
      gradient: 'from-green-500 to-emerald-600',
      stats: { stars: 0, forks: 0 },
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fade-in-down" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Showcasing technical innovation and creative problem-solving
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="scale-in"
              delay={index * 150}
            >
              <div className="group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-3xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20">
              {/* Project Header with Gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <h3 className="text-3xl font-bold text-white relative z-10 text-center font-mono tracking-tight">
                  {project.title}
                </h3>
                {/* Animated pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] group-hover:animate-pulse-slow"></div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Project Content */}
              <div className="p-7">
                <p className="text-zinc-300 mb-6 leading-relaxed min-h-[80px] text-base">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-zinc-200 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-400 group/item">
                        <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="group-hover/item:text-zinc-300 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-700 rounded-lg text-xs text-zinc-300 hover:border-primary-500/50 hover:text-primary-400 hover:bg-zinc-900 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-zinc-700/50">
                  <div className="flex items-center gap-5 text-sm text-zinc-400">
                    <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">{project.stats.stars}</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{project.stats.forks}</span>
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-primary-500 hover:to-primary-600 text-zinc-300 hover:text-white rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 border border-zinc-700 hover:border-transparent"
                  >
                    <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* GitHub Link */}
        <AnimatedSection animation="fade-in-up" delay={500} className="mt-16 text-center">
          <a
            href="https://github.com/Kzu0-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-primary-500 hover:to-primary-600 text-zinc-100 hover:text-white rounded-2xl font-semibold transition-all duration-500 hover:scale-105 border-2 border-zinc-700 hover:border-transparent shadow-lg hover:shadow-2xl hover:shadow-primary-500/40"
          >
            <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-lg">View All Projects on GitHub</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;

