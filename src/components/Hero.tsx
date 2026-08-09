import React from 'react';
import { Download, FileText, Mail, Linkedin, Award, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { PERSONAL_INFO } from '../data/evidenceData';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenEvidenceModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onOpenEvidenceModal }) => {
  return (
    <section className="relative bg-slate-900 border-b border-slate-800 pt-8 pb-16 overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Engineering Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-sky-300 font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Civil Engineering Graduate</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-semibold">{PERSONAL_INFO.university}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-bold">GPA {PERSONAL_INFO.gpa}</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-sky-400">
                Water Resources & Hydraulic Civil Engineer
              </p>
            </div>

            {/* Evidence-Driven Positioning Statement */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Specialized in <strong className="text-white font-semibold">1D Hydraulic Modelling (HEC-RAS, HEC-HMS)</strong>, <strong className="text-white font-semibold">Statistical Canal Failure Regression (RStudio POLR)</strong>, <strong className="text-white font-semibold">Regional Infrastructure SID (AutoCAD)</strong>, and <strong className="text-white font-semibold">Toll Road Supervision QA/QC (Grade A 95/100)</strong>.
            </p>

            {/* Target Engineering Roles List */}
            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1.5">
              <div className="text-slate-400 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Targeted Engineering Roles:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {[
                  'Graduate Engineer',
                  'Civil Engineer',
                  'Water Resources Engineer',
                  'Hydraulic Engineer',
                  'Project Engineer',
                  'QA/QC Engineer',
                  'Engineering Analyst',
                  'Management Trainee'
                ].map((role) => (
                  <span
                    key={role}
                    className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Accomplishments Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 transition-all">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold mb-1">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>IOP Publication</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">IOP Conf. Series (2026)</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">DOI: 10.1088/1593</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Toll Road Supervision</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Paket 3B Supervision</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">Score: 95/100 (Grade A)</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/50 transition-all col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-1">
                  <Waves className="w-4 h-4 shrink-0" />
                  <span>3x Teaching Assistant</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Hydraulics, Hydrology, Irrigation 2</div>
                <div className="text-[11px] text-slate-400 mt-0.5">FT UNEJ Department</div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="21_CV_Ahmad Maulana Taufiqul Azmi.pdf"
                download="CV_Ahmad_Maulana_Taufiqul_Azmi.pdf"
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sky-950/50 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download Official CV PDF
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" /> Preview Full CV
              </button>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" /> Contact Me
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Portrait & Evidence Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Main Card Frame */}
              <div className="relative bg-slate-950 rounded-2xl p-3 border border-slate-800 shadow-2xl space-y-3">
                {/* Authentic Portrait Image */}
                <div id="hero-portrait-container" className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                  <img
                    src="01_HERO_Portrait_Ahmad.jpg"
                    alt="Ahmad Maulana Taufiqul Azmi"
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/01_HERO_Portrait_Ahmad_Maulana.jpeg";
                    }}
                  />
                  
                  {/* Photo Overlay Tag */}
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs">
                    <div className="text-slate-100 font-semibold">Ahmad Maulana Taufiqul Azmi</div>
                    <div className="text-[11px] text-sky-300">Civil & Water Resources Engineer • Jember</div>
                  </div>
                </div>

                {/* Evidence Summary Mini Bar */}
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800/80 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>21 Uploaded Files Verified</span>
                  </div>
                  <button
                    onClick={onOpenEvidenceModal}
                    className="text-sky-400 hover:text-sky-300 font-semibold text-[11px] underline flex items-center gap-1 cursor-pointer"
                  >
                    View Audit
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
