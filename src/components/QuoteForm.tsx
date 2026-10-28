import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface QuoteFormProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  initialService = 'Residential Electrical Services',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
    smsConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');

  const servicesOptions = [
    'Residential Electrical Services',
    'Commercial Electrical Services',
    'Industrial Electrical Services',
    'Other',
  ];

  const validate = () => {
    const err: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      err.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      err.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      err.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      err.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.service) {
      err.service = 'Please select a service';
    }
    if (!formData.message.trim()) {
      err.message = 'Please provide details about your electrical project';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API quote dispatch
    setTimeout(() => {
      const generatedId = `TRINITY-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: 'Residential Electrical Services',
      message: '',
      smsConsent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="quote" className="py-24 bg-[#0D1B2A] text-white relative overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F5B700]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0D1B2A] bg-[#F5B700] px-3.5 py-1 rounded mb-3">
            GET A FAST ESTIMATE
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Do you Need Help With Electrical Services?
          </h2>
          <div className="w-16 h-1 bg-[#F5B700] mx-auto mb-5 rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg">
            Our licensed experts offer fast, safe, and reliable solutions for homes, businesses, and industrial needs. Power up with confidence today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-xs">
              <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#F5B700]" />
                <span>Woodside Electrical Dispatch</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Whether you need a quick breaker diagnostic, total service heavy-up, or scheduled commercial wiring, our licensed field estimators respond within hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Phone Line</div>
                    <a href="tel:9146356146" className="font-bold text-white hover:text-[#F5B700] transition-colors">
                      (914) 635-6146
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Dispatch</div>
                    <a href="mailto:mick@trinityelectric.info" className="font-bold text-white hover:text-[#F5B700] transition-colors">
                      mick@trinityelectric.info
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0D1B2A] text-[#F5B700] flex items-center justify-center shrink-0 border border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Business Hours</div>
                    <div className="font-semibold text-white">Mon – Fri: 07:00am – 05:00pm</div>
                    <div className="text-xs text-slate-400">Emergency support available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-gradient-to-r from-[#F5B700]/20 to-transparent border border-[#F5B700]/30 rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5B700] text-[#0D1B2A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white">Free, Honest Estimations</h4>
                <p className="text-xs text-slate-300">
                  Zero hidden travel surcharges. Transparent flat-rate estimates before any wrench touches a box.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: White Card Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-8 sm:p-10 border border-slate-100 relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 px-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#0D1B2A] mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-slate-900">{formData.firstName}</strong>. Our Woodside master electrical team will review your project and contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly.
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto mb-8 text-left text-xs text-slate-700 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Reference ID:</span>
                      <span className="font-mono font-bold text-[#0D1B2A]">{confirmationId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-slate-900">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email:</span>
                      <span className="text-slate-900">{formData.email}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:9146356146"
                      className="w-full sm:w-auto bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md shadow-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now: (914) 635-6146</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto border border-slate-300 hover:bg-slate-100 text-slate-700 font-heading font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: '' });
                        }}
                        placeholder="e.g. Michael"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B700] transition-colors ${
                          errors.firstName ? 'border-red-400 bg-red-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: '' });
                        }}
                        placeholder="e.g. Scott"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B700] transition-colors ${
                          errors.lastName ? 'border-red-400 bg-red-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="mick@company.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B700] transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="(914) 000-0000"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B700] transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Required Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Required Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: '' });
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F5B700]"
                    >
                      {servicesOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Description / Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Please specify your electrical requirements, building type, or timeline..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B700] resize-y transition-colors ${
                        errors.message ? 'border-red-400 bg-red-50/40' : 'border-slate-300 bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* SMS Consent Checkbox (EXACT REQUIRED TEXT) */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.smsConsent}
                        onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0D1B2A] focus:ring-[#F5B700] cursor-pointer shrink-0"
                      />
                      <span className="text-xs text-slate-500 leading-normal">
                        By checking this box and providing my phone number, I agree to receive recurring informational and marketing text messages from Trinity Electric NY at the number provided. Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenTerms();
                          }}
                          className="text-[#0D1B2A] font-semibold underline hover:text-[#F5B700] transition-colors"
                        >
                          Terms &amp; Conditions
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenPrivacy();
                          }}
                          className="text-[#0D1B2A] font-semibold underline hover:text-[#F5B700] transition-colors"
                        >
                          Privacy Policy
                        </button>.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-extrabold text-sm uppercase tracking-wider py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0D1B2A] border-t-transparent rounded-full animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
