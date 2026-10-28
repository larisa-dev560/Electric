import React from 'react';
import { Award, DollarSign, ShieldCheck, ClipboardCheck } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      title: 'Quality Work',
      description: 'Precision-driven team ensures top-notch results every single time.',
      icon: Award,
      badge: 'Certified',
    },
    {
      title: 'Affordable Price',
      description: 'Competitive rates without compromising the quality you deserve.',
      icon: DollarSign,
      badge: 'Best Value',
    },
    {
      title: '100% Guarantee',
      description: 'We stand behind our work—complete satisfaction or your money back.',
      icon: ShieldCheck,
      badge: 'Risk Free',
    },
    {
      title: 'Free Estimation',
      description: 'No hidden fees—get honest quotes before we begin work.',
      icon: ClipboardCheck,
      badge: 'Transparent',
    },
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 lg:-mt-16 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-xl shadow-slate-900/10 border border-slate-100 hover:border-[#F5B700]/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-[#F5B700]/15 group-hover:text-[#0D1B2A] transition-colors">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D1B2A] group-hover:text-[#0D1B2A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-[#F5B700] transition-colors">
                  Trinity Standard
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
