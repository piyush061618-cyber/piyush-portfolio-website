import React from 'react';
import { Award, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function AchievementCard({ achievement }) {
  const { title, score, category, verified, verificationNote, description } = achievement;

  return (
    <div className={`glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 flex flex-col justify-between ${
      verified ? 'border-slate-200 bg-white' : 'border-amber-200/90 bg-amber-50/20'
    }`}>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 sm:mb-3">
          <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-500">
            {category}
          </span>
          {verified ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle className="w-3 h-3 text-accent" />
              Verified Record
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
              <Clock className="w-3 h-3 text-amber-600" />
              Pending Documentation
            </span>
          )}
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-baseline justify-between gap-1 sm:gap-3 mb-2">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          {score && (
            <span className="text-sm sm:text-base font-bold font-mono text-emerald-700 shrink-0">
              {score}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {!verified && verificationNote && (
        <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1.5 text-[11px] font-mono text-amber-800">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
          <span>Note: {verificationNote}</span>
        </div>
      )}
    </div>
  );
}
