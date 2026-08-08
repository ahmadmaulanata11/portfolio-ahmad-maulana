import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Layers, ShieldCheck, Search, ExternalLink } from 'lucide-react';
import { EVIDENCE_ITEMS } from '../data/evidenceData';

interface EvidenceMappingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage?: (url: string, title: string) => void;
}

export const EvidenceMappingModal: React.FC<EvidenceMappingModalProps> = ({
  isOpen,
  onClose,
  onSelectImage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  if (!isOpen) return null;

  const filters = ['All', 'Featured Research', 'Work Experience', 'Projects', 'Publication', 'Certifications'];

  const filteredItems = EVIDENCE_ITEMS.filter((item) => {
    const matchesSearch =
      item.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.classification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'All' || item.mappedSections.some((sec) => sec.includes(selectedFilter));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 font-semibold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified Evidence Audit
              </span>
              <span className="text-xs text-slate-400 font-mono">21 Files Analyzed</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">
              Evidence-to-Section Classification Mapping
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Strictly non-fabricated engineering portfolio. Every statement, metric, and skill on this website maps directly to an authenticated source file.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search evidence file or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Content Table / Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2.5 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sky-400 font-bold">{item.id}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold text-[11px] border border-slate-700">
                      {item.classification}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    {item.confidence}% Match
                  </span>
                </div>

                <div className="font-mono text-slate-200 font-semibold truncate hover:text-sky-300">
                  {item.filename}
                </div>

                <p className="text-slate-400 leading-relaxed text-[11px]">
                  {item.description}
                </p>

                {/* Key Verified Details */}
                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Verified Details:
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px]">
                    {item.verifiedDetails.map((detail, idx) => (
                      <li key={idx} className="truncate">{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Mapped Sections Badges */}
                <div className="flex flex-wrap items-center gap-1 pt-1">
                  <span className="text-slate-500 text-[10px] font-bold uppercase">Mapped To:</span>
                  {item.mappedSections.map((sec) => (
                    <span
                      key={sec}
                      className="px-2 py-0.5 rounded bg-sky-950/60 text-sky-300 border border-sky-800/50 text-[10px] font-medium"
                    >
                      {sec}
                    </span>
                  ))}
                </div>

                {/* Preview Link if Image or PDF */}
                {item.thumbnailUrl && onSelectImage && (
                  <button
                    onClick={() => onSelectImage(item.thumbnailUrl!, item.filename)}
                    className="mt-1 text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    <ExternalLink className="w-3 h-3" /> Inspect Photo / Document Output
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Rule: Zero fabricated information. Every entry maps directly to 1 of 21 verified files.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold cursor-pointer"
          >
            Close Evidence Audit
          </button>
        </div>

      </div>
    </div>
  );
};
