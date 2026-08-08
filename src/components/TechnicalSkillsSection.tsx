import React from 'react';
import { Cpu, CheckCircle2, AlertTriangle, Terminal } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/evidenceData';

export const TechnicalSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400">
            <Cpu className="w-3.5 h-3.5" /> Software & Engineering Tools
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Technical Software Proficiency
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Software tools and programming languages verified through project outputs, RStudio scripts, CAD drawing layouts, and HEC-RAS geometry models.
          </p>
        </div>

        {/* Authenticity Policy Banner */}
        <div className="p-4 bg-slate-950 border border-amber-900/60 rounded-xl flex items-start gap-3 text-xs text-slate-300">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-300">Authenticity Assurance Policy:</span>
            <p className="text-slate-400 leading-relaxed">
              In accordance with strict evidence mandates, software skills on this website are limited <strong>only</strong> to tools demonstrated in actual project documentation. Unverified software (such as SQL, Power BI, or Tableau) has been deliberately excluded.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-4"
            >
              <h3 className="text-base font-bold text-slate-100 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-xs font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                  {cat.skills.length} Tools Verified
                </span>
              </h3>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 bg-slate-900 rounded-xl border border-slate-800/90 space-y-1.5 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-100 text-xs sm:text-sm flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-sky-400" />
                        {skill.name}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        skill.level === 'Advanced'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-sky-950 text-sky-300 border border-sky-800'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      <strong className="text-slate-300">Verified Application:</strong> {skill.proof}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
