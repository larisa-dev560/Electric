import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  Zap,
  ShieldCheck,
  Award,
  ArrowUp,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectServiceTab: (tabId: 'residential' | 'commercial' | 'industrial') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onSelectServiceTab,
}) => {
  const [logoError, setLogoError] = useState(false);

  const quickLinks = [
    { label: 'Home', action: () => onNavigate('hero') },
    { label: 'About Us', action: () => onNavigate('about') },
    { label: 'Services', action: () => onNavigate('services') },
    { label: 'Projects', action: () => onNavigate('projects') },
    { label: 'Contact Us', action: () => onNavigate('quote') },
    { label: 'Privacy Policy', action: onOpenPrivacy },
    { label: 'Terms and Conditions', action: onOpenTerms },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className="relative bg-[#070E17] text-slate-300 pt-16 pb-8 overflow-hidden">
      {/* Top subtle golden electrical accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent opacity-80" />

      {/* Background ambient lighting and subtle circuit pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#F5B700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PRE-FOOTER VIP CTA STRIP */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/95 via-[#0D1B2A]/90 to-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5B700] bg-[#F5B700]/10 px-3 py-1 rounded-full border border-[#F5B700]/30">
              <Zap className="w-3.5 h-3.5 fill-[#F5B700]" />
              <span>Licensed &amp; Insured NYC Master Electrician</span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Need immediate electrical installation or diagnostic dispatch?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Woodside headquarters serving Queens, Manhattan, Brooklyn, Bronx &amp; Westchester.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="tel:9146356146"
              className="bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#0D1B2A] group-hover:scale-110 transition-transform" />
              <span>Call (914) 635-6146</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="border border-slate-700 hover:border-white text-white hover:bg-white/10 font-heading font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ChevronRight className="w-4 h-4 text-[#F5B700]" />
            </button>
          </div>
        </div>

        {/* 4 MAIN COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand, Description, Badges & Social Icons (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Badge Container */}
            <div className="flex items-center gap-3">
              <div className="relative rounded-xl overflow-hidden bg-[#0D1B2A] border-2 border-slate-700/80 p-1.5 shadow-md shadow-slate-950/40 shrink-0">
                {!logoError ? (
                  <img
                    src="https://trinityelectricny.com/wp-content/uploads/2023/06/image__56_-removebg-preview.png"
                    alt="Trinity Electric NY"
                    className="h-10 sm:h-11 w-auto object-contain filter brightness-110"
                    onError={() => setLogoError(true)}
                  />
                ) : null}

                {logoError && (
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5 fill-[#F5B700]" />
                  </div>
                )}
              </div>

              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-wider block leading-tight">
                  TRINITY<span className="text-[#F5B700]">ELECTRIC</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block mt-0.5">
                  Residential · Commercial · Industrial
                </span>
              </div>
            </div>

            {/* Exact Required Paragraph */}
            <p className="text-slate-400 text-sm leading-relaxed pr-3">
              Trinity Electric NY provides trusted electrical services for homes, businesses, and industries—powered by experience, driven by quality, and committed to your complete satisfaction.
            </p>

            {/* Verified Trust Chips */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> NYC DOB Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5B700]" /> 100% Guaranteed Work
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trinity Electric on Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#F5B700] text-slate-400 hover:text-[#0D1B2A] border border-slate-800 hover:border-[#F5B700] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trinity Electric on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#F5B700] text-slate-400 hover:text-[#0D1B2A] border border-slate-800 hover:border-[#F5B700] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trinity Electric on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#F5B700] text-slate-400 hover:text-[#0D1B2A] border border-slate-800 hover:border-[#F5B700] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: QUICK LINKS (3 cols on lg) */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B700]"></span>
              <span>QUICK LINKS</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={item.action}
                    className="text-slate-400 hover:text-white transition-all flex items-center gap-2 group cursor-pointer text-left py-0.5 hover:translate-x-1 duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F5B700] transition-colors" />
                    <span className="group-hover:text-[#F5B700] transition-colors">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: SERVICES (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B700]"></span>
              <span>SERVICES</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceTab('residential')}
                  className="text-slate-400 hover:text-white transition-all flex flex-col items-start group cursor-pointer text-left"
                >
                  <span className="flex items-center gap-1.5 font-medium group-hover:text-[#F5B700] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F5B700] transition-colors" />
                    <span>Residential</span>
                  </span>
                  <span className="text-[10px] text-slate-500 pl-5">120V / 240V Smart Panels</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceTab('commercial')}
                  className="text-slate-400 hover:text-white transition-all flex flex-col items-start group cursor-pointer text-left"
                >
                  <span className="flex items-center gap-1.5 font-medium group-hover:text-[#F5B700] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F5B700] transition-colors" />
                    <span>Commercial</span>
                  </span>
                  <span className="text-[10px] text-slate-500 pl-5">208Y / 3-Phase Fit-Outs</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceTab('industrial')}
                  className="text-slate-400 hover:text-white transition-all flex flex-col items-start group cursor-pointer text-left"
                >
                  <span className="flex items-center gap-1.5 font-medium group-hover:text-[#F5B700] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F5B700] transition-colors" />
                    <span>Industrial</span>
                  </span>
                  <span className="text-[10px] text-slate-500 pl-5">480V Heavy Duty MCC</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT INFO (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B700]"></span>
              <span>CONTACT INFO</span>
            </h4>

            {/* Phone Card */}
            <a
              href="tel:9146356146"
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#F5B700]/50 hover:bg-slate-900 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Direct Hotline · 24/7 Dispatch</div>
                <div className="font-bold text-white group-hover:text-[#F5B700] transition-colors text-sm">
                  (914) 635-6146
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:mick@trinityelectric.info"
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#F5B700]/50 hover:bg-slate-900 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-slate-400">Official Estimating Dispatch</div>
                <div className="font-medium text-white group-hover:text-[#F5B700] transition-colors text-xs truncate">
                  mick@trinityelectric.info
                </div>
              </div>
            </a>

            {/* Hours Card with Live Indicator */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Operational Hours</span>
                </div>
                <div className="font-semibold text-white text-xs mt-0.5">
                  Mon - Fri: 07:00am - 05:00pm
                </div>
              </div>
            </div>

            {/* Address Card */}
            <a
              href="https://maps.google.com/?q=37-31+58th+Street,+Woodside,+NY+11377"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#F5B700]/50 hover:bg-slate-900 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span>Headquarters</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </div>
                <div className="font-medium text-white group-hover:text-[#F5B700] transition-colors text-xs leading-snug">
                  37-31 58th Street, Woodside, NY 11377
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left text-slate-400">
            © 2026 Trinity Electric Group. All Rights Reserved. | Designed by Design Spartans
          </p>

          <div className="flex items-center flex-wrap justify-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Woodside, NY Electricians
            </span>
            <span>·</span>
            <span>NYC DOB Licensed</span>
            <span>·</span>
            <span>Fully Bonded &amp; Insured</span>
            <span>·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#F5B700] hover:text-white font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
