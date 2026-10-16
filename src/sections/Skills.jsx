import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import Fundamentals from './Fundamentals';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="pt-20 pb-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="Technical Toolkit & Theory"
        title="Skills & CS Fundamentals"
        subtitle="Practical technologies applied in software development alongside core computer science fundamentals studied at University of Hyderabad."
      />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((cat, idx) => (
          <SkillCard
            key={idx}
            category={cat.category}
            description={cat.description}
            skills={cat.skills}
          />
        ))}
      </div>

      {/* Clean & Attractive 4 CS Fundamentals */}
      <Fundamentals />

      {/* Honest student clarification note */}
      <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
        <span>
          💡 <strong className="text-slate-800">Note:</strong> Organized by active practice and academic coursework, without arbitrary percentage bars.
        </span>
        <span className="text-slate-400">UoH · 2026</span>
      </div>
    </section>
  );
}
