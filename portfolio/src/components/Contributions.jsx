import React, { useState } from 'react';

const Contributions = () => {
  const [expandedContribution, setExpandedContribution] = useState(null);

  const contributions = [
    {
      id: 1,
      title: 'Messaging & Real-Time Collaboration System',
      period: 'Feb–Apr 2025',
      role: 'Full-Stack Implementation',
      description: 'Built a complete messaging platform with backend REST APIs and React workspace featuring real-time updates, group chat management with role-based permissions, and comprehensive security features.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'JWT'],
      highlights: [
        'Implemented polling-based WebSocket simulation for real-time updates',
        'Built message threading and comment systems',
        'Added security gating with JWT authentication and rate limiting',
        'Created reporting/flagging workflows with admin review endpoints',
        'Integrated notification system with activity logging for audit trails',
      ],
      impact: '~2,100 lines of code across 38 files',
    },
    {
      id: 2,
      title: 'Calendar System with Document Attachments & Gamification',
      period: 'November 2025',
      role: 'Full-Stack Implementation',
      description: 'Architected a timezone-aware calendar system with polymorphic attachments, optimistic UI updates, and cross-page event synchronization.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'localStorage API'],
      highlights: [
        'Built 825-line React calendar component with month grid and list views',
        'Implemented localStorage caching for instant rendering',
        'Created polymorphic attachment system (documents & URLs)',
        'Integrated badge evaluation on event creation',
        'Added ownership validation and document access checks',
      ],
      impact: '~1,757 lines across 20 files',
    },
    {
      id: 3,
      title: 'Gamified Badges System with Event-Driven Evaluation',
      period: 'November 2025',
      role: 'Full-Stack Implementation',
      description: 'Designed scalable gamification platform with JSON-driven badge criteria evaluation engine supporting extensible criteria types and automatic awarding.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'JSONB'],
      highlights: [
        'Built JSON-driven badge criteria evaluation engine',
        'Created admin badge management interface (273 lines)',
        'Implemented event-driven badge awarding with calendar integration',
        'Designed JSONB criteria storage for schema-less definitions',
        'Added idempotent badge awarding with unique constraints',
      ],
      impact: '~2,148 lines across 38 files',
    },
    {
      id: 4,
      title: 'SBCourse Creation Ecosystem',
      period: 'August 2025',
      role: 'Full-Stack Implementation',
      description: 'Developed complete course creation platform with section/lesson management, enrollment tracking, reviews, and analytics endpoints.',
      technologies: ['Spring Boot', 'React', 'Cloud Storage', 'Video Processing'],
      highlights: [
        'Built React course creation studio with cover photo uploads',
        'Implemented quiz JSON ingestion and lesson type normalization',
        'Created public course viewer with navigation logic',
        'Enhanced asset controller with signed URL fallbacks',
        'Integrated with tutorial system for content persistence',
      ],
      impact: 'Complete course creation and management platform',
    },
    {
      id: 5,
      title: 'Program Builder Architectural Refactoring',
      period: 'November 2025',
      role: 'Frontend Refactoring',
      description: 'Refactored 3,109-line monolithic component into modular architecture, reducing complexity by 17% while preserving all functionality.',
      technologies: ['React', 'Component Architecture', 'Performance Optimization'],
      highlights: [
        'Decomposed into 6 focused components with clear separation of concerns',
        'Consolidated duplicate data fetching logic',
        'Optimized with useCallback and useMemo hooks',
        'Achieved zero lint errors',
        'Documented refactoring process comprehensively',
      ],
      impact: '~2,339 lines refactored across 9 files',
    },
  ];

  return (
    <section id="contributions" className="py-24 px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Contributions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Full-stack features I've built for StudyBoost Platform
          </p>
        </div>

        <div className="space-y-6">
          {contributions.map((contribution, index) => (
            <div
              key={contribution.id}
              className="animate-slide-up bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedContribution(expandedContribution === contribution.id ? null : contribution.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs font-medium">
                        {contribution.role}
                      </span>
                      <span className="text-sm text-zinc-500">{contribution.period}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-zinc-100">
                      {contribution.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      {contribution.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {contribution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-md text-xs text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                    <svg
                      className={`w-5 h-5 text-zinc-400 transition-transform ${
                        expandedContribution === contribution.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {expandedContribution === contribution.id && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6 animate-slide-down">
                  <h4 className="text-lg font-semibold mb-4 text-zinc-200">Key Highlights</h4>
                  <ul className="space-y-3 mb-6">
                    {contribution.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
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
                        <span className="text-zinc-300 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="font-semibold text-primary-400">Impact:</span>
                    <span className="text-zinc-400">{contribution.impact}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl text-center">
            <div className="text-3xl font-bold text-gradient mb-2">6,833+</div>
            <div className="text-sm text-zinc-400">Net Lines of Code</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl text-center">
            <div className="text-3xl font-bold text-gradient mb-2">105+</div>
            <div className="text-sm text-zinc-400">Files Changed</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl text-center">
            <div className="text-3xl font-bold text-gradient mb-2">7+</div>
            <div className="text-sm text-zinc-400">Major Features</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl text-center">
            <div className="text-3xl font-bold text-gradient mb-2">8+</div>
            <div className="text-sm text-zinc-400">Security Features</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;

