import React from 'react';
import { ArrowRight, Mail, FileText, Terminal, FolderGit2, Cpu, User, Sparkles, GraduationCap } from 'lucide-react';
import { GmailOfficialIcon } from '../components/OfficialIcons';
import { personalData } from '../data/portfolio';

export default function Hero({ onNavigate }) {
  const { name, badge, tagline, heroIntro, focusAreas, contact, portrait } = personalData;

  const quickNavCards = [
    {
      id: 'projects',
      title: 'Projects & Achievements',
      desc: 'Explore the Student Attendance System, real-time apps, and academic milestones.',
      icon: FolderGit2,
      badge: '3 Projects · 6 Milestones'
    },
    {
      id: 'skills',
      title: 'Skills & CS Fundamentals',
      desc: 'Technical toolkit (React, Node, C++, SQL) alongside OS, DBMS, CN, and OOP.',
      icon: Cpu,
      badge: '5 Categories · Core CS'
    },
    {
      id: 'about',
      title: 'About & Education',
      desc: 'Integrated M.Tech (CSE) at University of Hyderabad, coursework, and focus.',
      icon: User,
      badge: 'UoH · 2024 – 2029'
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      desc: 'Open for internships, collaborative engineering projects, and technical dialogue.',
      icon: Mail,
      badge: 'Direct Mail & Socials'
    }
  ];

  return (
    <section id="home" className="pt-20 pb-14 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Subtle background ambient gradient blending with pure white */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-emerald-50/30 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-slate-50/40 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid: Text on Left, Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center mb-12 sm:mb-16">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-50 border border-emerald-200 text-emerald-800 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-5 sm:mb-6 break-words">
              {tagline.split('. ').map((part, index, arr) => (
                <span key={index} className="block">
                  {part}{index < arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              {heroIntro}
            </p>

            {/* Focus Chips */}
            <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1.5 w-full sm:w-auto mb-1 sm:mb-0">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                Focus Areas:
              </span>
              {focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all shadow-sm active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Explore Projects & Milestones</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-2xs active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <GmailOfficialIcon className="w-4 h-4" />
                <span>Contact Me</span>
              </button>

              {contact.hasResumeFile && (
                <a
                  href={contact.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all shadow-2xs text-center"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Resume (PDF)</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: User Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-[280px] sm:max-w-sm w-full mx-auto lg:mr-0">
              {/* Outer decorative card */}
              <div className="bg-white p-2.5 sm:p-3 rounded-3xl border border-slate-200 shadow-photo">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <img
                    src={portrait || "/piyush-portrait.jpg"}
                    alt="Piyush Singh - Integrated M.Tech CSE Student at University of Hyderabad"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  
                  {/* Floating Tag inside image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-semibold drop-shadow-md">
                      {name}
                    </p>
                    <p className="text-xs text-slate-200 font-mono drop-shadow-sm flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-accent-light" />
                      University of Hyderabad
                    </p>
                  </div>
                </div>

                {/* Status pill under portrait */}
                <div className="mt-2.5 sm:mt-3 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Integrated M.Tech CSE</span>
                  </div>
                  <span className="text-slate-400">Class of 2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Gateway Cards (Quick Navigation) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 border-b border-slate-200 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Explore Portfolio Sections</span>
            </h2>
            <span className="text-[11px] sm:text-xs font-mono text-slate-400">
              Click any section to view details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {quickNavCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => onNavigate(card.id)}
                  className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 text-left flex items-start justify-between gap-3 sm:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.99]"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-105 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-accent transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900 text-base group-hover:text-accent transition-colors">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                      <span className="inline-block mt-3 text-[11px] font-mono text-slate-500 group-hover:text-accent transition-colors">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
