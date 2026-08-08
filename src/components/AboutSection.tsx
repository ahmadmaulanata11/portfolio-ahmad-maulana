import React from 'react';
import { GraduationCap, Award, MapPin, Globe, CheckCircle2, BookOpen, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/evidenceData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400">
            <User className="w-3.5 h-3.5" /> Background & Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            About Ahmad Maulana Taufiqul Azmi, S.T.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Civil Engineering graduate from Universitas Jember with demonstrated technical capabilities in hydraulic modeling, irrigation failure analysis, construction supervision, and regional infrastructure planning.
          </p>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Biography & Technical Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                My engineering approach combines rigorous field data collection (current meter measurements, topographic profiling) with 1D hydraulic modeling in <strong className="text-white">HEC-RAS</strong> and advanced statistical regression in <strong className="text-white">RStudio</strong> to solve practical water infrastructure challenges.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-400" /> Location & Mobility
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</div>
                <div className="text-[11px] text-emerald-400">{PERSONAL_INFO.relocation}</div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-sky-400" /> Language Proficiency
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">Indonesian (Native)</div>
                <div className="text-[11px] text-sky-300">English (EPT Score: 483 - UPA Bahasa UNEJ)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credential Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-950 text-sky-400 border border-sky-800/80">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Education</div>
                  <h4 className="text-base font-bold text-slate-100">{PERSONAL_INFO.university}</h4>
                  <div className="text-xs text-slate-400">{PERSONAL_INFO.graduationPeriod}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300 font-medium">Degree Program:</span>
                  <span className="text-xs font-semibold text-slate-100">{PERSONAL_INFO.degree}</span>
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-slate-800">
                  <span className="text-xs text-slate-300 font-medium">Grade Point Average (GPA):</span>
                  <span className="text-sm font-extrabold text-emerald-400">{PERSONAL_INFO.gpa}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-sky-400" /> Relevant Coursework Completed:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Engineering Statistics',
                    'Hydraulics',
                    'Hydrology',
                    'Numerical Methods',
                    'Water Resources Engineering',
                    'Construction Management'
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
