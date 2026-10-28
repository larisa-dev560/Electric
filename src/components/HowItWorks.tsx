import React from 'react';
import { MessageSquareText, Compass, Wrench, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultations',
      description:
        'We assess your needs, discuss goals, and provide expert advice to tailor electrical solutions that align with your vision.',
      icon: MessageSquareText,
      tagline: 'Initial Assessment & Scope',
    },
    {
      num: '02',
      title: 'Planning & Design',
      description:
        'We create detailed blueprints and customized system layouts, ensuring seamless integration and optimal performance of your electrical infrastructure.',
      icon: Compass,
      tagline: 'Blueprint & Code Review',
    },
    {
      num: '03',
      title: 'Execution & Testing',
      description:
        'Our team installs, configures, and rigorously tests all components, guaranteeing functionality, safety, and client satisfaction from start to finish.',
      icon: Wrench,
      tagline: 'Turnkey Installation & Sign-Off',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0D1B2A] bg-[#F5B700] px-3.5 py-1 rounded mb-3">
            SEAMLESS PROCESS
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D1B2A] tracking-tight mb-4">
            How it works
          </h2>
          <div className="w-16 h-1 bg-[#F5B700] mx-auto mb-5 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            From initial consultation to final inspection, our structured approach guarantees on-time delivery, clear communication, and safe results.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-200 via-[#F5B700] to-slate-200 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top row: Big number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-5xl sm:text-6xl text-[#0D1B2A]/15 group-hover:text-[#F5B700] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors shadow-md">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#F5B700] bg-[#0D1B2A]/90 px-2.5 py-1 rounded inline-block mb-3">
                    {step.tagline}
                  </span>

                  <h3 className="font-heading font-extrabold text-2xl text-[#0D1B2A] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Step {idx + 1} of 3</span>
                  <span className="text-[#0D1B2A] group-hover:text-[#F5B700] font-heading flex items-center gap-1 transition-colors">
                    Standard Phase <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
