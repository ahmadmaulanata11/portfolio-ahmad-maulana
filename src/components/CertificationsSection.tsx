import React, { useState } from 'react';
import { Award, FileText, CheckCircle2, ExternalLink, Calendar, Search, Filter } from 'lucide-react';
import { CERTIFICATES } from '../data/evidenceData';

interface CertificationsSectionProps {
  onSelectImage: (url: string, title: string) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Professional Internship',
    'Research',
    'Teaching Assistantship',
    'Language',
    'Organization'
  ];

  const filteredCerts = CERTIFICATES.filter(
    (c) => selectedCategory === 'All' || c.category === selectedCategory
  );

  return (
    <section id="certificates" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400">
            <Award className="w-3.5 h-3.5" /> Authenticated Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Certifications & Training
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Official certificates issued by Faculty of Engineering Universitas Jember, LP2M UNEJ, PT. Parama Karya Mandiri KSO, and UPA Bahasa UNEJ.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 text-xs">
          <span className="text-slate-400 font-bold flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 space-y-4 flex flex-col justify-between transition-all shadow-lg hover:shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[10px] font-bold">
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-300 font-medium">
                  <strong className="text-slate-400">Issuer:</strong> {cert.issuer}
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  Cert No: <span className="text-slate-300">{cert.certNumber}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.details}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.keySkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-800 text-[10px] font-mono"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => onSelectImage(cert.fileUrl, cert.title)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Inspect Official Certificate Document
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
