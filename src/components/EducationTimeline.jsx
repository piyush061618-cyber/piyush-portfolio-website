import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function EducationTimeline({ educationList }) {
  return (
    <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 space-y-6 sm:space-y-8 pl-5 sm:pl-8">
      {educationList.map((item, index) => (
        <div key={index} className="relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-7 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform shadow-2xs">
            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-6 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {item.duration}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-emerald-700 font-medium">
                {item.status}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight flex items-start sm:items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5 sm:mt-0" />
              <span>{item.degree}</span>
            </h3>

            <p className="text-sm font-medium text-slate-700 mt-1">
              {item.institution}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {item.details}
            </p>

            {item.cgpaNote && (
              <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                ℹ️ {item.cgpaNote}
              </div>
            )}

            {item.keyCoursework && item.keyCoursework.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  Key Coursework & Focus:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.keyCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
