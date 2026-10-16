import React from 'react';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  "Programming & Problem Solving": Code,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Databases": Database,
  "Tools & Deployment": Wrench,
};

export default function SkillCard({ category, description, skills }) {
  const IconComponent = categoryIcons[category] || Code;

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              {category}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3.5 sm:mt-5">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group/tag inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-colors shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/70 group-hover/tag:bg-accent transition-colors"></span>
              <span>{skill.name}</span>
              {skill.status && (
                <span className="text-[10px] text-slate-400 font-sans border-l border-slate-200 pl-1.5">
                  {skill.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
