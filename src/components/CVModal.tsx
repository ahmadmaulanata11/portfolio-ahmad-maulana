import React from 'react';
import { X, Download, FileText, Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Award, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/evidenceData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-950 text-sky-400 border border-sky-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">
                Curriculum Vitae Transcript
              </h2>
              <p className="text-xs text-slate-400">
                Ahmad Maulana Taufiqul Azmi, S.T. • Verified Transcript
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="21_CV_Ahmad Maulana Taufiqul Azmi.pdf"
              download="CV_Ahmad_Maulana_Taufiqul_Azmi.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-slate-300 font-sans leading-relaxed bg-slate-900">
          
          {/* Header Block */}
          <div className="text-center space-y-2 pb-6 border-b border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sky-400 font-semibold text-sm">
              Civil Engineering Graduate (S.T.) • Water Resources & Hydraulics
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-slate-400 text-xs font-mono pt-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span className="text-sky-300">{PERSONAL_INFO.email}</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline"
              >
                {PERSONAL_INFO.linkedInDisplay}
              </a>
            </div>
          </div>

          {/* About Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <FileText className="w-3.5 h-3.5" /> Summary Profile
            </h3>
            <p className="text-slate-300 text-justify">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <GraduationCap className="w-3.5 h-3.5" /> Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-slate-100 text-sm">Universitas Jember (UNEJ)</div>
                <div className="text-slate-300">Bachelor of Civil Engineering (S.T.)</div>
                <div className="text-emerald-400 font-bold font-mono">GPA: {PERSONAL_INFO.gpa}</div>
              </div>
              <div className="text-slate-400 font-mono text-right">
                Jember, East Java<br />2022 – 2026
              </div>
            </div>
            <p className="text-slate-400 pt-1">
              <strong>Relevant Coursework:</strong> Engineering Statistics, Hydraulics, Hydrology, Numerical Methods, Water Resources Engineering, Construction Management.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Briefcase className="w-3.5 h-3.5" /> Work & Supervision Experience
            </h3>

            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>PT. Parama Karya Mandiri KSO — Civil Engineering Intern</span>
                  <span className="font-mono text-slate-400 font-normal">Jan 2025 – Feb 2025</span>
                </div>
                <div className="text-sky-300 font-medium">
                  Probolinggo-Banyuwangi Toll Road Development Project (Package 3B, STA 29+600 to 45+800) • Evaluation: Grade A (95/100)
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                  <li>Supervised box culvert, retaining wall, and earthwork layer (CBM Layer 20) construction activities under Supervision Resident Engineer Ir. Roediono.</li>
                  <li>Conducted daily site inspections for rebar and formwork compliance against technical specifications.</li>
                  <li>Assisted in quantity measurements and daily supervision reporting (Laporan Harian Jasa Marga).</li>
                </ul>
              </div>

              <div className="space-y-1 pt-2">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>Department of Civil Engineering FT UNEJ — Academic Teaching Assistant</span>
                  <span className="font-mono text-slate-400 font-normal">2023 – 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                  <li><strong>Irrigation & Water Structures 2 (2025/2026):</strong> Guided students in canal sizing and hydraulic head loss calculations.</li>
                  <li><strong>Hydraulics (2023/2024):</strong> Tutored open channel flow, Manning roughness equations, and current meter calibration.</li>
                  <li><strong>Hydrology (2023/2024):</strong> Guided rainfall data frequency analysis and design flood hydrograph generation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research & Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <BookOpen className="w-3.5 h-3.5" /> Research & Regional Projects
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between font-bold text-slate-100">
                <span>Hydraulic Modeling of Irrigation Channels — Lead Research Student</span>
                <span className="font-mono text-slate-400 font-normal">May 2025 – Jul 2025</span>
              </div>
              <p className="text-slate-300">
                Analyzed 20 damaged canal reaches in Jember using 1D HEC-RAS steady flow modeling and RStudio POLR regression. Published results in <em>IOP Conference Series: Earth and Environmental Science</em> (DOI: 10.1088/1755-1315/1593/1/012024).
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex justify-between font-bold text-slate-100">
                <span>SID Cetak Sawah 2025 (LP2M UNEJ) — Civil Team Research Assistant</span>
                <span className="font-mono text-slate-400 font-normal">Nov 2024 – Dec 2024</span>
              </div>
              <p className="text-slate-300">
                Conducted field topographic and hydrological surveys in Kotawaringin Timur, Central Kalimantan. Prepared AutoCAD CAD engineering drawings for paddy micro-blocks and embankment details.
              </p>
            </div>
          </div>

          {/* Skills & Additional Info */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Skills & Qualifications Summary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <div>
                <strong className="text-slate-100">Engineering Software:</strong> HEC-RAS 1D, HEC-HMS, SWMM, AutoCAD, ArcGIS Pro, QGIS, RStudio, Python, MS Excel.
              </div>
              <div>
                <strong className="text-slate-100">Languages & Certs:</strong> Indonesian (Native), English (EPT 483), Driving License Class C, Available for nationwide relocation.
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Official CV Transcript of Ahmad Maulana Taufiqul Azmi, S.T.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
