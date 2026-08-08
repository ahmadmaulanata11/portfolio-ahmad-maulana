import React, { useState } from 'react';
import { Waves, BarChart2, ShieldCheck, Compass, FileText, CheckCircle, Activity, LayoutGrid, FileCheck, ExternalLink } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: 'portrait' | 'hec_ras' | 'rstudio' | 'field_survey' | 'toll_road' | 'autocad' | 'publication' | 'certificate' | 'generic';
  title?: string;
  caption?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  category = 'generic',
  title,
  caption
}) => {
  const [hasError, setHasError] = useState(false);

  const isPdf = src.toLowerCase().endsWith('.pdf') || src.toLowerCase().includes('.pdf');

  if (isPdf) {
    const docTitle = title || alt || 'Official PDF Document';
    return (
      <div className={`bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center text-center relative overflow-hidden select-none group shadow-md ${className}`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:0.75rem_0.75rem]" />
        
        {/* Paper corner fold accent */}
        <div className="absolute top-0 right-0 w-6 h-6 bg-sky-500/10 border-b border-l border-sky-400/30 rounded-bl-lg" />

        <div className="relative z-10 flex flex-col items-center gap-1.5 max-w-full my-auto px-1">
          {/* PDF Badge Icon */}
          <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-md group-hover:scale-110 group-hover:border-sky-400 transition-all">
            <FileCheck className="w-5 h-5 text-sky-400" />
          </div>

          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-800/60 text-[9px] font-bold text-rose-300 uppercase tracking-wider">
            <FileText className="w-2.5 h-2.5 text-rose-400" /> PDF Document
          </div>

          <div className="text-[11px] font-bold text-slate-100 line-clamp-2 leading-tight">
            {docTitle}
          </div>

          {caption && (
            <div className="text-[10px] text-slate-400 line-clamp-2 leading-snug">
              {caption}
            </div>
          )}

          <div className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[9px] text-sky-300 font-mono flex items-center gap-1">
            <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
            <span>Verified Official Record</span>
          </div>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-sky-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[11px] font-bold text-sky-300 gap-1 backdrop-blur-[2px]">
          <ExternalLink className="w-3.5 h-3.5" /> Inspect PDF Document
        </div>
      </div>
    );
  }

  if (hasError) {
    // Render custom technical engineering vector fallback card
    return (
      <div className={`bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden select-none ${className}`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1rem_1rem]" />
        
        <div className="relative z-10 flex flex-col items-center gap-2 max-w-xs">
          {category === 'portrait' && (
            <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
          )}
          {category === 'hec_ras' && (
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Waves className="w-6 h-6" />
            </div>
          )}
          {category === 'rstudio' && (
            <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
              <BarChart2 className="w-6 h-6" />
            </div>
          )}
          {category === 'field_survey' && (
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-6 h-6" />
            </div>
          )}
          {category === 'toll_road' && (
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Activity className="w-6 h-6" />
            </div>
          )}
          {category === 'autocad' && (
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <LayoutGrid className="w-6 h-6" />
            </div>
          )}
          {(category === 'publication' || category === 'certificate') && (
            <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <FileText className="w-6 h-6" />
            </div>
          )}

          <div className="text-xs font-semibold text-slate-200 mt-1 line-clamp-1">
            {title || alt || 'Verified Civil Engineering Evidence'}
          </div>
          {caption && (
            <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
              {caption}
            </div>
          )}
          <div className="mt-1 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-sky-400 font-mono flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>Verified Engineering Record</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src.startsWith('http') || src.startsWith('/') ? src : '/' + src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
