import React from 'react';
import { SafeImage } from './SafeImage';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface AboutUsProps {
  onMoreAboutClick: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onMoreAboutClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F6F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Staggered Collage of 3 Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image 1: Main Large Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full z-10 group">
                <SafeImage
                  src="https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.01-PM.jpeg"
                  alt="Trinity Electric NY Commercial System Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-medium tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F5B700] animate-pulse"></span>
                  Active Job Site · NYC Metropolitan Area
                </div>
              </div>

              {/* Image 2: Staggered Top-Right / Overlapping Image */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <div className="aspect-[4/3] bg-slate-900">
                  <SafeImage
                    src="https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.02-PM.jpeg"
                    alt="Precision Electrical Panel and Wire Conduit Setup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Image 3: Staggered Bottom Left / Accent Image */}
              <div className="hidden sm:block absolute -top-8 -left-6 w-5/12 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 group">
                <div className="aspect-[4/3] bg-slate-900">
                  <SafeImage
                    src="https://trinityelectricny.com/wp-content/uploads/2025/06/081cb299-7ed2-4b82-a174-98950f15e77c_1_1000x850.jpg"
                    alt="Industrial Grade Electrical Switchgear and Distribution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 left-6 z-30 bg-[#0D1B2A] text-white p-4 rounded-xl shadow-2xl border-2 border-[#F5B700] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5B700] text-[#0D1B2A] flex items-center justify-center font-extrabold text-xl font-heading">
                  <Zap className="w-6 h-6 fill-[#0D1B2A]" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-lg text-white leading-tight">
                    Trusted &amp; Certified
                  </div>
                  <div className="text-xs text-slate-300">
                    Woodside &amp; 5 Boroughs
                  </div>
                </div>
              </div>

              {/* Background Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F5B700]/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 lg:pl-4">
            {/* Small uppercase colored label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5B700] bg-[#0D1B2A] px-3.5 py-1.5 rounded mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F5B700]" />
              <span>WHO WE ARE</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0D1B2A] tracking-tight leading-tight mb-6">
              Providing The Best Services In The Region
            </h2>

            {/* Exact Required Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Trinity Electric NY is a trusted name in delivering top-tier electrical solutions and services across the region. With a commitment to excellence, we specialize in cutting-edge installations, maintenance, and custom electric systems tailored to meet residential, commercial, and industrial needs.
              </p>
              <p>
                Our team of certified professionals brings years of hands-on experience, ensuring reliability, innovation, and customer satisfaction in every project. From security systems and automation to electrical contracting and diagnostics, we provide comprehensive services backed by the latest technology and industry standards.
              </p>
              <p className="font-medium text-slate-700">
                At Trinity Electric NY, we don&apos;t just meet expectations—we exceed them. We take pride in being the region&apos;s go-to partner for dependable, high-quality electrical services.
              </p>
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Licensed NYC Master Electrician</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Strict NEC Code Compliance</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Commercial &amp; High Voltage</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F5B700] shrink-0" />
                <span>Rapid Emergency Diagnostics</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onMoreAboutClick}
                className="bg-[#0D1B2A] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-3 group cursor-pointer border border-slate-700"
              >
                <span>MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#F5B700] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
