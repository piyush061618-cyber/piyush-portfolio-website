import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GmailOfficialIcon, GithubOfficialIcon, LinkedinOfficialIcon } from './OfficialIcons';
import { personalData } from '../data/portfolio';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & CS' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-slate-100 bg-white py-8 sm:py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Left: Brand & Degree */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 text-center sm:text-left">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                scrollToTop();
              }}
              className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-emerald-800 text-sm hover:border-emerald-300 transition-colors shadow-2xs"
            >
              PS
            </button>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                {personalData.name}
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Integrated M.Tech CSE · University of Hyderabad
              </p>
            </div>
          </div>

          {/* Quick tab switcher links */}
          {onNavigate && (
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-600">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    scrollToTop();
                  }}
                  className="hover:text-accent font-medium transition-colors py-1 px-1.5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-700 hover:text-black hover:bg-slate-100 transition-colors"
            >
              <GithubOfficialIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <LinkedinOfficialIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.contact.email}`}
              aria-label="Email Piyush"
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <GmailOfficialIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-600 hover:text-accent hover:bg-white border border-slate-200 transition-colors shadow-2xs"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 text-center text-xs font-mono text-slate-400">
          &copy; {currentYear} {personalData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
