import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = "left" }) {
  const isCentered = align === "center";
  return (
    <div className={`mb-6 sm:mb-10 ${isCentered ? 'text-center' : ''}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase mb-2 sm:mb-3 bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed ${isCentered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
