import React from 'react';
import {
  Phone,
  ShieldAlert,
  Zap,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
} from 'lucide-react';

interface CtaBannerProps {
  onQuoteClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onQuoteClick }) => {
  const handleQuoteClick = (e: React.MouseEvent) => {
    if (onQuoteClick) {
      e.preventDefault();
      onQuoteClick();
    } else {
      const quoteEl = document.getElementById('quote');
      if (quoteEl) {
        e.preventDefault();
        quoteEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0D1B2A] text-white">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.01-PM.jpeg"
          alt="Trinity Electric NY Commercial and Industrial Repairs"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/90 to-[#0D1B2A]/80" />
      </div>

      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5B700]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Required Text and Call Now Button */}
          <div className="lg:col-span-7">
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5B700] bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-full mb-6 border border-[#F5B700]/30">
              <Zap className="w-3.5 h-3.5 fill-[#F5B700]" />
              <span>24/7 Rapid Emergency Response</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.2] mb-6">
              We Specialize In All Types of Electrical Repairs For Commercial, Industrial &amp; Residential
            </h2>

            {/* Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Trinity Electric NY specializes in comprehensive electrical repairs for commercial, industrial, and residential properties. Our expert team ensures safe, efficient, and reliable solutions tailored to meet all your electrical needs, big or small.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:9146356146"
                className="bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-md shadow-xl hover:shadow-2xl transition-all duration-200 inline-flex items-center justify-center gap-3 active:scale-95 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>CALL NOW (914) 635-6146</span>
              </a>

              <a
                href="#quote"
                onClick={handleQuoteClick}
                className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                <span>Book Service Online</span>
                <ArrowRight className="w-4 h-4 text-[#F5B700]" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-6">
              <ShieldAlert className="w-4 h-4 text-[#F5B700] shrink-0" />
              <span>Prompt dispatch across Queens, Woodside, Brooklyn, Manhattan &amp; Bronx</span>
            </div>
          </div>

          {/* Right Column: Emergency Dispatch & Capabilities Card (fills right side beautifully) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              
              {/* Corner Gold Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#F5B700]/15 rounded-bl-full pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      NYC Field Units On-Duty
                    </span>
                    <p className="text-[11px] text-slate-400">Live Dispatch · Woodside Hub</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold bg-[#F5B700] text-[#0D1B2A] px-2.5 py-1 rounded">
                  24 / 7
                </span>
              </div>

              {/* Quick Repair Checklist */}
              <div className="py-5 space-y-3.5">
                <div className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Emergency Power Diagnostics</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Main breaker tripping, transformer failures, burnt wiring &amp; sudden outages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">NYC DOB Code Sign-Offs</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Immediate remedy for electrical violations, unpermitted work &amp; fire audits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Industrial &amp; 3-Phase Repairs</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Motor controls, 480V switchgears, generator interlocks &amp; distribution boards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#F5B700]" /> Base Location:
                  </span>
                  <span className="font-medium text-white">37-31 58th St, Woodside NY</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Response Standard:
                  </span>
                  <span className="font-bold text-[#F5B700]">Same-Day Priority Dispatch</span>
                </div>
              </div>

              {/* Bottom Quick Call Bar */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <a
                  href="tel:9146356146"
                  className="w-full bg-slate-800 hover:bg-[#F5B700] text-slate-200 hover:text-[#0D1B2A] py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 border border-slate-700 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#F5B700] group-hover/btn:text-[#0D1B2A]" />
                  <span>Call Emergency Dispatch: (914) 635-6146</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
