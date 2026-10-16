import React from 'react';
import SectionHeading from '../components/SectionHeading';
import EducationTimeline from '../components/EducationTimeline';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background-secondary/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Coursework"
          subtitle="Formal academic trajectory, university degree program, and verified educational performance."
        />

        <div className="max-w-4xl">
          <EducationTimeline educationList={educationData} />
        </div>
      </div>
    </section>
  );
}
