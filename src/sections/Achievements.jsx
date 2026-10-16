import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AchievementCard from '../components/AchievementCard';
import { achievements } from '../data/portfolio';
import { ShieldCheck, Info } from 'lucide-react';

export default function Achievements() {
  const verifiedAchievements = achievements.filter(a => a.verified);
  const pendingAchievements = achievements.filter(a => !a.verified);

  return (
    <section id="achievements" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors & Milestones"
          title="Achievements & Verified Highlights"
          subtitle="Academic milestones, national entrance qualification, and practical project showcases presented with transparency."
        />

        {/* Verified Highlights First */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono font-medium text-slate-400">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>CONFIRMED ACADEMIC & PROJECT RECORDS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedAchievements.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>
        </div>

        {/* Transparent Pending / In-Progress Records */}
        {pendingAchievements.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-medium text-amber-400/90">
              <Info className="w-4 h-4" />
              <span>ACTIVE EFFORTS & ITEMS PENDING VERIFICATION</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingAchievements.map((item) => (
                <AchievementCard key={item.id} achievement={item} />
              ))}
            </div>
          </div>
        )}

        {/* Recruiter & Transparency statement */}
        <div className="mt-10 p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs font-mono text-slate-400 leading-relaxed">
          <strong className="text-slate-200">Recruiter Integrity Commitment:</strong> This portfolio distinguishes between verified academic certifications and ongoing technical practice. Claims regarding competitive programming rankings, test score percentiles, and hackathon milestones are reviewed prior to marking as verified.
        </div>
      </div>
    </section>
  );
}
