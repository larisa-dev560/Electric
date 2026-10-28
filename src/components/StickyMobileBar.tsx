import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';

interface StickyMobileBarProps {
  onAppointmentClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onAppointmentClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D1B2A]/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        {/* Call Now Button */}
        <a
          href="tel:9146356146"
          className="bg-slate-800 hover:bg-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-lg flex items-center justify-center gap-2 border border-slate-700 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#F5B700]" />
          <span>Call Now</span>
        </a>

        {/* Appointment Button */}
        <button
          type="button"
          onClick={onAppointmentClick}
          className="bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Appointment</span>
        </button>
      </div>
    </div>
  );
};
