import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background-secondary/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Practical Software & Academic Implementations"
          subtitle="Explore selected applications showcasing full-stack systems, authentication workflows, real-time communications, and database architectures."
        />

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={idx === 0}
            />
          ))}
        </div>

        {/* Note on code & future additions */}
        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          Source code repositories and upcoming projects can be configured directly in <code className="text-accent bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">src/data/portfolio.js</code>.
        </div>
      </div>
    </section>
  );
}
