export interface EvidenceItem {
  id: string;
  filename: string;
  classification: string;
  mappedSections: string[];
  confidence: number;
  description: string;
  verifiedDetails: string[];
  thumbnailUrl?: string;
}

export interface ResearchPaper {
  title: string;
  authors: string[];
  affiliation: string;
  conference: string;
  journal: string;
  volume: string;
  issue: string;
  year: number;
  doi: string;
  doiUrl: string;
  abstract: string;
  keywords: string[];
  methodology: string;
  software: string[];
  keyFindings: string[];
  polrModel: {
    formula: string;
    aic: number;
    variables: {
      name: string;
      estimate: number;
      tValue: number;
      pValue: number;
      remarks: string;
    }[];
  };
  figures: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'teaching_assistant' | 'research' | 'organization';
  overview: string;
  responsibilities: string[];
  deliverables: string[];
  skillsApplied: string[];
  gradeScore?: string;
  evidenceFiles: {
    title: string;
    url: string;
    caption: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  overview: string;
  problem: string;
  objective: string;
  methodology: string;
  tools: string[];
  activities: string[];
  results: string[];
  skillsApplied: string[];
  gallery: {
    title: string;
    url: string;
    caption: string;
  }[];
  certificateUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: 'Academic' | 'Professional Internship' | 'Teaching Assistantship' | 'Research' | 'Language' | 'Organization';
  issuer: string;
  issueDate: string;
  certNumber: string;
  keySkills: string[];
  fileUrl: string;
  previewType: 'image' | 'pdf';
  details: string;
}

export interface ResearchPipelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  tools: string[];
  description: string;
  keyMetricsOrFormula?: string;
  evidenceImageUrl?: string;
  evidenceCaption?: string;
}
