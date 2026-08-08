import React from 'react';
import { Briefcase, Building, MapPin, Calendar, CheckCircle2, FileCheck, Award, ZoomIn } from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/evidenceData';
import { SmartImage } from './SmartImage';

interface ExperienceSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="experience" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400">
            <Briefcase className="w-3.5 h-3.5" /> Professional & Academic Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Verified Work Experience
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Toll road construction supervision, university academic teaching assistantships, and postgraduate research grant execution.
          </p>
        </div>

        {/* Experience List Timeline */}
        <div className="space-y-8">
          {WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 transition-all shadow-xl"
            >
              {/* Title Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100">{exp.title}</h3>
                    {exp.gradeScore && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold text-xs">
                        {exp.gradeScore}
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-sky-400 flex items-center gap-2">
                    <Building className="w-4 h-4" /> {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> {exp.period}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.overview}
              </p>

              {/* Responsibilities & Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" /> Key Responsibilities:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-400" /> Verified Deliverables:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Skills Applied Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-500 font-bold uppercase mr-1">Applied Skills:</span>
                {exp.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Supporting Evidence Gallery */}
              {exp.evidenceFiles && exp.evidenceFiles.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Supporting Photos & Documents ({exp.evidenceFiles.length}):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {exp.evidenceFiles.map((file, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectImage(file.url, file.title)}
                        className="group bg-slate-900 rounded-xl p-2.5 border border-slate-800 hover:border-sky-500/80 text-left transition-all cursor-pointer flex flex-col space-y-2"
                      >
                        <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-950">
                          <SmartImage
                            src={file.url}
                            alt={file.title}
                            category={file.title.includes('Toll') ? 'toll_road' : file.title.includes('Teaching') ? 'certificate' : 'field_survey'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="px-2.5 py-1 rounded bg-sky-600 text-white text-[11px] font-semibold flex items-center gap-1">
                              <ZoomIn className="w-3 h-3" /> Inspect
                            </span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-200 text-xs truncate group-hover:text-sky-300">
                          {file.title}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-2">
                          {file.caption}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
