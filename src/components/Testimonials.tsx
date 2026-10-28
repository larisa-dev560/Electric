import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { TestimonialItem } from '../types';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: 'Amanda R.',
    role: 'Commercial Property Manager',
    service: 'Panel Upgrade & Commercial Distribution',
    rating: 5,
    quote:
      'Trinity Electric Group was professional, quick, and clean. They upgraded our entire panel, and everything works perfectly. Highly recommended for any commercial work!',
  },
  {
    id: 2,
    name: 'Robert T.',
    role: 'Industrial Plant Operations',
    service: 'Warehouse High-Voltage System',
    rating: 5,
    quote:
      'We had a major issue at our warehouse, and Trinity responded fast. Great industrial service with no downtime. Truly experts in the field.',
  },
  {
    id: 3,
    name: 'Sophia N.',
    role: 'Homeowner, Woodside NY',
    service: 'Residential Smart LED & Lighting',
    rating: 5,
    quote:
      'Incredible service and fair pricing. Trinity Electric Group exceeded expectations with their attention to detail and clean finish. Our lighting system looks amazing!',
  },
  {
    id: 4,
    name: 'Marcus D.',
    role: 'Facility Director',
    service: 'Automatic Standby Generator & ATS',
    rating: 5,
    quote:
      "Trinity's electricians are dependable and skilled. They installed our generator system seamlessly. It's rare to find this level of professionalism these days.",
  },
  {
    id: 5,
    name: 'Emily S.',
    role: 'Business Owner',
    service: 'Complex Electrical Diagnostics & Repair',
    rating: 5,
    quote:
      'Super impressed with Trinity Electric Group. They solved an issue three other companies couldn\'t. Fast, friendly, and very efficient. Five stars all the way!',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto sliding carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0D1B2A] bg-[#F5B700] px-3.5 py-1 rounded mb-3">
            TESTIMONIALS
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D1B2A] tracking-tight mb-4">
            Customers Feedback
          </h2>
          <div className="w-16 h-1 bg-[#F5B700] mx-auto mb-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Don&apos;t just take our word. See why our customers love us.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="bg-[#F5F6F8] rounded-2xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-lg relative min-h-[340px] flex flex-col justify-between transition-all duration-300">
            {/* Background Decorative Quote Mark */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-[#0D1B2A]/5 pointer-events-none" />

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F5B700] text-[#F5B700]"
                  />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200">
                  5.0 Verified Review
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="font-heading font-semibold text-lg sm:text-2xl text-[#0D1B2A] leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Information */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0D1B2A] text-[#F5B700] font-heading font-bold text-lg flex items-center justify-center shadow-md">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-base text-[#0D1B2A] flex items-center gap-2">
                    <span>{current.name}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {current.role}
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Service Completed
                </span>
                <span className="text-xs font-bold text-[#0D1B2A] bg-white px-3 py-1 rounded-full border border-slate-200 inline-block mt-0.5">
                  {current.service}
                </span>
              </div>
            </div>
          </div>

          {/* Controls: Prev / Next Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#0D1B2A] text-slate-700 hover:text-[#F5B700] border border-slate-200 shadow-sm flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#0D1B2A] text-slate-700 hover:text-[#F5B700] border border-slate-200 shadow-sm flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#F5B700]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <span className="text-xs font-medium text-slate-400">
              {currentIndex + 1} of {testimonialsData.length}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
