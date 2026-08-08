import React, { useState, useEffect } from 'react';
import { FileText, Award, Download, Linkedin, Mail, Layers, Menu, X, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/evidenceData';

interface HeaderProps {
  onOpenEvidenceModal: () => void;
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEvidenceModal, onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Publication', href: '#publication' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy: Determine active section based on scroll position
      const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          } else if (scrollPosition >= top) {
            current = id;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      return;
    }

    setActiveSection(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800' : 'bg-slate-900 border-b border-slate-800/80'}`}>
      {/* Top Banner: Verification Bar */}
      <div className="bg-slate-950 border-b border-slate-800/60 px-4 py-1 text-xs text-slate-300 flex items-center justify-between">
        <div className="flex items-center space-x-2 max-w-7xl mx-auto w-full">
          <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50">
            <CheckCircle2 className="w-3 h-3" /> Evidence Verified
          </span>
          <span className="hidden sm:inline text-slate-400">
            Built from 21 authenticated documents, field photos, HEC-RAS outputs & IOP publication.
          </span>
          <button
            onClick={onOpenEvidenceModal}
            className="ml-auto text-sky-400 hover:text-sky-300 underline font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Layers className="w-3 h-3" /> View Evidence Mapping (21 Files)
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px] py-2 gap-4">
          {/* Logo / Profile */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
          >
            <img
              src="01_HERO_Portrait_Ahmad.jpg"
              alt="Ahmad Maulana Taufiqul Azmi"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-sky-500/80 group-hover:border-sky-400 transition-all shrink-0"
            />
            <div className="min-w-0 flex flex-col justify-center">
              <div className="font-bold text-slate-100 text-xs sm:text-sm lg:text-base leading-tight group-hover:text-sky-300 transition-colors truncate max-w-[160px] sm:max-w-[220px] md:max-w-xs lg:max-w-sm xl:max-w-none">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[10px] sm:text-xs text-sky-400 font-medium flex items-center gap-1 sm:gap-1.5 whitespace-nowrap truncate">
                <span className="truncate">Civil Eng. (S.T.)</span>
                <span className="text-slate-600 shrink-0">•</span>
                <span className="text-slate-300 font-semibold shrink-0">GPA {PERSONAL_INFO.gpa}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-xs font-medium">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/60 shadow-sm shadow-sky-950/60 font-bold'
                      : 'text-slate-300 hover:text-sky-300 hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenCvModal}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" /> Preview CV
            </button>
            <a
              href="21_CV_Ahmad Maulana Taufiqul Azmi.pdf"
              download="CV_Ahmad_Maulana_Taufiqul_Azmi.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download CV
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 hover:border-sky-500/50 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenCvModal}
              className="md:hidden px-2.5 py-1 rounded bg-sky-600 text-white text-xs font-medium flex items-center gap-1"
            >
              <FileText className="w-3 h-3" /> CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
          <div className="grid grid-cols-2 gap-1.5 pt-2 pb-3 border-b border-slate-800 text-xs">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg font-medium text-xs flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50 font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-sky-300 border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-2 text-xs">
            <button
              onClick={() => {
                onOpenEvidenceModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 font-medium flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-emerald-400" /> Evidence Audit Mapping (21 Files)
            </button>
            <a
              href="21_CV_Ahmad Maulana Taufiqul Azmi.pdf"
              download="CV_Ahmad_Maulana_Taufiqul_Azmi.pdf"
              className="w-full py-2 bg-sky-600 text-white font-medium rounded-lg text-center flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Official CV PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
