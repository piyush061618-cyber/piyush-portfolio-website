import React from 'react';
import { ExternalLink, CheckCircle2, Clock, Terminal } from 'lucide-react';
import { GithubOfficialIcon } from './OfficialIcons';

export default function ProjectCard({ project, featured = false }) {
  const {
    title,
    category,
    badge,
    summary,
    contextNote,
    technologies,
    liveDemoUrl,
    hasLiveDemo,
    githubUrl,
    githubIsPlaceholder,
    features,
    plannedFeatures
  } = project;

  return (
    <article
      className={`glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between overflow-hidden relative ${
        featured ? 'border-emerald-300 ring-1 ring-emerald-200 shadow-md' : ''
      }`}
    >
      {/* Visual Header / Typographic Mockup */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
          <span className="text-xs font-mono text-slate-600 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            {category}
          </span>
        </div>

        {badge && (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-200">
            {badge}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 md:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-1 mb-3">
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              {title}
            </h3>
            {contextNote && (
              <p className="text-xs text-emerald-700 font-mono font-medium">
                {contextNote}
              </p>
            )}
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
            {summary}
          </p>

          {/* Implemented Features */}
          {features && features.length > 0 && (
            <div className="mb-4 sm:mb-5">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Key Completed Capabilities
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Planned Features */}
          {plannedFeatures && plannedFeatures.length > 0 && (
            <div className="mb-4 sm:mb-5 p-3 rounded-xl bg-amber-50/60 border border-amber-200">
              <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                In Progress / Planned Enhancements
              </h4>
              <ul className="space-y-1">
                {plannedFeatures.map((feat, idx) => (
                  <li key={idx} className="text-[11px] sm:text-xs text-slate-700 list-disc list-inside">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack & Links */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
            {hasLiveDemo ? (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-accent text-white hover:bg-accent-hover transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.99]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-50 border border-slate-200 cursor-not-allowed">
                <span>Demo (Hosting in progress)</span>
              </span>
            )}

            {!githubIsPlaceholder ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-2xs active:scale-[0.99]"
              >
                <GithubOfficialIcon className="w-3.5 h-3.5 text-slate-800" />
                <span>Source Code</span>
              </a>
            ) : (
              <span
                title="Repository link will be active once public repository URL is configured"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200"
              >
                <GithubOfficialIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>Repo URL pending</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
