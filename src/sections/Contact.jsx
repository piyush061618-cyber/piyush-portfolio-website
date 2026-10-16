import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolio';
import { Copy, Check, ArrowUpRight, FileText, MapPin } from 'lucide-react';
import { GmailOfficialIcon, GithubOfficialIcon, LinkedinOfficialIcon } from '../components/OfficialIcons';

export default function Contact() {
  const { contact } = personalData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="pt-20 pb-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="Get in Touch"
        title="Let's build something meaningful."
        subtitle="Open for internships, collaborative engineering projects, technical discussions, and computer science opportunities."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Main Contact Card */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-5 sm:p-7 md:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
            Direct Communication
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
            Whether you have an internship opportunity, a project idea, or would like to discuss full-stack architecture, backend systems, or algorithms, feel free to reach out.
          </p>

          {/* Direct Email Interaction */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                <GmailOfficialIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Email Address
                </span>
                <span className="text-xs sm:text-sm font-mono text-slate-900 font-semibold break-all">
                  {contact.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-lg text-xs font-mono bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-slate-200 transition-colors shadow-2xs active:scale-[0.99]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contact.email}?subject=Portfolio%20Inquiry%20-%20Piyush%20Singh`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-lg text-xs font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm active:scale-[0.99]"
              >
                <span>Open Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Status */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{contact.location}</span>
          </div>
        </div>

        {/* Social & Profiles Column */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Profiles & Networks
          </h3>

          {/* GitHub Card */}
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#181717] border border-slate-800 flex items-center justify-center text-white group-hover:scale-105 transition-all shadow-2xs shrink-0">
                <GithubOfficialIcon className="w-5 h-5" fill="#FFFFFF" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-accent transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  {contact.githubIsPlaceholder ? "Github profile not added" : "Inspect repositories & code"}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center group-hover:scale-105 transition-all shadow-2xs shrink-0">
                <LinkedinOfficialIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-[#0A66C2] transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  {contact.linkedinIsPlaceholder ? "Linkedin profile not added" : "Professional network & background"}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Resume Card */}
          {contact.hasResumeFile ? (
            <a
              href={contact.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-accent">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-accent transition-colors">
                    Curriculum Vitae (PDF)
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    Download current resume
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent transition-all" />
            </a>
          ) : (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs font-mono text-slate-500">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Resume PDF will be enabled once added to public folder.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
