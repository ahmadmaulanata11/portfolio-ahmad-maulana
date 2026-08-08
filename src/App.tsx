import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoreExpertiseSection } from './components/CoreExpertiseSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { FeaturedResearchSection } from './components/FeaturedResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchPipelineSection } from './components/ResearchPipelineSection';
import { PublicationSection } from './components/PublicationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EvidenceMappingModal } from './components/EvidenceMappingModal';
import { CVModal } from './components/CVModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

export default function App() {
  const [evidenceModalOpen, setEvidenceModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const handleSelectImage = (url: string, title: string) => {
    setLightboxState({
      isOpen: true,
      url,
      title,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* Header Bar */}
      <Header
        onOpenEvidenceModal={() => setEvidenceModalOpen(true)}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenCvModal={() => setCvModalOpen(true)}
          onOpenEvidenceModal={() => setEvidenceModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection />

        {/* Core Expertise Section */}
        <CoreExpertiseSection />

        {/* Technical Skills Section */}
        <TechnicalSkillsSection />

        {/* Featured Research Spotlight Section */}
        <FeaturedResearchSection onSelectImage={handleSelectImage} />

        {/* Work Experience Section */}
        <ExperienceSection onSelectImage={handleSelectImage} />

        {/* Projects Section */}
        <ProjectsSection onSelectImage={handleSelectImage} />

        {/* Research Pipeline Workflow */}
        <ResearchPipelineSection onSelectImage={handleSelectImage} />

        {/* Publication Section */}
        <PublicationSection onSelectImage={handleSelectImage} />

        {/* Certifications Section */}
        <CertificationsSection onSelectImage={handleSelectImage} />

        {/* Recruiter Contact Section */}
        <ContactSection onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenEvidenceModal={() => setEvidenceModalOpen(true)}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Modals */}
      <EvidenceMappingModal
        isOpen={evidenceModalOpen}
        onClose={() => setEvidenceModalOpen(false)}
        onSelectImage={handleSelectImage}
      />

      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, url: '', title: '' })}
        imageUrl={lightboxState.url}
        title={lightboxState.title}
      />
    </div>
  );
}
