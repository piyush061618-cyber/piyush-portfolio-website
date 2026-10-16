import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import AchievementCard from '../components/AchievementCard';
import { projects, achievements } from '../data/portfolio';
import { FolderGit2, Award, ShieldCheck, Info } from 'lucide-react';

export default function ProjectsAndAchievements() {
  const [filter, setFilter] = useState('all'); // 'all', 'projects', 'achievements'

  const verifiedAchievements = achievements.filter(a => a.verified);
  const pendingAchievements = achievements.filter(a => !a.verified);

  return (
    <section id="projects" className="pt-20 pb-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="Portfolio & Milestones"
        title="Projects & Achievements"
        subtitle="Full-stack engineering projects, university hackathon showcases, and verified academic milestones consolidated in one place."
      />

      {/* Filter / View Toggle */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 pb-3 border-b border-slate-200">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all ${
            filter === 'all'
              ? 'bg-slate-900 text-white font-bold shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs'
          }`}
        >
          All Items ({projects.length + achievements.length})
        </button>

        <button
          onClick={() => setFilter('projects')}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all ${
            filter === 'projects'
              ? 'bg-slate-900 text-white font-bold shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs'
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5 text-accent" />
          <span>Projects ({projects.length})</span>
        </button>

        <button
          onClick={() => setFilter('achievements')}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all ${
            filter === 'achievements'
              ? 'bg-slate-900 text-white font-bold shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-accent" />
          <span>Achievements ({achievements.length})</span>
        </button>
      </div>

      {/* Projects Section */}
      {(filter === 'all' || filter === 'projects') && (
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-accent" />
              <span>Featured Software Projects</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {projects.length} Applications
            </span>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={idx === 0}
              />
            ))}
          </div>
        </div>
      )}

      {/* Achievements Section */}
      {(filter === 'all' || filter === 'achievements') && (
        <div className="pt-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>Academic & Competitive Highlights</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {achievements.length} Milestones
            </span>
          </div>

          {/* Confirmed / Verified */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>VERIFIED ACADEMIC & PROJECT RECORDS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {verifiedAchievements.map((item) => (
                <AchievementCard key={item.id} achievement={item} />
              ))}
            </div>
          </div>

          {/* Pending Verification */}
          {pendingAchievements.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-amber-700">
                <Info className="w-4 h-4" />
                <span>ACTIVE EFFORTS & ITEMS PENDING SCORECARD VERIFICATION</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {pendingAchievements.map((item) => (
                  <AchievementCard key={item.id} achievement={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
