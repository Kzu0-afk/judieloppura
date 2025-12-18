import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contributions = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projectContributions = [
    {
      id: 1,
      project: 'StudyBoost Platform',
      period: 'February 2025 - Present (Ongoing Development)',
      type: 'Professional Work',
      role: 'Full-Stack Developer',
      description: 'Full-stack features built for an educational technology platform, including course creation & tutor programs, document uploads & viewer, standardized testing, SEO optimization, ads implementation, gamification systems, calendar management, real-time messaging, and marketing automation.',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'JWT'],
      gradient: 'from-primary-600 via-primary-500 to-accent-600',
      icon: '🎓',
      metrics: {
        features: '7+ Major Systems',
        code: '~6,833 Lines',
        files: '105 Files',
        impact: 'High User Engagement'
      },
      keyContributions: [
        'Course Creation & Tutor Programs with comprehensive course creation ecosystem',
        'Document Uploads & Viewer as core platform functionality',
        'Standardized Testing system with quiz management and evaluation',
        'SEO Optimization for improved search engine visibility',
        'Ads Implementation for monetization and revenue generation',
        'Gamification & Badges System with JSON-driven evaluation engine',
        'Calendar System with timezone support & document attachments',
        'Real-Time Messaging & Collaboration Platform',
        'Retargeting & Marketing Automation with email campaigns',
        'Abandoned Cart Recovery with automated sequences',
        'Premium Upload Rewards System with tier-based incentives',
        'Program Builder Refactoring (17% complexity reduction)',
      ],
    },
    {
      id: 2,
      project: 'ledgerly-web',
      period: 'September 2025 - October 2025 (Finished)',
      type: 'Personal Project',
      role: 'Full-Stack Developer',
      description: 'Web-based financial ledger application for tracking personal transactions with modern UI and comprehensive reporting features.',
      technologies: ['Python', 'Django', 'Tailwind CSS', 'PostgreSQL', 'Chart.js'],
      gradient: 'from-accent-600 via-accent-500 to-primary-600',
      icon: '💰',
      metrics: {
        features: 'Financial Tracking',
        code: 'Completed Project',
        files: 'Django Full-Stack',
        impact: 'Personal Finance Management'
      },
      keyContributions: [
        'Transaction tracking with categorization and tagging',
        'Financial analytics dashboard with charts and reports',
        'Budget management and expense tracking',
        'Multi-currency support with exchange rates',
        'Export functionality (CSV, PDF) for financial records',
        'Responsive Tailwind CSS interface with dark mode',
      ],
    },
    {
      id: 3,
      project: 'farmIT-main',
      period: 'November 2025 - Present (Ongoing Development)',
      type: 'Personal Project',
      role: 'Full-Stack Developer',
      description: 'Marketplace platform connecting farmers directly with consumers, featuring product listings, order management, and secure transactions.',
      technologies: ['Django', 'Python', 'HTML5', 'NeonDB', 'Railway', 'Stripe'],
      gradient: 'from-primary-700 via-primary-600 to-accent-700',
      icon: '🌾',
      metrics: {
        features: 'E-Commerce Platform',
        code: 'Active Development',
        files: 'Django Full-Stack',
        impact: 'Local Agriculture Support'
      },
      keyContributions: [
        'Product catalog with image uploads and categorization',
        'User authentication for farmers and buyers',
        'Shopping cart and order processing system',
        'Farmer dashboard for inventory management',
        'Location-based product discovery',
        'Secure payment integration and order tracking',
      ],
    },
  ];

  return (
    <section id="contributions" className="py-24 px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in-down" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-gradient">Contributions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-accent-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Highlighting key contributions across professional and personal projects
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-1 gap-8">
          {projectContributions.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-in-up"
              delay={index * 150}
            >
              <div className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all duration-500">
                {/* Gradient Header with Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-8 overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10"></div>
                  
                  <div className="relative z-10 flex items-start justify-between h-full">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-3">
                        {project.type}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="text-5xl">{project.icon}</span>
                        {project.project}
                      </h3>
                      <p className="text-white/80 text-sm">{project.period} • {project.role}</p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 text-center">
                        <div className="text-sm text-zinc-400 mb-1 capitalize">{key}</div>
                        <div className="text-base font-bold text-zinc-100">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:border-primary-500/50 hover:text-primary-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Contributions */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors mb-4"
                  >
                    <span>Key Contributions</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expandedProject === project.id && (
                    <div className="space-y-2 animate-fade-in-up">
                      {project.keyContributions.map((contribution, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/30 rounded-lg">
                          <svg
                            className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-zinc-300 text-sm leading-relaxed">{contribution}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;

