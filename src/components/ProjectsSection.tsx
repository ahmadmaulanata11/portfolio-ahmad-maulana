import React from 'react';
import { Layers, Tool, CheckCircle, ExternalLink, FileText, ZoomIn, Compass } from 'lucide-react';
import { PROJECTS } from '../data/evidenceData';
import { SmartImage } from './SmartImage';

interface ProjectsSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="projects" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
            <Compass className="w-3.5 h-3.5" /> Engineering Deliverables
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Real-world water resources modeling, regional infrastructure survey & design (SID), and highway supervision.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl transition-all"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-100">{proj.title}</h3>
                  <div className="text-xs sm:text-sm font-medium text-sky-400">{proj.subtitle}</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">
                    Role: <strong className="text-slate-200">{proj.role}</strong> • {proj.organization} ({proj.location})
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                  {proj.period}
                </div>
              </div>

              {/* Overview / Problem / Objective */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-sky-400 uppercase tracking-wider">Project Overview</div>
                  <p className="text-slate-300 leading-relaxed">{proj.overview}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-400 uppercase tracking-wider">Engineering Problem</div>
                  <p className="text-slate-300 leading-relaxed">{proj.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400 uppercase tracking-wider">Objective & Deliverable</div>
                  <p className="text-slate-300 leading-relaxed">{proj.objective}</p>
                </div>
              </div>

              {/* Activities & Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Methodology & Engineering Activities:
                  </h4>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">{proj.methodology}</p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {proj.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Verified Outcomes & Impact:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {proj.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-500 font-bold uppercase mr-1">Tools & Software Used:</span>
                {proj.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/60 text-xs font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Project Gallery */}
              {proj.gallery && proj.gallery.length > 0 && (
                <div className="pt-3 space-y-3">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Project Gallery & CAD / Photo Outputs:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {proj.gallery.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectImage(item.url, item.title)}
                        className="group bg-slate-950 p-2.5 rounded-xl border border-slate-800 hover:border-sky-500/80 text-left transition-all cursor-pointer space-y-2"
                      >
                        <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-900">
                          <SmartImage
                            src={item.url}
                            alt={item.title}
                            category={item.title.includes('AutoCAD') ? 'autocad' : item.title.includes('HEC-RAS') ? 'hec_ras' : item.title.includes('Inspection') ? 'toll_road' : 'field_survey'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="px-2.5 py-1 rounded bg-sky-600 text-white text-[11px] font-semibold flex items-center gap-1">
                              <ZoomIn className="w-3 h-3" /> Inspect Output
                            </span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-200 text-xs truncate group-hover:text-sky-300">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-2">
                          {item.caption}
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
