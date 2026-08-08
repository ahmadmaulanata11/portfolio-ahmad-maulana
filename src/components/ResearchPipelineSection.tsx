import React from 'react';
import { GitCommit, ArrowRight, CheckCircle2, ZoomIn, Terminal, Layers } from 'lucide-react';
import { RESEARCH_PIPELINE } from '../data/evidenceData';
import { SmartImage } from './SmartImage';

interface ResearchPipelineProps {
  onSelectImage: (url: string, title: string) => void;
}

export const ResearchPipelineSection: React.FC<ResearchPipelineProps> = ({ onSelectImage }) => {
  return (
    <section id="workflow" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400">
            <GitCommit className="w-3.5 h-3.5" /> Reconstructed Research Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Research Process Pipeline
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Workflow reconstructed from the peer-reviewed IOP research paper, field current meter measurements, HEC-RAS 1D modeling, and RStudio POLR regression scripts.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_PIPELINE.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 space-y-4 flex flex-col justify-between transition-all shadow-lg group"
            >
              <div className="space-y-3">
                {/* Step Badge */}
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Step 0{step.stepNumber} of 06
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400">{step.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                {step.keyMetricsOrFormula && (
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400">
                    <span className="text-slate-500 font-sans font-bold block text-[10px]">Formula / Metric:</span>
                    {step.keyMetricsOrFormula}
                  </div>
                )}

                {/* Tools Badges */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {step.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evidence Photo Trigger if present */}
              {step.evidenceImageUrl && (
                <div className="pt-3 border-t border-slate-800">
                  <button
                    onClick={() => onSelectImage(step.evidenceImageUrl!, step.title)}
                    className="w-full bg-slate-900 hover:bg-slate-800 p-2 rounded-xl border border-slate-800 flex items-center gap-2.5 text-left transition-colors cursor-pointer group/btn"
                  >
                    <SmartImage
                      src={step.evidenceImageUrl}
                      alt={step.title}
                      category={step.title.includes('HEC-RAS') ? 'hec_ras' : step.title.includes('POLR') ? 'rstudio' : 'field_survey'}
                      className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-700"
                    />
                    <div className="overflow-hidden text-xs">
                      <div className="text-slate-200 font-semibold group-hover/btn:text-sky-300 truncate flex items-center gap-1">
                        <span>Inspect Field Evidence</span>
                        <ZoomIn className="w-3 h-3 text-sky-400 shrink-0" />
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">{step.evidenceCaption}</div>
                    </div>
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
