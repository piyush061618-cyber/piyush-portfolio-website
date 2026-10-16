import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Home, User, Cpu, FolderGit2, Mail, ExternalLink } from 'lucide-react';
import { GmailOfficialIcon, GithubOfficialIcon, LinkedinOfficialIcon } from './OfficialIcons';
import { personalData } from '../data/portfolio';

export const navTabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About & Education', icon: User },
  { id: 'skills', label: 'Skills & CS Fundamentals', icon: Cpu },
  { id: 'projects', label: 'Projects & Achievements', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar({ activeTab, onTabChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTab = (tabId) => {
    onTabChange(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 sm:py-3 shadow-xs'
            : 'bg-white/80 backdrop-blur-sm py-3 sm:py-4 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <button
              onClick={() => handleSelectTab('home')}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 text-left"
              aria-label="Piyush Singh Portfolio Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-emerald-800 group-hover:bg-emerald-100 group-hover:border-emerald-300 transition-colors shadow-2xs">
                PS<span className="text-accent">.</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800 tracking-tight block text-xs sm:text-sm group-hover:text-slate-900 transition-colors">
                  {personalData.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 block -mt-0.5">
                  UoH · Integrated M.Tech
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
              {navTabs.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTab(item.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-white bg-slate-900 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* Quick action button */}
              <button
                onClick={() => handleSelectTab('contact')}
                className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent text-white hover:bg-accent-hover transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Get in Touch
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`md:hidden p-2 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isOpen
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl z-50 rounded-b-2xl max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          id="mobile-menu"
        >
          <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-100">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Menu Navigation
            </span>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              UoH M.Tech
            </span>
          </div>

          <div className="flex flex-col space-y-1.5">
            {navTabs.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold shadow-md border border-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-white/10 text-emerald-400'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-slate-900'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="tracking-tight">{item.label}</span>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Selected
                    </span>
                  ) : (
                    <span className="text-slate-300 text-xs font-mono group-hover:text-slate-500 transition-colors">
                      →
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick CTA & Socials in Mobile Drawer */}
            <div className="pt-3 mt-2 border-t border-slate-100 space-y-3">
              <button
                onClick={() => handleSelectTab('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm active:scale-[0.99]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3 pt-1">
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 rounded-lg text-slate-700 hover:text-black hover:bg-slate-100 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubOfficialIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinOfficialIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Email Piyush"
                >
                  <GmailOfficialIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
