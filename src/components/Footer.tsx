import React from 'react';
import { Layers, ArrowUp, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/evidenceData';

interface FooterProps {
  onOpenEvidenceModal: () => void;
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEvidenceModal, onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-xs text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="01_HERO_Portrait_Ahmad.jpg"
                alt={PERSONAL_INFO.name}
                className="w-10 h-10 rounded-full object-cover border border-sky-500"
              />
              <div>
                <div className="font-bold text-slate-100 text-sm">{PERSONAL_INFO.name}</div>
                <div className="text-sky-400 font-medium text-xs">{PERSONAL_INFO.degree} • GPA {PERSONAL_INFO.gpa}</div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Evidence-driven civil & water resources engineering portfolio built with verified research publications, field current meter survey measurements, 1D HEC-RAS hydraulics, RStudio POLR statistics, and highway supervision experience.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-medium text-[11px]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Non-Fabricated Engineering Portfolio • 21 Files Audited</span>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
            <button
              onClick={onOpenEvidenceModal}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Layers className="w-4 h-4" /> Evidence Audit Mapping
            </button>

            <button
              onClick={onOpenCvModal}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold cursor-pointer transition-colors"
            >
              Preview CV Transcript
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white cursor-pointer transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Universitas Jember (UNEJ) • Department of Civil Engineering
          </div>
        </div>

      </div>
    </footer>
  );
};
