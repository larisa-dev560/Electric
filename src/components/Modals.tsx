import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Phone, Zap, ArrowRight, Building, Award, Calendar } from 'lucide-react';
import { ServiceItem } from '../types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1B2A]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#F5B700]" />
            <h3 className="font-heading font-bold text-lg text-[#0D1B2A]">
              Privacy Policy · Trinity Electric NY
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          <p className="text-xs text-slate-400">
            Last Updated: January 2026 · Trinity Electric Group NY
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">1. Information We Collect</h4>
          <p>
            When you request an estimate or contact Trinity Electric NY through our website or phone, we collect information including your name, email address, phone number, property location in New York, and specific project details.
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">2. SMS &amp; Mobile Messaging Disclosures</h4>
          <p>
            If you check our consent box and provide your phone number, you agree to receive recurring informational and marketing text messages from Trinity Electric NY regarding service appointments, quote estimates, and project updates.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Message frequency varies according to your ongoing projects and service requests.</li>
            <li>Message &amp; data rates may apply.</li>
            <li>Reply <strong>STOP</strong> at any time to opt out.</li>
            <li>Reply <strong>HELP</strong> for assistance or contact our office at (914) 635-6146.</li>
            <li>Consent is not a condition of purchasing any electrical service.</li>
            <li>We do not sell, rent, or share SMS consent or personal telephone numbers with third-party marketers.</li>
          </ul>

          <h4 className="font-heading font-bold text-slate-900 text-base">3. Use of Information</h4>
          <p>
            Your information is used solely to assess electrical workloads, draft transparent quotes, coordinate dispatch to your job site in Woodside or the NYC metropolitan area, and deliver compliant electrical contracting services.
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">4. Contact Our Privacy Officer</h4>
          <p>
            If you have questions regarding this privacy statement, please contact us at{' '}
            <a href="mailto:mick@trinityelectric.info" className="text-[#0D1B2A] font-semibold underline">
              mick@trinityelectric.info
            </a>{' '}
            or write to: 37-31 58th Street, Woodside, NY 11377.
          </p>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#0D1B2A] text-white hover:bg-slate-800 px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1B2A]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-[#F5B700]" />
            <h3 className="font-heading font-bold text-lg text-[#0D1B2A]">
              Terms and Conditions · Trinity Electric NY
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          <p className="text-xs text-slate-400">
            Effective Date: January 2026 · Trinity Electric Group NY
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">1. Contracting &amp; Licensing</h4>
          <p>
            All electrical services, inspections, and installations performed by Trinity Electric NY strictly comply with the National Electrical Code (NEC), New York State Uniform Code, and New York City Department of Buildings (DOB) electrical regulations.
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">2. Estimations &amp; Work Orders</h4>
          <p>
            Free estimations are formulated based on stated project parameters and visible site conditions. Any latent code violations, concealed conduit deficiencies, or structural hazards discovered during project execution will be communicated before additional work proceeds.
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">3. 100% Satisfaction Guarantee</h4>
          <p>
            We stand behind our workmanship. Trinity Electric NY warrants all labor for 12 months following formal project commissioning. Defective installations attributable to workmanship will be remediated at zero additional cost.
          </p>

          <h4 className="font-heading font-bold text-slate-900 text-base">4. Safety &amp; Site Access</h4>
          <p>
            The client agrees to grant safe, uninterrupted access to main electrical service panels, utility rooms, disconnects, and distribution shafts during scheduled appointment windows.
          </p>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#0D1B2A] text-white hover:bg-slate-800 px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Terms
          </button>
        </div>
      </div>
    </div>
  );
};

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1B2A]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header with Service Image Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-[0.6]"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#F5B700] bg-[#0D1B2A]/90 px-2.5 py-1 rounded inline-block mb-1">
              Electrical Division
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
              {service.title} ELECTRICAL SERVICES
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-slate-700 text-base leading-relaxed font-medium">
            {service.detailedOverview}
          </p>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0D1B2A] mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#F5B700]" />
              <span>Core Specializations &amp; Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.bulletPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0D1B2A] text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-heading font-bold text-sm text-[#F5B700]">
                Ready to wire or upgrade your property?
              </div>
              <div className="text-xs text-slate-300">
                Get a free customized estimate from our Woodside master electricians.
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                onRequestQuote(`${service.title.charAt(0) + service.title.slice(1).toLowerCase()} Electrical Services`);
                onClose();
              }}
              className="bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] text-xs font-heading font-bold uppercase tracking-wider px-5 py-3 rounded-lg flex items-center gap-2 shrink-0 transition-colors cursor-pointer"
            >
              <span>Request Quote Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AboutDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutDetailModal: React.FC<AboutDetailModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1B2A]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#0D1B2A] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F5B700] text-[#0D1B2A] flex items-center justify-center font-bold">
              <Building className="w-5 h-5 fill-[#0D1B2A]" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                About Trinity Electric NY
              </h3>
              <p className="text-xs text-slate-300">
                Woodside, Queens &amp; NYC Metropolitan Area
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-slate-600 leading-relaxed">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 text-xs sm:text-sm font-medium">
            Located at 37-31 58th Street, Woodside, NY 11377, Trinity Electric NY stands as a benchmark of electrical contracting throughout the five boroughs.
          </div>

          <h4 className="font-heading font-bold text-base text-slate-900">
            Our Mission &amp; Standards
          </h4>
          <p>
            Trinity Electric NY was founded with a straightforward mission: eliminate the guesswork, delays, and safety risks from residential, commercial, and industrial electrical work. We maintain active NYC Department of Buildings filings, comprehensive multi-million dollar liability insurance, and an unblemished OSHA safety record.
          </p>

          <h4 className="font-heading font-bold text-base text-slate-900">
            Why Contractors &amp; Facilities Choose Trinity
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <Award className="w-6 h-6 text-[#F5B700] mb-2" />
              <div className="font-bold text-slate-900 text-sm">Certified Master Electricians</div>
              <p className="text-xs text-slate-600 mt-1">
                Every field lead holds extensive journeyman or master electrician credentials.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <Calendar className="w-6 h-6 text-[#F5B700] mb-2" />
              <div className="font-bold text-slate-900 text-sm">Guaranteed Timelines</div>
              <p className="text-xs text-slate-600 mt-1">
                We coordinate closely with general contractors, architects, and inspectors to hit scheduled deadlines.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-2xl">
          <a
            href="tel:9146356146"
            className="flex items-center gap-1.5 text-xs font-bold text-[#0D1B2A] hover:text-[#F5B700]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Line: (914) 635-6146</span>
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};
