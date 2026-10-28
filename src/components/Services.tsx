import React from 'react';
import { SafeImage } from './SafeImage';
import { ArrowRight, Home, Building2, Factory } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    title: 'RESIDENTIAL',
    shortDesc:
      'Expert electrical solutions tailored for modern homes—safe wiring, smart lighting, panel upgrades, and energy-efficient systems you can trust.',
    image:
      'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp_Image_2025-06-15_at_6.30.46_PM_5_1200x800_1_1000x700.jpeg',
    bulletPoints: [
      'Full Home Rewiring & Electrical Renovations',
      '200A & 400A Breaker Panel Upgrades',
      'EV Charger Station Installations (Level 2 & 3)',
      'Architectural LED Recessed & Landscape Lighting',
      'Smart Home Automation, Intercoms & Alarms',
      'Surge Protection & Safety GFCI/AFCI Upgrades',
    ],
    detailedOverview:
      'From classic brownstones in Brooklyn to modern luxury residences in Queens and Manhattan, Trinity Electric NY provides comprehensive residential electrical services that prioritize safety, energy efficiency, and flawless craftsmanship.',
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL',
    shortDesc:
      'Powering your business with custom electrical setups, efficient lighting, code compliance, and maintenance for seamless, uninterrupted operations every day.',
    image:
      'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp_Image_2025-06-15_at_6.30.15_PM_1000x700.jpeg',
    bulletPoints: [
      'Commercial Fit-Outs & Retail Build-Outs',
      'NYC Code Violation Remediations & Sign-Offs',
      'Energy-Efficient Commercial LED Retrofits',
      'Dedicated Circuits & Heavy Machinery Power',
      'Emergency Exit Lighting & Standby Backup Generators',
      'Low Voltage Data Cabling & Access Control',
    ],
    detailedOverview:
      'Unscheduled downtime means lost revenue. Trinity Electric NY partners with offices, restaurants, retail complexes, and medical facilities to engineer resilient power distribution systems built for continuous peak performance.',
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL',
    shortDesc:
      'Heavy-duty electrical services built for demanding environments—high-voltage installations, machinery wiring, system automation, and safety-focused power distribution solutions.',
    image:
      'https://trinityelectricny.com/wp-content/uploads/2025/06/081cb299-7ed2-4b82-a174-98950f15e77c_1000x700.jpg',
    bulletPoints: [
      'High-Voltage 480V / 3-Phase Power Distribution',
      'Motor Control Centers (MCC) & Variable Frequency Drives',
      'Industrial Plant Automation & PLC Conduit Systems',
      'Transformer Rigging, Testing & Switchgear Retrofits',
      'Warehouse Heavy Machinery Feeders & Busways',
      'Preventive Infrared Thermal Scanning & Arc Flash Audits',
    ],
    detailedOverview:
      'Industrial facilities demand uncompromising safety and heavy-duty engineering. Trinity Electric NY possesses the specialized gear, high-voltage credentials, and rigorous protocols needed for large manufacturing plants and warehouses.',
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'residential':
        return Home;
      case 'commercial':
        return Building2;
      case 'industrial':
        return Factory;
      default:
        return Home;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with colored small label */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0D1B2A] bg-[#F5B700] px-3.5 py-1 rounded mb-3">
            SERVICES
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D1B2A] tracking-tight mb-4">
            Reliable Power for Refined Spaces
          </h2>
          <div className="w-16 h-1 bg-[#F5B700] mx-auto mb-5 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            Delivering tailored power, wiring, and automation solutions across New York’s homes, commercial enterprises, and industrial facilities.
          </p>
        </div>

        {/* 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 cursor-pointer"
                onClick={() => onSelectService(service)}
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <SafeImage
                    src={service.image}
                    alt={`${service.title} Electrical Contractor Services`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category icon tag */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#0D1B2A]/90 backdrop-blur-xs text-[#F5B700] flex items-center justify-center border border-white/20 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#0D1B2A] tracking-wider mb-3 uppercase group-hover:text-[#F5B700] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#0D1B2A] group-hover:text-[#F5B700] transition-colors inline-flex items-center gap-1.5">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      Explore specs
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
