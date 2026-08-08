import React from 'react';
import { BookOpen, ExternalLink, Download, FileText, CheckCircle2, Share2, Layers } from 'lucide-react';
import { RESEARCH_PUBLICATION } from '../data/evidenceData';
import { SmartImage } from './SmartImage';

interface PublicationSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const PublicationSection: React.FC<PublicationSectionProps> = ({ onSelectImage }) => {
  const pub = RESEARCH_PUBLICATION;

  return (
    <section id="publication" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
            <BookOpen className="w-3.5 h-3.5" /> Peer-Reviewed Metadata
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            International Academic Publication
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Complete bibliographic details extracted directly from the authenticated IOP Conference Series PDF.
          </p>
        </div>

        {/* Full Publication Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
            
            {/* Left Info */}
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950 border border-sky-800 text-sky-300 font-mono text-xs">
                <span>IOP Publishing Ltd</span>
                <span>•</span>
                <span>CC BY 4.0 Open Access</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                {pub.title}
              </h3>

              <div className="space-y-1 text-xs">
                <div className="text-slate-300">
                  <strong className="text-sky-400 font-semibold">Authors:</strong> {pub.authors.join(', ')}
                </div>
                <div className="text-slate-400 font-mono">
                  <strong className="text-slate-300 font-sans">Affiliation:</strong> {pub.affiliation}
                </div>
                <div className="text-slate-400 font-mono">
                  <strong className="text-slate-300 font-sans">Journal & Conference:</strong> {pub.journal}, ICWRDEP-2025
                </div>
                <div className="text-slate-400 font-mono">
                  <strong className="text-slate-300 font-sans">Citation Code:</strong> IOP Conf. Ser.: Earth Environ. Sci. {pub.volume} {pub.issue}
                </div>
                <div className="text-emerald-400 font-mono font-bold">
                  DOI: {pub.doi}
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="w-full lg:w-auto shrink-0 space-y-2">
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" /> Open IOP Journal DOI
              </a>
              <a
                href="12_PUBLICATION_FullPaper_IOP_1593_012024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-400" /> Download Full PDF Paper
              </a>
            </div>

          </div>

          {/* First Page Preview & Keywords */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-800">
            
            <div className="md:col-span-4 bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase">First Page Preview:</div>
              <button
                onClick={() => onSelectImage('11_PUBLICATION_IOP_First_Page.pdf', 'IOP Publication First Page')}
                className="w-full aspect-[3/4] bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-sky-500 transition-colors relative group cursor-pointer block"
              >
                <SmartImage
                  src="11_PUBLICATION_IOP_First_Page.pdf"
                  alt="IOP Publication Cover Page"
                  title="IOP Conf. Series Vol. 1593 Cover Page"
                  category="publication"
                  caption="Click to inspect or download full official publication PDF"
                  className="w-full h-full"
                />
              </button>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-sky-400 uppercase tracking-wider">Research Abstract Summary:</div>
                <p className="text-slate-300 leading-relaxed text-justify">
                  {pub.abstract}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-slate-300 uppercase tracking-wider">Indexed Keywords:</div>
                <div className="flex flex-wrap gap-1.5">
                  {pub.keywords.map((kw) => (
                    <span key={kw} className="px-2.5 py-1 rounded-lg bg-slate-900 text-sky-300 border border-slate-800 font-mono text-[11px]">
                      {kw}
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
