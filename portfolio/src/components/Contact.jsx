import React, { useState } from 'react';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'juds.oppura@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Kzu0-afk',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/5 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="space-y-8">
          {/* Email Card */}
          <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl hover:border-primary-500/50 transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">Email</h3>
                <p className="text-zinc-400 mb-4">
                  Drop me an email and I'll respond as soon as possible
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={`mailto:${email}`}
                    className="flex-1 min-w-fit px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-primary-400 font-mono text-sm hover:border-primary-500/50 transition-colors"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    {copiedEmail ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-zinc-900 border border-zinc-700 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:border-primary-500/20 transition-colors">
                    <span className={`text-zinc-400 ${link.color} transition-colors`}>
                      {link.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-primary-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-zinc-500">Connect with me</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-zinc-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
            <p className="text-zinc-400">
              Looking for a motivated full-stack developer? Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

