
import React from 'react';

const ExecSummaryPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-black text-white">Exec Summary</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-2xl space-y-4">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs">What we achieved in 2025</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-blue-500 font-bold">01</span>
              <p className="text-zinc-300">Successfully onboarded <span className="text-white font-bold"> 43 total hires: +34% YoY </span> with 90%+ new joiner retention rate and over 32% of hires at IC3 level or above, including a new CRO. Built the Denver GTM office from scratch and integrated global remote sales roles.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-500 font-bold">02</span>
              <p className="text-zinc-300">Improved Offer Acceptance Rate to <span className="text-white font-bold"> 91.5%: +13.5pp vs 2024 </span> outperforming the SaaS market median of 82%. Referral engine grew from <span className="text-white font-bold"> 6% of our hires in 2024 to 23.3% in 2025 </span> including 100% of all Senior IC3+ Engineering hires and 53.3% below IC3.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-500 font-bold">03</span>
              <p className="text-zinc-300">Achieved a <span className="text-white font-bold"> 31-day Time-to-Hire for non-engineering roles, </span> beating the industry benchmark and our target of 40 days. Despite high selectivity and market friction, we successfully landed <span className="text-white font-bold"> 6/8 Hard-to-Fill </span> roles in H2 2025.</p>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-4">
          <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Identified Constraints</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Velocity slowed only in senior and founding roles due to intentional filtering and supply scarcity.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 rounded-xl border border-zinc-800/50">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Engineering IC3+</p>
              <p className="text-white font-medium">Local market conditions</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-zinc-800/50">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">GTM roles</p>
              <p className="text-white font-medium">Scope discovery for founding roles & Inbound noise</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">2026 Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Speed where supply exists", desc: "Beat 2025 avg TTH for non-eng roles (<31 days) and reduce Senior Eng TTH to under 44 days. Focus on delivering 4 specialized hard-to-fill roles in H1 (EM, Snr Prod Ops, Snr Prod Des, HoF) while minimizing admin friction via Ashby automation.", icon: "⚡" },
            { title: "Scalable by design", desc: "Repeatable processes and sustainable systems to grow with us and maintain our strong conversion at all stages, connecting dots across all talent areas from Employer Branding through to Early Careers", icon: "🛡️" },
            { title: "Performance Bar Raising", desc: "Quantifying hire quality via NIPS to maximize talent density while institutionalizing evidence-led channel prioritization. Maintain stakeholder alignment above 85% for both Hiring Manager satisfaction (2025: 87%) and Candidate NPS (2025: 89.1%).", icon: "📈" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors group">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecSummaryPage;
