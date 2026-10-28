import React from 'react';
import { SafeImage } from './SafeImage';
import { Check, ShieldCheck, Zap, Award, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Experience and Expertise',
      description:
        'Years of hands-on experience and deep industry knowledge ensure top-quality solutions for residential, commercial, and industrial electrical projects.',
      icon: Award,
    },
    {
      title: 'Professionalism and Reliability',
      description:
        'Punctual, respectful, and responsive—we show up on time, communicate clearly, and complete every job with consistent, reliable excellence.',
      icon: Clock,
    },
    {
      title: 'Safety and Compliance',
      description:
        'We prioritize safety on every job and strictly follow all electrical codes, ensuring compliant and hazard-free installations and repairs.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-[#F5F6F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Reasons */}
          <div className="lg:col-span-7">
            {/* Small uppercase colored label */}
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0D1B2A] bg-[#F5B700] px-3.5 py-1 rounded mb-4">
              WHY CHOOSE US
            </div>

            {/* H2 Title */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0D1B2A] tracking-tight leading-tight mb-5">
              Electricians you can trust for all your electrical needs.
            </h2>

            {/* Intro */}
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-medium">
              Electricians you can trust for all your electrical needs—skilled, dependable, and dedicated to delivering exceptional service every time.
            </p>

            {/* 3 Detailed Items */}
            <div className="space-y-6">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#0D1B2A] mb-1.5 flex items-center gap-2">
                        <span>{point.title}</span>
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro badges below */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Fully Insured &amp; Bonded
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> OSHA Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Queens &amp; NYC DOB Permits
              </span>
            </div>
          </div>

          {/* Right Column: High Quality Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900 group">
                <SafeImage
                  src="https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-20-at-6.15.33-AM.jpeg"
                  alt="Trinity Electric NY Industrial Grade Workmanship and Panels"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-70" />
                
                {/* Floating Card at Bottom of Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0D1B2A]/90 backdrop-blur-md border border-white/20 p-5 rounded-xl text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-[#F5B700] text-[#0D1B2A] flex items-center justify-center font-bold">
                      <Zap className="w-5 h-5 fill-[#0D1B2A]" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm">Strict Zero-Defect Standard</div>
                      <div className="text-xs text-[#F5B700]">Verified 100% Code Passing</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">
                    Inspected and signed off by licensed New York electrical professionals.
                  </p>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F5B700]/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
