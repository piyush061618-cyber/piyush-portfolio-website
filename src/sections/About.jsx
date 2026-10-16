import React from 'react';
import SectionHeading from '../components/SectionHeading';
import EducationTimeline from '../components/EducationTimeline';
import { personalData, educationData } from '../data/portfolio';
import { Terminal, Compass, Layers, GraduationCap } from 'lucide-react';

export default function About() {
  const { aboutStory } = personalData;

  const corePillars = [
    {
      title: "Strong CS Foundations",
      desc: "Deep focus on algorithms, time-complexity analysis, operating systems, and database internals.",
      icon: Terminal
    },
    {
      title: "Full-Stack & Systems Focus",
      desc: "Crafting end-to-end applications with responsive frontends and well-architected backend services.",
      icon: Layers
    },
    {
      title: "Curiosity & Continuous Learning",
      desc: "Actively exploring backend architecture, software patterns, and strengthening problem-solving skills.",
      icon: Compass
    }
  ];

  return (
    <section id="about" className="pt-20 pb-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="About & Academic Background"
        title="Who I Am & What I Am Learning"
        subtitle="A closer look at my academic journey at University of Hyderabad, technical focus, and educational milestones."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12 sm:mb-16">
        {/* Main Story Paragraphs */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <div className="glass-panel rounded-2xl p-5 sm:p-7 md:p-8 space-y-3.5 sm:space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
            {aboutStory.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick summary strip */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-mono text-slate-600 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between shadow-2xs">
            <div>
              <span className="text-slate-400 block text-[10px] sm:text-[11px] uppercase">Institution</span>
              <span className="text-slate-800 font-semibold">University of Hyderabad</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] sm:text-[11px] uppercase">Program</span>
              <span className="text-slate-800 font-semibold">Integrated M.Tech (CSE)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] sm:text-[11px] uppercase">Status</span>
              <span className="text-accent font-semibold">Enrolled (Expected 2029)</span>
            </div>
          </div>
        </div>

        {/* Pillars / Values Column */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
            Core Engineering Pillars
          </h3>
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5 shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="pt-6 border-t border-slate-200">
        <div className="mb-8 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-accent" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Education & Coursework
          </h3>
        </div>
        <div className="max-w-4xl">
          <EducationTimeline educationList={educationData} />
        </div>
      </div>
    </section>
  );
}
