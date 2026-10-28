/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteForm } from './components/QuoteForm';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import {
  PrivacyModal,
  TermsModal,
  ServiceDetailModal,
  AboutDetailModal,
} from './components/Modals';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ServiceItem } from './types';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>(
    'Residential Electrical Services'
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceFromFooter = (tabId: 'residential' | 'commercial' | 'industrial') => {
    scrollToSection('services');
    if (tabId === 'residential') {
      setSelectedQuoteService('Residential Electrical Services');
    } else if (tabId === 'commercial') {
      setSelectedQuoteService('Commercial Electrical Services');
    } else if (tabId === 'industrial') {
      setSelectedQuoteService('Industrial Electrical Services');
    }
  };

  const handleRequestQuoteForService = (serviceTitle: string) => {
    setSelectedQuoteService(serviceTitle);
    scrollToSection('quote');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#F5B700] selection:text-slate-900 pb-16 sm:pb-0">
      {/* 1. TOP BAR */}
      <TopBar
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      {/* 2. STICKY HEADER */}
      <Header onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 3. HERO */}
        <Hero
          onAboutClick={() => scrollToSection('about')}
          onAppointmentClick={() => scrollToSection('quote')}
        />

        {/* 4. FEATURE STRIP */}
        <FeatureStrip />

        {/* 5. ABOUT / WHO WE ARE */}
        <AboutUs onMoreAboutClick={() => setIsAboutModalOpen(true)} />

        {/* 6. SERVICES */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 7. GALLERY */}
        <Gallery />

        {/* 8. HOW IT WORKS */}
        <HowItWorks />

        {/* 9. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 10. QUOTE FORM */}
        <QuoteForm
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
          onOpenTerms={() => setIsTermsOpen(true)}
          initialService={selectedQuoteService}
        />

        {/* 11. TESTIMONIALS */}
        <Testimonials />

        {/* 12. CTA BANNER */}
        <CtaBanner onQuoteClick={() => scrollToSection('quote')} />
      </main>

      {/* 13. FOOTER */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onSelectServiceTab={handleSelectServiceFromFooter}
      />

      {/* MODALS */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={handleRequestQuoteForService}
      />

      <AboutDetailModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onContactClick={() => scrollToSection('quote')}
      />

      {/* Sticky Mobile Call + Appointment Bar */}
      <StickyMobileBar onAppointmentClick={() => scrollToSection('quote')} />

      {/* Scroll-to-top floating button */}
      <ScrollToTop />
    </div>
  );
}
