import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Download, Send, CheckCircle2, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/evidenceData';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
            <Mail className="w-3.5 h-3.5" /> Recruiter Outreach
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Open for Graduate Engineer, Civil Engineer, Water Resources Engineer, QA/QC, and Management Trainee positions across Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <h3 className="text-lg font-bold text-slate-100">Contact Information</h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-950 text-sky-400 border border-sky-800/80 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium text-xs">Email Address</div>
                    <div className="font-semibold text-slate-200 group-hover:text-sky-300 font-mono text-xs sm:text-sm">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium text-xs">WhatsApp / Direct Phone</div>
                    <div className="font-semibold text-slate-200 group-hover:text-emerald-300 font-mono text-xs sm:text-sm">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-950 text-sky-400 border border-sky-800/80 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium text-xs">LinkedIn Profile</div>
                    <div className="font-semibold text-slate-200 group-hover:text-sky-300 font-mono text-xs sm:text-sm">
                      {PERSONAL_INFO.linkedInDisplay}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-900 text-slate-400 border border-slate-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium text-xs">Primary Location</div>
                    <div className="font-semibold text-slate-200 text-xs sm:text-sm">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">{PERSONAL_INFO.relocation}</div>
                  </div>
                </div>

              </div>

              {/* CV Action */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="21_CV_Ahmad Maulana Taufiqul Azmi.pdf"
                  download="CV_Ahmad_Maulana_Taufiqul_Azmi.pdf"
                  className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download Official CV PDF
                </a>
                <button
                  onClick={onOpenCvModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-400" /> Preview Interactive CV
                </button>
              </div>

            </div>
          </div>

          {/* Quick Recruiter Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-slate-100">Send Direct Inquiry</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800 space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-slate-100">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. I will review your message and reply promptly via email ({formData.email}).
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="text-xs text-sky-400 underline hover:text-sky-300 font-semibold cursor-pointer pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., HR Recruiter / Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Organization / Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Construction / Water Resources Consulting Firm"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Message / Position Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the opportunity or engineering role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
