import React from 'react';
import { csFundamentals } from '../data/portfolio';
import { HardDrive, Database, Network, Terminal } from 'lucide-react';

const icons = {
  HardDrive,
  Database,
  Network,
  Terminal,
};

export default function Fundamentals() {
  return (
    <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200">
      <div className="mb-5 sm:mb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-2 bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Core CS
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Computer Science Fundamentals
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Essential university foundations studied and practiced.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {csFundamentals.map((subj, idx) => {
          const Icon = icons[subj.icon] || Terminal;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-3.5 sm:p-5 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shrink-0 shadow-2xs">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-accent transition-colors">
                    {subj.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                    {subj.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
