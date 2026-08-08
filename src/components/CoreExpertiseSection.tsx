import React from 'react';
import { Waves, Calculator, Search, Building2, BarChart2, ShieldCheck } from 'lucide-react';

export const CoreExpertiseSection: React.FC = () => {
  const expertiseList = [
    {
      icon: Waves,
      title: 'Water Resources Engineering',
      subtitle: 'Irrigation Systems & Open Channel Hydraulics',
      description: 'In-depth specialization in irrigation canal failure analysis, open channel flow regimes, subcritical flow dynamics, and revetment erosion prevention.',
      proof: 'Lead research co-author on 20 Jember irrigation canal sections published in IOP Conference Series (2026).'
    },
    {
      icon: Calculator,
      title: 'Hydraulic & Hydrological Modelling',
      subtitle: 'HEC-RAS 1D, HEC-HMS, and SWMM',
      description: 'Proficient in developing 1D steady and unsteady flow models in HEC-RAS, calculating water surface profiles, and conducting hydrological hydrograph simulations in HEC-HMS.',
      proof: 'Model calibration verified across 20 canals achieving NSE = 1.00, RSR = 0, and PBIAS = 0%.'
    },
    {
      icon: BarChart2,
      title: 'Engineering Data Analysis',
      subtitle: 'RStudio (POLR) & Python Analysis',
      description: 'Statistical regression modeling using Proportional Odds Logistic Regression (POLR) in RStudio to evaluate Akaike Information Criterion (AIC) across 233 candidate models.',
      proof: 'Identified downstream velocity (p=0.056) and Froude number (p=0.104) as primary drivers of structural failure risk.'
    },
    {
      icon: Search,
      title: 'Field Survey & Investigation',
      subtitle: 'Current Meter Profiling & Topographic Survey',
      description: 'Hands-on experience conducting current meter velocity measurements (6/10 depth method), channel slope measurements, and regional SID land surveys.',
      proof: 'Conducted field surveys in Jember and Kotawaringin Timur (Central Kalimantan SID Cetak Sawah 2025).'
    },
    {
      icon: Building2,
      title: 'Construction Supervision & QA/QC',
      subtitle: 'Highway Infrastructure & Box Culvert Quality Control',
      description: 'Site supervision for major toll road construction, rebar spacing verification, formwork inspection, quantity calculation, and daily administration reporting.',
      proof: 'Completed 45-day internship at PT. Parama Karya Mandiri KSO (Probolinggo–Banyuwangi Toll Road 3B) with Grade A (95/100).'
    }
  ];

  return (
    <section id="expertise" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
            <ShieldCheck className="w-3.5 h-3.5" /> Evidence-Verified Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Core Engineering Expertise
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
            Key functional areas verified through field documentation, software outputs, academic certificates, and published research.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl space-y-4 transition-all hover:shadow-xl group"
              >
                <div className="p-3 w-fit rounded-xl bg-sky-950 text-sky-400 border border-sky-800/60 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-sky-400">{item.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-emerald-400 font-semibold block mb-0.5">Verified Evidence:</strong>
                  {item.proof}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
