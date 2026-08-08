import { EvidenceItem, ResearchPaper, ExperienceItem, ProjectItem, CertificateItem, ResearchPipelineStep } from '../types';

export const PERSONAL_INFO = {
  name: 'Ahmad Maulana Taufiqul Azmi, S.T.',
  shortName: 'Ahmad Maulana T.A.',
  degree: 'Bachelor of Civil Engineering (S.T.)',
  university: 'Universitas Jember (UNEJ)',
  gpa: '3.63 / 4.00',
  graduationPeriod: '2022 – 2026',
  email: 'ahmadmaulana9715382@gmail.com',
  phone: '+62 838-4917-7847',
  linkedIn: 'https://www.linkedin.com/in/ahmadmaulanata',
  linkedInDisplay: 'linkedin.com/in/ahmadmaulanata',
  location: 'Jember, East Java, Indonesia',
  positioning: 'Civil & Water Resources Engineer specializing in hydraulic modeling, irrigation infrastructure failure analysis, statistical modeling with R, and field survey investigation.',
  summary: 'Civil Engineering graduate (GPA 3.63/4.00) with hands-on experience in 1D hydraulic modeling (HEC-RAS, HEC-HMS), civil infrastructure projects, and published engineering research. Authored an international IOP Conference Series publication investigating irrigation canal failure using Ordinal Logistic Regression. Experienced in toll road supervision (PT. Parama Karya Mandiri KSO) and regional infrastructure survey & design (SID Cetak Sawah 2025).',
  languages: [
    { name: 'Indonesian', proficiency: 'Native / Bilingual' },
    { name: 'English', proficiency: 'Limited Working Proficiency (EPT Score: 483, UPA Bahasa UNEJ)' },
  ],
  relocation: 'Available for relocation across Indonesia',
  businessTravel: 'Available for business travel',
  drivingLicense: 'Class C (Active)',
};

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'EV-01',
    filename: '01_HERO_Portrait_Ahmad.jpg',
    classification: 'Portrait Photograph',
    mappedSections: ['Hero Section', 'About Section', 'Profile Card'],
    confidence: 100,
    description: 'Authentic outdoor portrait photograph of Ahmad Maulana Taufiqul Azmi in front of Mount Argopuro / Raung agricultural landscape in Jember.',
    verifiedDetails: ['Subject: Ahmad Maulana Taufiqul Azmi', 'Setting: Fieldwork/outdoor Jember backdrop', 'Verified authentic human portrait'],
    thumbnailUrl: '01_HERO_Portrait_Ahmad.jpg',
  },
  {
    id: 'EV-02',
    filename: '02_FIELDWORK_Irrigation_Survey_Jember.jpg',
    classification: 'Field Survey Photograph',
    mappedSections: ['Featured Research', 'Field Survey & Investigation', 'Research Pipeline'],
    confidence: 100,
    description: 'Timemark verified photograph (17/05/2025, 09:27 WIB) at Jl. Dr. Soebandi No. 63, Jember. Current meter flow measurement in irrigation canal.',
    verifiedDetails: ['Coordinates: 8.149536°S, 113.701120°E', 'Elevation: 111.0m', 'Equipment: Current meter & measuring cable', 'Method: 0.6d point velocity measurement'],
    thumbnailUrl: '02_FIELDWORK_Irrigation_Survey_Jember.jpg',
  },
  {
    id: 'EV-03',
    filename: '03_FIELDWORK_Canal_Measurement_Bintoro.jpg',
    classification: 'Field Survey Photograph',
    mappedSections: ['Featured Research', 'Field Survey & Investigation', 'Research Pipeline'],
    confidence: 100,
    description: 'Timemark verified photograph (17/05/2025, 11:33 WIB) at Bintoro, Jember. In-stream canal depth and flow velocity recording in wader boots.',
    verifiedDetails: ['Coordinates: 8.127422°S, 113.702701°E', 'Elevation: 133.2m', 'Activity: Cross-section profiling and velocity recording'],
    thumbnailUrl: '03_FIELDWORK_Canal_Measurement_Bintoro.jpg',
  },
  {
    id: 'EV-04',
    filename: '04_MODELLING_HECRAS_CrossSection_SaluranAmsar.jpg',
    classification: 'HEC-RAS Screenshot',
    mappedSections: ['Featured Research', 'Technical Skills', 'Hydraulic Modelling'],
    confidence: 100,
    description: 'HEC-RAS geometry editor cross-section plot for "SAL. AMSAR 1" Station 20 showing trapezoidal bed profile, Manning\'s n (0.035 - 0.05), and energy grade line.',
    verifiedDetails: ['Geometry: GEOMETRI AMSAR', 'Reach: A, River Sta: 20', 'Manning n: LOB 0.05, Main Channel 0.035, ROB 0.045'],
    thumbnailUrl: '04_MODELLING_HECRAS_CrossSection_SaluranAmsar.jpg',
  },
  {
    id: 'EV-05',
    filename: '05_ANALYSIS_RStudio_POLR_Irigasi.jpg',
    classification: 'RStudio Screenshot',
    mappedSections: ['Featured Research', 'Technical Skills', 'Engineering Data Analysis'],
    confidence: 100,
    description: 'RStudio workspace ("Analisis Data Saluran Irigasi_TA FIQO") displaying Proportional Odds Logistic Regression (POLR) model selection with AIC evaluation.',
    verifiedDetails: ['Software: R 4.6.1 / RStudio Cloud', 'Model: polr(formula = kerusakan ~ penampang_basah, data = irigasi)', 'AIC: 43.14148', 'Exports: ggplot charts for debit, froude, keliling_basah'],
    thumbnailUrl: '05_ANALYSIS_RStudio_POLR_Irigasi.jpg',
  },
  {
    id: 'EV-06',
    filename: '06_INTERNSHIP_TollRoad_SiteInspection_Situbondo.jpg',
    classification: 'Construction Site Photograph',
    mappedSections: ['Work Experience', 'Construction & QA/QC', 'Projects'],
    confidence: 100,
    description: 'Timemark photograph (11 Jan 2025, 08:54 WIB) at Banyuglugur, Situbondo. Inspection of concrete culvert rebar on Probolinggo-Banyuwangi Toll Road Package 3B.',
    verifiedDetails: ['Coordinates: Banyuglugur, Situbondo', 'Project: Jalan Tol Probolinggo - Banyuwangi Paket 3B', 'Activity: Formwork & rebar inspection'],
    thumbnailUrl: '06_INTERNSHIP_TollRoad_SiteInspection_Situbondo.jpg',
  },
  {
    id: 'EV-07',
    filename: '07_INTERNSHIP_TollRoad_Construction_Probolinggo.jpg',
    classification: 'Construction Site Photograph',
    mappedSections: ['Work Experience', 'Construction & QA/QC'],
    confidence: 100,
    description: 'Ahmad Maulana Taufiqul Azmi in white safety helmet and vest discussing retaining wall reinforcement with senior site engineers at toll road construction site.',
    verifiedDetails: ['Supervision: PT. Parama Karya Mandiri KSO', 'Structure: Box culvert & retaining wall', 'Role: Civil Engineering Intern'],
    thumbnailUrl: '07_INTERNSHIP_TollRoad_Construction_Probolinggo.jpg',
  },
  {
    id: 'EV-08',
    filename: '08_INTERNSHIP_DailyReport_Excel_JasaMarga.jpg',
    classification: 'Excel Screenshot',
    mappedSections: ['Work Experience', 'Technical Skills', 'Construction Management'],
    confidence: 100,
    description: 'Excel daily report ("LAPORAN HARIAN") for PT Parama Karya Mandiri KSO / Jasa Marga Paket 3B detailing formwork, rebar, earthwork, and equipment allocation.',
    verifiedDetails: ['Project: Pembangunan Jalan Tol Probolinggo-Banyuwangi Paket 3B', 'STA: 29+600 - 45+800', 'Data: Daily activities, equipment counts, manpower'],
    thumbnailUrl: '08_INTERNSHIP_DailyReport_Excel_JasaMarga.jpg',
  },
  {
    id: 'EV-09',
    filename: '09_SID_Central_Kalimantan_Field_Survey.jpg',
    classification: 'Project Team Photograph',
    mappedSections: ['Projects', 'Field Survey & Investigation'],
    confidence: 100,
    description: 'Timemark photo (04/12/2024) at H. Asan Airport, Sampit, Kotawaringin Timur, Kalteng. Research & survey team for SID Cetak Sawah 2025 project.',
    verifiedDetails: ['Location: Sampit, Kotawaringin Timur, Kalteng', 'Project: SID Cetak Sawah 2025 (Quick Win)', 'Institution: LP2M Universitas Jember'],
    thumbnailUrl: '09_SID_Central_Kalimantan_Field_Survey.jpg',
  },
  {
    id: 'EV-10',
    filename: '10_SID_Central_Kalimantan_AutoCAD.jpg',
    classification: 'Engineering CAD Drawing',
    mappedSections: ['Projects', 'Technical Skills', 'AutoCAD Design'],
    confidence: 100,
    description: 'Official CAD drawing layout for "MIKRO PETAK SAWAH HANTIPAN" (1:1000) and "DETAIL GALENGAN" (1:10) for Kotawaringin Timur paddy field development.',
    verifiedDetails: ['Drawing Title: Detail Galengan & Mikro Petak Sawah Hantipan', 'Client: Dinas Tanaman Pangan, Hortikultura & Perkebunan Kalteng', 'Technical Lead: UNEJ Team'],
    thumbnailUrl: '10_SID_Central_Kalimantan_AutoCAD.jpg',
  },
  {
    id: 'EV-11',
    filename: '11_PUBLICATION_IOP_First_Page.pdf',
    classification: 'Publication First Page PDF',
    mappedSections: ['Publication', 'Featured Research'],
    confidence: 100,
    description: 'First page cover of IOP Conference Series: Earth and Environmental Science Paper 012024.',
    verifiedDetails: ['Title: Impact of hydraulic characteristics on irrigation canals failure in Jember, Indonesia', 'Publisher: IOP Publishing', 'Access: Open Access'],
    thumbnailUrl: '11_PUBLICATION_IOP_First_Page.pdf',
  },
  {
    id: 'EV-12',
    filename: '12_PUBLICATION_IOP_Full_Paper.pdf',
    classification: 'Full Publication PDF',
    mappedSections: ['Publication', 'Featured Research', 'Research Pipeline'],
    confidence: 100,
    description: 'Full 14-page IOP research paper detailing 1D HEC-RAS steady flow analysis on 20 damaged irrigation canals in Jember and POLR statistical regression.',
    verifiedDetails: ['DOI: 10.1088/1755-1315/1593/1/012024', 'Vol: 1593 (2026) 012024', 'Lead Author: A M T Azmi', 'Key Variables: Downstream Velocity, Froude Number, Water Level'],
    thumbnailUrl: '12_PUBLICATION_IOP_Full_Paper.pdf',
  },
  {
    id: 'EV-13',
    filename: '13_CERTIFICATE_HMS.pdf',
    classification: 'Organizational Certificate',
    mappedSections: ['Certifications', 'Leadership & Organization'],
    confidence: 100,
    description: 'Certificate No. 1817/UN25.1.11/KM/2025 for Sub-Division Partnership (Kemitraan) Member, Himpunan Mahasiswa Sipil (HMS) FT UNEJ (2024).',
    verifiedDetails: ['Role: Member of Partnership Sub-Division', 'Organization: HMS FT UNEJ', 'Year: 2024'],
    thumbnailUrl: '13_CERTIFICATE_HMS.pdf',
  },
  {
    id: 'EV-14',
    filename: '14_CERTIFICATE_TOEFL.pdf',
    classification: 'Language Proficiency Certificate',
    mappedSections: ['Certifications', 'Languages & Qualifications'],
    confidence: 100,
    description: 'English Proficiency Test (EPT) Certificate by Jember University Language Centre (03 August 2026). Overall Score: 483.',
    verifiedDetails: ['Score: 483 (Listening 57, Structure 38, Reading 50)', 'Cert No: EPTLC.202608030308.1017', 'Validity: August 2027'],
    thumbnailUrl: '14_CERTIFICATE_TOEFL.pdf',
  },
  {
    id: 'EV-15',
    filename: '15_CERTIFICATE_Teaching Assistant_Hydraulics.pdf',
    classification: 'Teaching Assistantship Certificate',
    mappedSections: ['Certifications', 'Work Experience', 'Hydraulics'],
    confidence: 100,
    description: 'Certificate No. 053/HMS/FT/E.8/XI/2024 as Teaching Assistant for Hydraulics Course (AY 2023/2024), Dept. of Civil Engineering, FT UNEJ.',
    verifiedDetails: ['Course: Hidrolika (Hydraulics)', 'Lecturer: Ir. Saifurridzal, S.T., M.Eng.', 'Role: Teaching & Tutoring Assistant'],
    thumbnailUrl: '15_CERTIFICATE_Teaching Assistant_Hydraulics.pdf',
  },
  {
    id: 'EV-16',
    filename: '16_CERTIFICATE_Teaching Assistant_Hydrology.pdf',
    classification: 'Teaching Assistantship Certificate',
    mappedSections: ['Certifications', 'Work Experience', 'Hydrology'],
    confidence: 100,
    description: 'Certificate No. 052/HMS/FT/E.8/XI/2024 as Teaching Assistant for Hydrology Course (AY 2023/2024), Dept. of Civil Engineering, FT UNEJ.',
    verifiedDetails: ['Course: Hidrologi (Hydrology)', 'Lecturer: Ir. Saifurridzal, S.T., M.Eng.', 'Role: Academic Tutor & Lab Assistant'],
    thumbnailUrl: '16_CERTIFICATE_Teaching Assistant_Hydrology.pdf',
  },
  {
    id: 'EV-17',
    filename: '17_CERTIFICATE_Teaching Assistant_Irrigation and Hydraulic Structures II.pdf',
    classification: 'Teaching Assistantship Certificate',
    mappedSections: ['Certifications', 'Work Experience', 'Irrigation Engineering'],
    confidence: 100,
    description: 'Certificate No. 039/HMS/FT/E.8/XI/2025 as Teaching Assistant for Irrigation & Water Structures 2 Course (AY 2025/2026), Dept. of Civil Engineering, FT UNEJ.',
    verifiedDetails: ['Course: Irigasi & Bangunan Air 2', 'Period: Semester Gasal 2025/2026', 'Role: Academic Assistant'],
    thumbnailUrl: '17_CERTIFICATE_Teaching Assistant_Irrigation and Hydraulic Structures II.pdf',
  },
  {
    id: 'EV-18',
    filename: '18_CERTIFICATE_Logistics Division Committee Member_PROKLAMASI 2023.pdf',
    classification: 'Organizational Committee Certificate',
    mappedSections: ['Certifications', 'Leadership & Organization'],
    confidence: 100,
    description: 'Certificate No. 11367/UN25.1.11/TU/2023 as Equipment Division Member for PROKLAMASI 2023 (Student Orientation), Dept. of Civil Engineering, FT UNEJ.',
    verifiedDetails: ['Event: PROKLAMASI 2023', 'Role: Equipment Division', 'Date: 8 & 22 October 2023'],
    thumbnailUrl: '18_CERTIFICATE_Logistics Division Committee Member_PROKLAMASI 2023.pdf',
  },
  {
    id: 'EV-19',
    filename: '19_CERTIFICATE_Internship_ProbolinggoBanyuwangi_2025.jpg',
    classification: 'Internship Certificate & Evaluation',
    mappedSections: ['Certifications', 'Work Experience', 'Construction Supervision'],
    confidence: 100,
    description: 'Official Internship Certificate & Performance Evaluation (Grade A, Score 95/100) from PT. Parama Karya Mandiri KSO for Probolinggo-Banyuwangi Toll Road Paket 3B.',
    verifiedDetails: ['Issuer: PT. Parama Karya Mandiri KSO', 'Resident Engineer: Ir. Roediono', 'Score: 95/100 (Grade A)', 'Period: 06 Jan - 20 Feb 2025'],
    thumbnailUrl: '19_CERTIFICATE_Internship_ProbolinggoBanyuwangi_2025.jpg',
  },
  {
    id: 'EV-20',
    filename: '20_CERTIFICATE_SID Kalteng 2024.pdf',
    classification: 'Research Assistant Certificate',
    mappedSections: ['Certifications', 'Projects', 'Research Experience'],
    confidence: 100,
    description: 'LP2M UNEJ Certificate No. 11884/UN25.1.11/LT/2024 as Research Assistant (Pembantu Peneliti) for SID Cetak Sawah 2025 in Kotawaringin Timur, Kalteng.',
    verifiedDetails: ['Issuer: LP2M Universitas Jember (Prof. Dr. Yuli Witono, S.TP., MP)', 'Period: 15 Nov - 29 Dec 2024', 'Project: SID Cetak Sawah 2025 Kalteng'],
    thumbnailUrl: '20_CERTIFICATE_SID Kalteng 2024.pdf',
  },
  {
    id: 'EV-21',
    filename: '21_CV_Ahmad Maulana Taufiqul Azmi.pdf',
    classification: 'Curriculum Vitae PDF',
    mappedSections: ['CV System', 'Global Master Truth', 'Hero Section', 'About Section'],
    confidence: 100,
    description: 'Official 2-page Curriculum Vitae of Ahmad Maulana Taufiqul Azmi, S.T. summarizing education (GPA 3.63), work experience, research, projects, skills, and publication.',
    verifiedDetails: ['GPA: 3.63 / 4.00', 'Degree: S.T. Civil Engineering UNEJ', 'All experiences and contact verified'],
    thumbnailUrl: '21_CV_Ahmad Maulana Taufiqul Azmi.pdf',
  },
];

