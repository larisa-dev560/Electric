import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Zap, Clock } from 'lucide-react';

interface TopBarProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <div className="bg-[#0A131F] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Interactive Contact Pills */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-2 sm:gap-3 font-medium">
          {/* Phone Pill */}
          <a
            href="tel:9146356146"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-[#F5B700]/15 text-slate-200 hover:text-[#F5B700] border border-slate-800 hover:border-[#F5B700]/40 transition-all duration-200 group shadow-xs"
            title="Call Trinity Electric NY"
          >
            <div className="w-5 h-5 rounded-full bg-[#F5B700]/20 flex items-center justify-center text-[#F5B700] group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors">
              <Phone className="w-3 h-3" />
            </div>
            <span className="font-semibold tracking-wide">(914) 635-6146</span>
          </a>

          {/* Email Pill */}
          <a
            href="mailto:mick@trinityelectric.info"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-[#F5B700]/15 text-slate-200 hover:text-[#F5B700] border border-slate-800 hover:border-[#F5B700]/40 transition-all duration-200 group shadow-xs"
            title="Email Trinity Electric NY"
          >
            <div className="w-5 h-5 rounded-full bg-[#F5B700]/20 flex items-center justify-center text-[#F5B700] group-hover:bg-[#F5B700] group-hover:text-[#0D1B2A] transition-colors">
              <Mail className="w-3 h-3" />
            </div>
            <span className="font-medium">mick@trinityelectric.info</span>
          </a>

          {/* Hours / NYC Dispatch Pill */}
          <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Emergency Dispatch · Mon-Fri 7am-5pm</span>
          </div>
        </div>

        {/* Right: Social icons + Legal links */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Social Icons with Circular Glassmorphic Badges */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-[#F5B700] text-slate-400 hover:text-[#0D1B2A] border border-slate-700/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
            >
              <Facebook className="w-3 h-3" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-[#F5B700] text-slate-400 hover:text-[#0D1B2A] border border-slate-700/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
            >
              <Instagram className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-[#F5B700] text-slate-400 hover:text-[#0D1B2A] border border-slate-700/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
            >
              <Linkedin className="w-3 h-3" />
            </a>
          </div>

          <span className="text-slate-700">|</span>

          {/* Legal Links */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] text-slate-400">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#F5B700] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#F5B700] transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
