import React from 'react';
import { X, Download, ExternalLink, ZoomIn, FileText, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { SmartImage } from './SmartImage';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen || !imageUrl) return null;

  const isPdf = imageUrl.toLowerCase().endsWith('.pdf') || imageUrl.toLowerCase().includes('.pdf');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="p-1.5 rounded-lg bg-sky-950 text-sky-400 border border-sky-800 shrink-0">
              {isPdf ? <FileText className="w-4 h-4 text-rose-400" /> : <ZoomIn className="w-4 h-4" />}
            </span>
            <h3 className="font-bold text-slate-100 text-sm sm:text-base truncate">
              {title || 'Evidence Inspection View'}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isPdf && (
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open PDF in New Tab
              </a>
            )}
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" /> Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="p-4 bg-slate-950 flex-1 flex items-center justify-center overflow-auto min-h-[350px] max-h-[80vh]">
          {isPdf ? (
            <div className="w-full h-[70vh] flex flex-col items-center justify-between space-y-3 bg-slate-900 rounded-xl border border-slate-800 p-3 overflow-hidden">
              
              {/* PDF Header Action Banner */}
              <div className="w-full bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-bold text-slate-200 truncate">{title || imageUrl}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Authenticated PDF Document • Click 'Open in New Tab' for full native viewer</span>
                    </div>
                  </div>
                </div>

                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-sky-500/20 transition-all shrink-0 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <ExternalLink className="w-4 h-4" /> Open Full PDF Document
                </a>
              </div>

              {/* Embedded PDF Viewer Frame */}
              <div className="w-full h-full flex-1 relative bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                <object
                  data={`${imageUrl}#toolbar=1`}
                  type="application/pdf"
                  className="w-full h-full border-0 rounded-lg"
                >
                  <iframe
                    src={`${imageUrl}#toolbar=0`}
                    title={title}
                    className="w-full h-full border-0 rounded-lg"
                  >
                    <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-4">
                      <FileText className="w-12 h-12 text-sky-400" />
                      <div className="text-slate-200 font-bold text-sm">{title}</div>
                      <p className="text-slate-400 text-xs max-w-md">
                        Your browser restricted embedded PDF previewing in iFrames. Click the button below to view or download the complete PDF file in a new tab.
                      </p>
                      <a
                        href={imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" /> Open PDF in New Window
                      </a>
                    </div>
                  </iframe>
                </object>
              </div>

            </div>
          ) : (
            <SmartImage
              src={imageUrl}
              alt={title}
              title={title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-slate-800 shadow-xl"
            />
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px] truncate">Document Path: {imageUrl}</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