export const RESEARCH_PUBLICATION: ResearchPaper = {
  title: 'Impact of hydraulic characteristics on irrigation canals failure in Jember, Indonesia',
  authors: ['A M T Azmi', 'S I L Prasojo', 'I S Firdaus', 'E Hidayah', 'J W Soetjipto', 'J A Samudra'],
  affiliation: 'Civil Engineering Department, University of Jember, Jember, Indonesia',
  conference: 'International Conference on Water Resources and Environmental Protection (ICWRDEP-2025)',
  journal: 'IOP Conference Series: Earth and Environmental Science',
  volume: '1593',
  issue: '012024',
  year: 2026,
  doi: '10.1088/1755-1315/1593/1/012024',
  doiUrl: 'https://doi.org/10.1088/1755-1315/1593/1/012024',
  abstract: 'Irrigation system revetment damage, caused by external flow, disrupts efficient water distribution and reduces agricultural output. This study investigated the hydraulic characteristics of these canals as a preventative measure against such damage. The analysis was conducted one-dimensionally (1D) using two flow approaches: steady and unsteady flow. The research took place in Jember Regency, East Java Province, Indonesia, examining 20 straight canal sections damaged with about 20 meters long at Antirogo, Rembangan, Bintoro, and Jumerto district. Model validation was conducted using current meter measurements. Under steady flow conditions, flow rates ranged from 0.012 to 0.215 m³/s average 0.106 m³/s; with average upstream and downstream velocities of 0.250 m/s and 0.300 m/s. Water surface elevations were between 0.150 and 0.440 m, and the average slope was 0.002 m/m. The Froude number 0.100–0.490 consistently represent subcritical flow. Statistical analysis confirmed that hydraulic characteristics significantly impact canal damage, as evidenced by relationships between upstream or downstream flow velocities, water level and Froude number.',
  keywords: ['HEC-RAS 1D', 'Irrigation Canals Failure', 'Hydraulic Modeling', 'Froude Number', 'Ordinal Logistic Regression (POLR)', 'Jember Regency'],
  methodology: '1D Hydraulic Modeling with HEC-RAS (Steady Flow profile calculations, 1D Energy equation) combined with field velocity measurements (Current Meter 6/10 depth rule) on 20 damaged canal sections across 4 districts in Jember. Model performance validated using NSE, RSR, and PBIAS statistics. Statistical relationship between damage severity (Minor, Moderate, Severe per PUPR Reg No. 23/2015) and hydraulic predictors modeled via Proportional Odds Logistic Regression (POLR) evaluating 233 candidate models via Akaike Information Criterion (AIC).',
  software: ['HEC-RAS 1D', 'RStudio (POLR package)', 'Python', 'Flowatch Current Meter', 'AutoCAD'],
  keyFindings: [
    '50% of surveyed canals suffered Moderate damage (capacity reduction >40% or 20-40% sedimentation/erosion), 25% Severe damage, and 25% Minor damage.',
    'HEC-RAS model calibration achieved near-perfect accuracy (NSE = 1.0, RSR = 0, PBIAS = 0%) across key canals including Bintoro, Bedadung, Sukorejo, Muktisari, and Haji Karim.',
    'Optimal POLR Regression Model: Condition ~ Flow + Downstream Velocity + Water Level + Froude Number (AIC = 48.416).',
    'Downstream velocity is the single factor most closely associated with canal damage severity (p = 0.056, estimate = +12.340), indicating that higher kinetic energy raises basal shear stress beyond material resistance thresholds.',
    'Froude number (p = 0.104, estimate = +25.220) and Water level (p = 0.083, estimate = +15.040) also exert near-significant positive effects on damage severity.',
  ],
  polrModel: {
    formula: 'Condition ~ Flow + Froude + Downstream_Velocity + Water_Level',
    aic: 48.416,
    variables: [
      { name: 'Downstream Velocity (m/s)', estimate: 12.340, tValue: 1.914, pValue: 0.056, remarks: 'Nearly significant (p ~ 0.05) - Primary damage driver' },
      { name: 'Water Level (m)', estimate: 15.040, tValue: 1.732, pValue: 0.083, remarks: 'Nearly significant - Hydrostatic pressure & pore pressure' },
      { name: 'Froude Number (Fr)', estimate: 25.220, tValue: 1.626, pValue: 0.104, remarks: 'Nearly significant - Structural scour & turbulence' },
      { name: 'Flow Discharge (m³/s)', estimate: -13.670, tValue: -1.149, pValue: 0.251, remarks: 'Not significant - High discharge accommodated in adequate channel size' },
    ]
  },
  figures: [
    {
      title: 'HEC-RAS Cross Section Model - Saluran Amsar',
      description: 'Geometry plot showing channel bed elevation, Manning roughness coefficients (0.035 channel, 0.045-0.05 banks), and calculated energy grade line (EG PF 1).',
      imageUrl: '04_MODELLING_HECRAS_CrossSection_SaluranAmsar.jpg'
    },
    {
      title: 'RStudio POLR Regression Output',
      description: 'RStudio console output for Proportional Odds Logistic Regression evaluating AIC criteria across hydraulic predictor combinations.',
      imageUrl: '05_ANALYSIS_RStudio_POLR_Irigasi.jpg'
    },
    {
      title: 'Field Flow Velocity Measurement - Jl. Dr. Soebandi, Jember',
      description: 'Current meter velocity measurement at 0.6d depth in a masonry canal section (Timemark verified 17/05/2025).',
      imageUrl: '02_FIELDWORK_Irrigation_Survey_Jember.jpg'
    },
    {
      title: 'Canal Geometry & Velocity Survey - Bintoro Section',
      description: 'In-stream depth and velocity measurement on damaged straight canal section in Bintoro district.',
      imageUrl: '03_FIELDWORK_Canal_Measurement_Bintoro.jpg'
    }
  ]
};

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'EXP-01',
    title: 'Civil Engineering Intern',
    organization: 'PT. Parama Karya Mandiri KSO',
    location: 'Probolinggo & Situbondo, East Java, Indonesia',
    period: 'January 2025 – February 2025',
    type: 'internship',
    overview: 'Supervised construction activities and quality control on the Probolinggo–Banyuwangi Toll Road Development Project (Package 3B, STA 29+600 to STA 45+800) under Supervision Resident Engineer Ir. Roediono.',
    responsibilities: [
      'Assisted site engineers in supervising construction activities for box culverts, retaining walls, CBM layers, and mainroad earthwork.',
      'Conducted field site inspections to monitor construction progress and verify rebar/formwork compliance against technical specifications.',
      'Participated in quantity measurements, volume calculations, and daily administration reporting (Laporan Harian Jasa Marga).',
      'Collaborated with site engineers and safety personnel to ensure compliance with project specifications and safety protocols.',
    ],
    deliverables: [
      'Supervision Daily Work Logs (Laporan Harian KSO Jasa Marga)',
      'Rebar and Concrete Formwork Inspection Worksheets',
      'Final Internship Technical Report & Performance Evaluation (Grade A, Score 95/100)'
    ],
    skillsApplied: ['Construction Management', 'Quality Control (QA/QC)', 'Structural Inspection', 'Microsoft Excel', 'Site Safety Procedures'],
    gradeScore: 'Grade A (95/100) - Resident Engineer Ir. Roediono',
    evidenceFiles: [
      {
        title: 'Toll Road Culvert Formwork & Rebar Site Inspection',
        url: '06_INTERNSHIP_TollRoad_SiteInspection_Situbondo.jpg',
        caption: 'Field inspection at Banyuglugur, Situbondo (11 Jan 2025) monitoring rebar placement and culvert construction on Probolinggo-Banyuwangi Toll Road Package 3B.'
      },
      {
        title: 'Concrete Retaining Wall Reinforcement Discussion',
        url: '07_INTERNSHIP_TollRoad_Construction_Probolinggo.jpg',
        caption: 'Discussion with senior site engineers regarding concrete wall reinforcement and safety standards.'
      },
      {
        title: 'Jasa Marga Daily Construction Report in Excel',
        url: '08_INTERNSHIP_DailyReport_Excel_JasaMarga.jpg',
        caption: 'Excel daily report log for PT Parama Karya Mandiri KSO tracking heavy equipment, workforce, and material placement.'
      },
      {
        title: 'Official Internship Certificate & Grade Transcript (95/100)',
        url: '19_CERTIFICATE_Internship_ProbolinggoBanyuwangi_2025.jpg',
        caption: 'Certificate No. 013/II/2025/RE/PKM signed by Resident Engineer Ir. Roediono.'
      }
    ]
  },
  {
    id: 'EXP-02',
    title: 'Teaching Assistant - Irrigation & Water Structures 2',
    organization: 'Department of Civil Engineering, Universitas Jember',
    location: 'Jember, Indonesia',
    period: 'Semester Gasal AY 2025/2026',
    type: 'teaching_assistant',
    overview: 'Appointed by Department Chair Dr. Ketut Aswatama Wiswamitra as Academic Teaching Assistant for Irrigation & Water Structures 2.',
    responsibilities: [
      'Assisted course coordinator Ir. Saifurridzal, S.T., M.Eng. in lecturing and tutoring civil engineering undergraduate students.',
      'Guided students through irrigation network layout design, canal sizing, and hydraulic head loss calculations.',
      'Evaluated student technical drawings and hydraulic assignment submissions.'
    ],
    deliverables: ['Academic Grading Records', 'Tutorial Worksheets for Canal Design'],
    skillsApplied: ['Irrigation Design', 'Water Structures', 'Hydraulics', 'Academic Mentorship'],
    evidenceFiles: [
      {
        title: 'Teaching Assistant Certificate - Irigasi & Bangunan Air 2',
        url: '17_CERTIFICATE_Teaching Assistant_Irrigation and Hydraulic Structures II.pdf',
        caption: 'Certificate No. 039/HMS/FT/E.8/XI/2025 issued by FT UNEJ.'
      }
    ]
  },
  {
    id: 'EXP-03',
    title: 'Teaching Assistant - Hydraulics (Hidrolika)',
    organization: 'Department of Civil Engineering, Universitas Jember',
    location: 'Jember, Indonesia',
    period: 'Academic Year 2023/2024',
    type: 'teaching_assistant',
    overview: 'Assisted Course Lecturer Ir. Saifurridzal, S.T., M.Eng. in teaching and guiding undergraduate students in open channel and pipe hydraulics.',
    responsibilities: [
      'Tutored undergraduate students in open channel flow regimes, Manning roughness equations, and energy dissipation.',
      'Supervised fluid mechanics laboratory experiments and current meter flow calibration.',
      'Graded student laboratory reports and hydraulic problem sets.'
    ],
    deliverables: ['Hydraulics Lab Assistantship Guide', 'Student Practice Assessments'],
    skillsApplied: ['Hydraulics', 'Open Channel Flow', 'Laboratory Demonstration', 'Current Meter Calibration'],
    evidenceFiles: [
      {
        title: 'Teaching Assistant Certificate - Hidrolika',
        url: '15_CERTIFICATE_Teaching Assistant_Hydraulics.pdf',
        caption: 'Certificate No. 053/HMS/FT/E.8/XI/2024 issued by FT UNEJ.'
      }
    ]
  },
  {
    id: 'EXP-04',
    title: 'Teaching Assistant - Hydrology (Hidrologi)',
    organization: 'Department of Civil Engineering, Universitas Jember',
    location: 'Jember, Indonesia',
    period: 'Academic Year 2023/2024',
    type: 'teaching_assistant',
    overview: 'Tutored civil engineering students in hydrological analysis, rainfall-runoff modeling, and hydrograph generation.',
    responsibilities: [
      'Guided students in rainfall data processing, frequency analysis, and design flood estimation.',
      'Demonstrated HEC-HMS hydrological modeling workflows.',
      'Assisted in assessing mid-term and final hydrology assignments.'
    ],
    deliverables: ['Hydrology Assignment Solutions', 'Frequency Analysis Worksheets'],
    skillsApplied: ['Hydrology', 'Rainfall-Runoff Modeling', 'Design Flood Calculation', 'HEC-HMS'],
    evidenceFiles: [
      {
        title: 'Teaching Assistant Certificate - Hidrologi',
        url: '16_CERTIFICATE_Teaching Assistant_Hydrology.pdf',
        caption: 'Certificate No. 052/HMS/FT/E.8/XI/2024 issued by FT UNEJ.'
      }
    ]
  },
  {
    id: 'EXP-05',
    title: 'Research Team Member - Research Grant Project',
    organization: 'Universitas Jember',
    location: 'Jember Regency, East Java, Indonesia',
    period: 'May 2025 – July 2025',
    type: 'research',
    overview: 'Executed postgraduate grant research on "Hydraulic Modeling of Irrigation Channels Using HEC-RAS" across 20 damaged irrigation canals in Jember Regency.',
    responsibilities: [
      'Conducted field survey investigations to collect hydraulic dimensions and velocity profiles using Flowatch current meters.',
      'Developed 1D HEC-RAS hydraulic models under steady and unsteady flow conditions.',
      'Analyzed statistical drivers of canal revetment failure using RStudio and Python.',
      'Co-authored international conference paper published in IOP Conference Series.'
    ],
    deliverables: ['HEC-RAS Hydraulic Model Files', 'RStudio POLR Regression Output', 'IOP Conference Publication Paper'],
    skillsApplied: ['HEC-RAS 1D', 'Current Meter Survey', 'Statistical Analysis (POLR)', 'RStudio', 'Python'],
    evidenceFiles: [
      {
        title: 'Current Meter Measurement in Field',
        url: '02_FIELDWORK_Irrigation_Survey_Jember.jpg',
        caption: 'Flow velocity measurement in Jember irrigation canal (17/05/2025).'
      },
      {
        title: 'Full IOP Publication PDF',
        url: '12_PUBLICATION_IOP_Full_Paper.pdf',
        caption: 'IOP Conf. Series: Earth and Environmental Science 1593 (2026) 012024.'
      }
    ]
  },
  {
    id: 'EXP-06',
    title: 'Partnership Sub-Division Member (Anggota Kemitraan)',
    organization: 'Civil Engineering Student Association (HMS) FT UNEJ',
    location: 'Jember, Indonesia',
    period: 'January 2024 – December 2024',
    type: 'organization',
    overview: 'Active member of the Entrepreneurship & Partnership division in student organization.',
    responsibilities: [
      'Assisted in planning and executing partnership programs and student fundraising initiatives.',
      'Managed business-oriented student events, merchandise sales, and sponsor communications.',
      'Supported event logistics and team coordination for departmental programs.'
    ],
    deliverables: ['Partnership Event Sponsorship Reports', 'Departmental Merchandise Execution'],
    skillsApplied: ['Leadership', 'Event Management', 'Partnership Coordination', 'Public Speaking'],
    evidenceFiles: [
      {
        title: 'HMS Partnership Sub-Division Certificate',
        url: '13_CERTIFICATE_HMS.pdf',
        caption: 'Certificate No. 1817/UN25.1.11/KM/2025.'
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'PROJ-01',
    title: 'Hydraulic Modeling & Failure Analysis of Irrigation Canals in Jember',
    subtitle: '1D HEC-RAS Simulation & POLR Statistical Regression',
    period: 'May 2025 – July 2025',
    role: 'Lead Research Student / First Author',
    organization: 'University of Jember (Postgraduate Research Grant)',
    location: 'Jember Regency, East Java, Indonesia',
    overview: 'Comprehensive hydraulic and statistical investigation evaluating how velocity, water level, and Froude number drive revetment damage in 20 irrigation canal reaches.',
    problem: 'Irrigation revetment damage and wall collapse disrupt water distribution to agricultural fields in Jember. Repair efforts often lack technical understanding of hydraulic stresses.',
    objective: 'Determine hydraulic parameters using HEC-RAS 1D modeling, validate against field current meter data, and establish statistical risk factors using Proportional Odds Logistic Regression.',
    methodology: 'Collected cross-sectional geometry and flow velocity (0.6d rule) across 20 damaged canal sections (20m length). Calibrated 1D HEC-RAS steady flow model (NSE, RSR, PBIAS). Tested 233 candidate statistical regression models in RStudio using AIC model selection.',
    tools: ['HEC-RAS 1D', 'RStudio (POLR package)', 'Python', 'Flowatch Current Meter', 'AutoCAD'],
    activities: [
      'In-stream current meter velocity and water depth measurements.',
      'Manning coefficient estimation (0.032 - 0.050).',
      'HEC-RAS geometry creation and steady flow simulation.',
      'POLR regression model evaluation across 233 parameter combinations.',
    ],
    results: [
      'Calibrated HEC-RAS models achieved NSE = 1.0 on 7 major canals.',
      'Identified Downstream Velocity (estimate +12.340, p = 0.056) as the primary physical driver of canal damage.',
      'Froude number (+25.220, p = 0.104) and Water level (+15.040, p = 0.083) confirmed as secondary risk drivers.',
      'Published results in IOP Conference Series: Earth and Environmental Science (DOI: 10.1088/1755-1315/1593/1/012024).'
    ],
    skillsApplied: ['HEC-RAS 1D', 'Current Meter Survey', 'Ordinal Logistic Regression', 'AIC Model Selection', 'Hydraulic Engineering'],
    gallery: [
      {
        title: 'HEC-RAS Cross Section Model - Saluran Amsar',
        url: '04_MODELLING_HECRAS_CrossSection_SaluranAmsar.jpg',
        caption: 'HEC-RAS geometry editor showing trapezoidal section and energy grade line.'
      },
      {
        title: 'RStudio POLR Regression Workspace',
        url: '05_ANALYSIS_RStudio_POLR_Irigasi.jpg',
        caption: 'RStudio script execution calculating AIC values for canal damage predictors.'
      },
      {
        title: 'In-Stream Flow Measurement at Jl. Dr. Soebandi',
        url: '02_FIELDWORK_Irrigation_Survey_Jember.jpg',
        caption: 'Current meter velocity measurement in masonry canal.'
      },
      {
        title: 'Canal Geometry Survey in Bintoro District',
        url: '03_FIELDWORK_Canal_Measurement_Bintoro.jpg',
        caption: 'Field measurement of channel slope and water depth in wader boots.'
      }
    ]
  },
  {
    id: 'PROJ-02',
    title: 'Survey, Investigation, and Design (SID) Cetak Sawah 2025',
    subtitle: 'Spatial Planning & Regional Irrigation Infrastructure Planning (Quick Win 2025)',
    period: 'November 2024 – December 2024',
    role: 'Civil Engineering Team Member / Research Assistant',
    organization: 'LP2M Universitas Jember & Dinas Tanaman Pangan, Hortikultura dan Perkebunan Kalteng',
    location: 'Kotawaringin Timur Regency, Central Kalimantan, Indonesia',
    overview: 'Regional infrastructure planning and survey investigation for national food security (Cetak Sawah 2025) in Central Kalimantan.',
    problem: 'Developing new paddy field agricultural zones (Cetak Sawah) requires precise topographical, hydrological, and irrigation canal layout planning.',
    objective: 'Prepare comprehensive SID technical documents, conduct field topographic surveys, and design paddy micro-block CAD layouts.',
    methodology: 'Deployed multi-disciplinary team with RTK/GPS equipment to Kotawaringin Timur. Collected soil, channel, and spatial boundary data. Generated AutoCAD engineering drawings for paddy micro-blocks (Mikro Petak Sawah Hantipan scale 1:1000) and embankment details (Detail Galengan scale 1:10).',
    tools: ['AutoCAD', 'ArcGIS Pro', 'GPS / RTK Survey', 'Excel', 'Google Earth Engine'],
    activities: [
      'Field survey and technical data collection in Kotawaringin Timur.',
      'Analysis of existing site conditions and drainage/irrigation requirements.',
      'Preparation of SID engineering reports and technical CAD drawings.',
    ],
    results: [
      'Completed SID engineering documentation approved by Technical Lead and PPK.',
      'Designed CAD layouts for primary, secondary, and tertiary irrigation canals and paddy micro-blocks.',
      'Awarded LP2M Research Assistant Certificate No. 11884/UN25.1.11/LT/2024.'
    ],
    skillsApplied: ['AutoCAD Engineering Drawing', 'Spatial Planning', 'Field Survey Investigation', 'Regional Infrastructure', 'Drainage Design'],
    gallery: [
      {
        title: 'SID Kalimantan Team at Sampit Airport',
        url: '09_SID_Central_Kalimantan_Field_Survey.jpg',
        caption: 'UNEJ research and survey team at H. Asan Airport, Sampit with survey equipment.'
      },
      {
        title: 'AutoCAD Design Layout - Detail Galengan & Mikro Petak Sawah Hantipan',
        url: '10_SID_Central_Kalimantan_AutoCAD.jpg',
        caption: 'Engineering CAD layout for paddy field micro-blocks and embankment details.'
      }
    ],
    certificateUrl: '20_CERTIFICATE_SID Kalteng 2024.pdf'
  },
  {
    id: 'PROJ-03',
    title: 'Supervision & Quality Control - Probolinggo-Banyuwangi Toll Road (Package 3B)',
    subtitle: 'Jalan Tol Probolinggo - Banyuwangi Paket 3B STA 29+600 - 45+800',
    period: 'January 2025 – February 2025',
    role: 'Civil Engineering Intern',
    organization: 'PT. Parama Karya Mandiri KSO (Supervision Consultant)',
    location: 'Probolinggo & Situbondo, East Java, Indonesia',
    overview: 'Quality control and construction supervision for major toll road infrastructure development project under Jasa Marga.',
    problem: 'Ensuring structural box culverts, retaining walls, and earthwork layers comply with strict highway design tolerances.',
    objective: 'Monitor daily site execution, verify formwork/rebar compliance, and log daily progress and material usage.',
    methodology: 'On-site structural inspection, rebar spacing checks, volume quantity verification, and daily report generation using Jasa Marga supervision formats.',
    tools: ['Microsoft Excel', 'Site Survey Tools', 'Technical Drawings Inspection'],
    activities: [
      'Inspected formwork and steel reinforcement for Box Culvert Type 1 and retaining walls.',
      'Monitored CBM Layer 20 compaction and geotextile woven placement.',
      'Compiled daily supervision report (Laporan Harian) covering workforce and heavy equipment.'
    ],
    results: [
      'Successfully completed 45 working days of supervision.',
      'Earned Grade A (95/100) performance evaluation from Resident Engineer Ir. Roediono.'
    ],
    skillsApplied: ['Construction Quality Control', 'Quantity Measurement', 'Excel Administration', 'Site Supervision'],
    gallery: [
      {
        title: 'Culvert & Retaining Wall Inspection in Situbondo',
        url: '06_INTERNSHIP_TollRoad_SiteInspection_Situbondo.jpg',
        caption: 'Timemark verified site inspection at Banyuglugur, Situbondo.'
      },
      {
        title: 'On-Site Discussion with Senior Engineers',
        url: '07_INTERNSHIP_TollRoad_Construction_Probolinggo.jpg',
        caption: 'Reviewing wall reinforcement and safety procedures on site.'
      },
      {
        title: 'Jasa Marga Daily Report Excel Sheet',
        url: '08_INTERNSHIP_DailyReport_Excel_JasaMarga.jpg',
        caption: 'Daily report tracking heavy equipment, labor, and material placement.'
      }
    ],
    certificateUrl: '19_CERTIFICATE_Internship_ProbolinggoBanyuwangi_2025.jpg'
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Hydraulic & Hydrological Modelling',
    skills: [
      { name: 'HEC-RAS 1D', level: 'Advanced', proof: '1D steady/unsteady flow simulation on 20 Jember canals, calibrated to NSE=1.0' },
      { name: 'HEC-HMS', level: 'Intermediate', proof: 'Hydrological rainfall-runoff modeling and design flood hydrograph analysis' },
      { name: 'SWMM', level: 'Intermediate', proof: 'Stormwater management and urban drainage hydraulic modeling' },
    ]
  },
  {
    category: 'Engineering Data Analysis & Programming',
    skills: [
      { name: 'RStudio (R)', level: 'Advanced', proof: 'Ordinal Logistic Regression (POLR), AIC model selection, ggplot2 visualizations' },
      { name: 'Python', level: 'Intermediate', proof: 'Engineering data processing, numerical computation, statistical analysis' },
      { name: 'Microsoft Excel', level: 'Advanced', proof: 'Construction quantity calculation, daily report logging, hydraulic formulas' },
    ]
  },
  {
    category: 'CAD, GIS & Mapping Software',
    skills: [
      { name: 'AutoCAD', level: 'Advanced', proof: 'Detailed CAD layouts for paddy micro-blocks (1:1000) and embankment details (1:10)' },
      { name: 'ArcGIS Pro', level: 'Intermediate', proof: 'Spatial boundary processing and catchment area mapping' },
      { name: 'QGIS', level: 'Intermediate', proof: 'Open-source GIS spatial data analysis and land use mapping' },
      { name: 'Google Earth Engine', level: 'Intermediate', proof: 'Satellite imagery analysis for regional land use survey' },
    ]
  },
  {
    category: 'Fieldwork & Engineering Survey',
    skills: [
      { name: 'Current Meter Survey (Flowatch)', level: 'Advanced', proof: 'In-stream 0.6d point velocity measurements on 20 irrigation canal sections' },
      { name: 'Cross-Section Profiling', level: 'Advanced', proof: 'Channel bed elevation, slope (m/m), and Manning n estimation' },
      { name: 'Construction QA/QC Inspection', level: 'Advanced', proof: 'Rebar, formwork, CBM layer, and culvert inspection on toll road project' },
    ]
  }
];

export const RESEARCH_PIPELINE: ResearchPipelineStep[] = [
  {
    stepNumber: 1,
    title: 'Site Selection & Condition Assessment',
    subtitle: '20 Damaged Irrigation Canals in Jember',
    tools: ['PUPR Regulation No. 23/2015', 'Field Inspection'],
    description: 'Selected 20 straight canal sections (20m length each) across Antirogo, Rembangan, Bintoro, and Jumerto districts. Classified damage severity into Minor (25%), Moderate (50%), and Severe (25%) based on Condition Weight Value (NKB).',
    evidenceImageUrl: '03_FIELDWORK_Canal_Measurement_Bintoro.jpg',
    evidenceCaption: 'In-stream visual condition assessment and canal dimensions survey at Bintoro reach.'
  },
  {
    stepNumber: 2,
    title: 'Hydraulic Data Collection & Field Measurement',
    subtitle: 'Flow Velocity & Channel Cross-Section Profiling',
    tools: ['Flowatch Current Meter', 'Six-Tenths Method (0.6d)', 'Timemark GPS'],
    description: 'Measured flow velocity at upstream and downstream cross-sections using current meters placed at 0.6 of water depth. Calculated discharge Q using Q = (1/n) * A * R^(2/3) * S^(1/2). Measured bed slope (avg 0.002 m/m) and water depth (0.15 - 0.44 m).',
    keyMetricsOrFormula: 'Q = (1/n) * A * R^(2/3) * S^(1/2)',
    evidenceImageUrl: '02_FIELDWORK_Irrigation_Survey_Jember.jpg',
    evidenceCaption: 'Current meter flow velocity measurement at Jl. Dr. Soebandi, Jember (17/05/2025).'
  },
  {
    stepNumber: 3,
    title: '1D Hydraulic Simulation with HEC-RAS',
    subtitle: 'Steady Flow Water Surface Profiles',
    tools: ['HEC-RAS 1D', 'One-Dimensional Energy Equation'],
    description: 'Built 1D geometry profiles for all 20 canal reaches in HEC-RAS. Assigned Manning roughness coefficients (n = 0.032 to 0.050). Solved 1D Energy equation z1 + y1 + a1*(v1^2/2g) = z2 + y2 + a2*(v2^2/2g) + hL to derive Froude numbers (0.100 - 0.490, subcritical flow) and Reynolds numbers (>2000, turbulent flow).',
    keyMetricsOrFormula: 'Fr = v / sqrt(g * Dh)',
    evidenceImageUrl: '04_MODELLING_HECRAS_CrossSection_SaluranAmsar.jpg',
    evidenceCaption: 'HEC-RAS geometry cross section data window for Saluran Amsar 1 Station 20.'
  },
  {
    stepNumber: 4,
    title: 'Model Calibration & Statistical Validation',
    subtitle: 'NSE, RSR, and PBIAS Evaluation',
    tools: ['NSE', 'RSR', 'PBIAS', 'HEC-HMS Validation Criteria'],
    description: 'Validated simulated flow velocities against observed field current meter data. Achieved high calibration accuracy: Group 1 (Haji Karim, Sukorejo, Bedadung, Makam, Muktisari, Kenari, Bintoro) achieved perfect scores (NSE = 1.00, RSR = 0, PBIAS = 0%).',
    keyMetricsOrFormula: 'NSE = 1 - [ sum(Yobs - Ysim)^2 / sum(Yobs - Ymean)^2 ]',
  },
  {
    stepNumber: 5,
    title: 'Statistical Risk Modeling with POLR',
    subtitle: '233 Candidate Models & AIC Model Selection',
    tools: ['RStudio', 'polr() Proportional Odds Model', 'Akaike Information Criterion (AIC)'],
    description: 'Constructed and evaluated 233 candidate ordinal logistic regression models in RStudio. Identified optimal model: Condition ~ Flow + Froude + Downstream_Velocity + Water_Level (AIC = 48.416). Proved downstream velocity (p=0.056) and Froude number (p=0.104) are key drivers of canal failure.',
    keyMetricsOrFormula: 'logit(P(Y <= j)) = beta_j0 - eta1*x1 - ... - etap*xp',
    evidenceImageUrl: '05_ANALYSIS_RStudio_POLR_Irigasi.jpg',
    evidenceCaption: 'RStudio workspace running POLR script and AIC optimization.'
  },
  {
    stepNumber: 6,
    title: 'Engineering Recommendations & International Publication',
    subtitle: 'IOP Conference Series: Earth and Environmental Science',
    tools: ['IOP Publishing', 'DOI: 10.1088/1755-1315/1593/1/012024'],
    description: 'Translated statistical findings into practical maintenance recommendations (prioritizing downstream velocity control and Froude number management). Published full peer-reviewed research paper in IOP Conference Series Vol. 1593 (2026).',
    evidenceImageUrl: '11_PUBLICATION_IOP_First_Page.pdf',
    evidenceCaption: 'IOP Conference Series paper cover page.'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'CERT-01',
    title: 'Supervision Internship Certificate & Grade Transcript (95/100)',
    category: 'Professional Internship',
    issuer: 'PT. Parama Karya Mandiri KSO / Jasa Marga Toll Road Paket 3B',
    issueDate: '21 February 2025',
    certNumber: '013/II/2025/RE/PKM',
    keySkills: ['Construction Supervision', 'QA/QC', 'Box Culvert Inspection', 'Excel Administration', 'Grade A (95/100)'],
    fileUrl: '19_CERTIFICATE_Internship_ProbolinggoBanyuwangi_2025.jpg',
    previewType: 'image',
    details: '45 working days internship supervising Probolinggo–Banyuwangi Toll Road Development Project Package 3B under Resident Engineer Ir. Roediono.'
  },
  {
    id: 'CERT-02',
    title: 'Research Assistant - SID Cetak Sawah 2025 (Kotawaringin Timur)',
    category: 'Research',
    issuer: 'LP2M Universitas Jember (Prof. Dr. Yuli Witono, S.TP., MP)',
    issueDate: '27 November 2024',
    certNumber: '11884/UN25.1.11/LT/2024',
    keySkills: ['Field Survey', 'AutoCAD Drawing', 'Spatial Planning', 'Regional Infrastructure'],
    fileUrl: '20_CERTIFICATE_SID Kalteng 2024.pdf',
    previewType: 'pdf',
    details: 'Research Assistant for Survey, Investigation, and Design (SID) Cetak Sawah 2025 in Kotawaringin Timur, Central Kalimantan.'
  },
  {
    id: 'CERT-03',
    title: 'Teaching Assistant - Irrigation & Water Structures 2',
    category: 'Teaching Assistantship',
    issuer: 'Faculty of Engineering, Universitas Jember',
    issueDate: 'November 2025',
    certNumber: '039/HMS/FT/E.8/XI/2025',
    keySkills: ['Irrigation Design', 'Water Structures', 'Hydraulics', 'Academic Tutoring'],
    fileUrl: '17_CERTIFICATE_Teaching Assistant_Irrigation and Hydraulic Structures II.pdf',
    previewType: 'pdf',
    details: 'Teaching Assistant for Irigasi & Bangunan Air 2 course (Semester Gasal 2025/2026) under Dept Chair Dr. Ketut Aswatama Wiswamitra.'
  },
  {
    id: 'CERT-04',
    title: 'Teaching Assistant - Hydraulics (Hidrolika)',
    category: 'Teaching Assistantship',
    issuer: 'Faculty of Engineering, Universitas Jember',
    issueDate: 'November 2024',
    certNumber: '053/HMS/FT/E.8/XI/2024',
    keySkills: ['Hydraulics', 'Open Channel Flow', 'Manning Roughness', 'Lab Demonstration'],
    fileUrl: '15_CERTIFICATE_Teaching Assistant_Hydraulics.pdf',
    previewType: 'pdf',
    details: 'Teaching Assistant for Hydraulics course (AY 2023/2024) under course lecturer Ir. Saifurridzal, S.T., M.Eng.'
  },
  {
    id: 'CERT-05',
    title: 'Teaching Assistant - Hydrology (Hidrologi)',
    category: 'Teaching Assistantship',
    issuer: 'Faculty of Engineering, Universitas Jember',
    issueDate: 'November 2024',
    certNumber: '052/HMS/FT/E.8/XI/2024',
    keySkills: ['Hydrology', 'Rainfall-Runoff', 'Hydrograph Analysis', 'HEC-HMS'],
    fileUrl: '16_CERTIFICATE_Teaching Assistant_Hydrology.pdf',
    previewType: 'pdf',
    details: 'Teaching Assistant for Hydrology course (AY 2023/2024) under course lecturer Ir. Saifurridzal, S.T., M.Eng.'
  },
  {
    id: 'CERT-06',
    title: 'English Proficiency Test (EPT) Score 483',
    category: 'Language',
    issuer: 'Jember University Language Centre (UPA Bahasa UNEJ)',
    issueDate: '03 August 2026',
    certNumber: 'EPTLC.202608030308.1017',
    keySkills: ['English Proficiency', 'Listening 57', 'Structure 38', 'Reading 50', 'Overall 483'],
    fileUrl: '14_CERTIFICATE_TOEFL.pdf',
    previewType: 'pdf',
    details: 'Standardized English Proficiency Test conducted by UPA Bahasa UNEJ. Valid until August 2027.'
  },
  {
    id: 'CERT-07',
    title: 'Partnership Sub-Division Member (HMS FT UNEJ 2024)',
    category: 'Organization',
    issuer: 'Himpunan Mahasiswa Sipil (HMS) FT UNEJ',
    issueDate: '2025',
    certNumber: '1817/UN25.1.11/KM/2025',
    keySkills: ['Student Leadership', 'Partnership Development', 'Event Management'],
    fileUrl: '13_CERTIFICATE_HMS.pdf',
    previewType: 'pdf',
    details: 'Dedication as Sub-Division Member of Kemitraan (Partnership) HMS FT UNEJ during 2024 management period.'
  },
  {
    id: 'CERT-08',
    title: 'Equipment Division Committee - PROKLAMASI 2023',
    category: 'Organization',
    issuer: 'Himpunan Mahasiswa Sipil (HMS) FT UNEJ',
    issueDate: 'October 2023',
    certNumber: '11367/UN25.1.11/TU/2023',
    keySkills: ['Logistics & Equipment', 'Event Organization', 'Team Coordination'],
    fileUrl: '18_CERTIFICATE_Logistics Division Committee Member_PROKLAMASI 2023.pdf',
    previewType: 'pdf',
    details: 'Committee member in Equipment Division for Civil Engineering Student Orientation (PROKLAMASI 2023).'
  }
];
