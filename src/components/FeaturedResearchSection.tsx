import React from 'react';
import { BookOpen, ExternalLink, Activity, BarChart3, Database, ShieldAlert, Award, FileText, ZoomIn } from 'lucide-react';
import { RESEARCH_PUBLICATION } from '../data/evidenceData';
import { SmartImage } from './SmartImage';

interface FeaturedResearchProps {
  onSelectImage: (url: string, title: string) => void;
}

export const FeaturedResearchSection: React.FC<FeaturedResearchProps> = ({ onSelectImage }) => {
  const pub = RESEARCH_PUBLICATION;

  return (
    <section id="research" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
            <BookOpen className="w-3.5 h-3.5" /> Published Research Spotlight
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Featured Research & Publication
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Peer-reviewed international conference publication examining open channel hydraulics and statistical canal revetment failure drivers in Jember Regency.
          </p>
        </div>

        {/* Paper Banner Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                  IOP Publishing • Open Access
                </span>
                <span className="text-slate-400 font-mono">Vol. {pub.volume} ({pub.year}) {pub.issue}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 font-medium">{pub.conference}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                {pub.title}
              </h3>

              <div className="text-xs text-slate-300 font-medium">
                <strong className="text-sky-400">Authors:</strong> {pub.authors.join(', ')}
              </div>

              <div className="text-xs text-slate-400 font-mono">
                {pub.affiliation}
              </div>
            </div>

            {/* DOI Link CTA */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col gap-2">
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" /> View IOP Publisher DOI
              </a>
              <a
                href="12_PUBLICATION_FullPaper_IOP_1593_012024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" /> Download Full PDF (14 Pages)
              </a>
            </div>
          </div>

          {/* Abstract Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider">Publication Abstract:</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {pub.abstract}
            </p>
          </div>

          {/* Methodology & Key Findings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-400" /> Research Methodology
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pub.methodology}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {pub.software.map((sw) => (
                  <span key={sw} className="px-2 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800 text-[11px] font-mono">
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" /> Key Engineering Findings
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {pub.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* POLR Model Regression Results Table */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 overflow-x-auto">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-400" /> POLR Statistical Regression Model Results (AIC = 48.416)
              </h4>
              <span className="text-[11px] text-slate-400 font-mono">Formula: {pub.polrModel.formula}</span>
            </div>

            <table className="w-full text-left text-xs text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold bg-slate-900/80">
                  <th className="py-2.5 px-3">Hydraulic Predictor</th>
                  <th className="py-2.5 px-3">Estimate</th>
                  <th className="py-2.5 px-3">t-value</th>
                  <th className="py-2.5 px-3">p-value</th>
                  <th className="py-2.5 px-3">Engineering Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {pub.polrModel.variables.map((v) => (
                  <tr key={v.name} className="hover:bg-slate-900/50">
                    <td className="py-2 px-3 font-sans font-semibold text-slate-200">{v.name}</td>
                    <td className={`py-2 px-3 ${v.estimate > 0 ? 'text-sky-300' : 'text-slate-400'}`}>
                      {v.estimate > 0 ? `+${v.estimate}` : v.estimate}
                    </td>
                    <td className="py-2 px-3 text-slate-300">{v.tValue}</td>
                    <td className={`py-2 px-3 font-bold ${v.pValue < 0.1 ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {v.pValue}
                    </td>
                    <td className="py-2 px-3 font-sans text-slate-300">{v.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Evidence Figures Gallery Lightbox */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Research Visual Evidence & Software Screenshots:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pub.figures.map((fig, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectImage(fig.imageUrl, fig.title)}
                  className="group relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/80 text-left transition-all cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-900">
                    <SmartImage
                      src={fig.imageUrl}
                      alt={fig.title}
                      category={fig.title.includes('HEC-RAS') ? 'hec_ras' : fig.title.includes('RStudio') ? 'rstudio' : 'field_survey'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-3 py-1 rounded-lg bg-sky-600 text-white text-xs font-semibold flex items-center gap-1 shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" /> Inspect
                      </span>
                    </div>
                  </div>
                  <div className="p-3 space-y-1">
                    <div className="font-bold text-slate-200 text-xs truncate group-hover:text-sky-300">
                      {fig.title}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-2">
                      {fig.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
