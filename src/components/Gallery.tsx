import React, { useState, useEffect } from 'react';
import { SafeImage } from './SafeImage';
import { Maximize2, X, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-20-at-6.15.58-AM.jpeg',
    title: 'Commercial Sub-Panel & Conduit Runs',
    category: 'Commercial',
    description: 'Custom conduit routing and multi-breaker panel distribution for Queens commercial facility.',
  },
  {
    id: 2,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-20-at-6.15.33-AM.jpeg',
    title: 'Precision Industrial Switchboard',
    category: 'Industrial',
    description: 'Heavy duty three-phase disconnect and distribution installation with strict NEC labeling.',
  },
  {
    id: 3,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-10.57.55-PM.jpeg',
    title: 'Architectural Lighting & Ceiling Feeds',
    category: 'Residential',
    description: 'Clean recessed LED fixture runs and dimming controls in modern luxury home.',
  },
  {
    id: 4,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-10.57.51-PM-2.jpeg',
    title: 'High-Capacity Service Entrance Upgrades',
    category: 'Commercial',
    description: 'Upgrading main utility connections and meter banks for multi-tenant property.',
  },
  {
    id: 5,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-10.57.52-PM.jpeg',
    title: 'Rigid Conduit & Cable Tray Layouts',
    category: 'Industrial',
    description: 'Heavy-gauge electrical conduit layout engineered for industrial machinery power delivery.',
  },
  {
    id: 6,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.56-PM.jpeg',
    title: 'Safety Disconnects & Transformer Feed',
    category: 'Industrial',
    description: 'Safe step-down transformer integration with ground fault interrupters and testing.',
  },
  {
    id: 7,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.56-PM-4.jpeg',
    title: 'Modern Residential Smart Panel',
    category: 'Residential',
    description: 'Replacement of outdated fuse box with modern surge-protected 200A load center.',
  },
  {
    id: 8,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.54-PM-1.jpeg',
    title: 'Warehouse High-Bay LED Conversion',
    category: 'Commercial',
    description: 'Commercial lighting retrofit delivering 60% energy savings and superior lumens.',
  },
  {
    id: 9,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.34.52-PM.jpeg',
    title: 'Emergency Generator Interlock & ATS',
    category: 'Residential',
    description: 'Automatic transfer switch integration for continuous backup during severe weather.',
  },
  {
    id: 10,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.34.22-PM.jpeg',
    title: 'Industrial Motor Control Installation',
    category: 'Industrial',
    description: 'Dedicated starter panels and emergency stop loops for warehouse conveying systems.',
  },
  {
    id: 11,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.34.22-PM-1.jpeg',
    title: 'Commercial Restaurant Kitchen Wiring',
    category: 'Commercial',
    description: 'Waterproof conduit, dedicated appliance circuits, and exhaust hood wiring.',
  },
  {
    id: 12,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.34.21-PM-3.jpeg',
    title: 'Multi-Family Residential Meter Stacks',
    category: 'Residential',
    description: 'Organized utility meter banks compliant with New York City DOB regulations.',
  },
  {
    id: 13,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.12-PM-3.jpeg',
    title: 'Electrical Substation Feeders',
    category: 'Industrial',
    description: 'Heavy feeder terminations and busbar alignments with certified torque specs.',
  },
  {
    id: 14,
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.05-PM-4.jpeg',
    title: 'Commercial Office Low-Voltage Network',
    category: 'Commercial',
    description: 'Structured rack wiring, surge suppression, and clean patch bay distribution.',
  },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Commercial' | 'Residential' | 'Industrial'>('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Commercial', 'Residential', 'Industrial'] as const;

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  // If not expanded, show first 8 items; when clicked "EXPLORE MORE", show all
  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, 8);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="projects" className="py-24 bg-[#F5F6F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0D1B2A] bg-[#F5B700] px-3.5 py-1 rounded mb-3">
            GALLERY
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D1B2A] tracking-tight mb-4">
            Our Featured Work
          </h2>
          <div className="w-16 h-1 bg-[#F5B700] mx-auto mb-5 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            A visual showcase of recent electrical installations, wiring infrastructure, and code-compliant projects executed throughout Woodside and New York City.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                }}
                className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#0D1B2A] text-[#F5B700] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl border border-slate-200/80 cursor-pointer aspect-[4/3] transform transition-all duration-300 hover:-translate-y-1"
            >
              <SafeImage
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-[#F5B700] text-[#0D1B2A] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5B700] mb-1 block">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-[11px] line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE Button */}
        {filteredItems.length > 8 && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#0D1B2A] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2 cursor-pointer border border-slate-700 active:scale-95"
            >
              <Zap className="w-4 h-4 text-[#F5B700]" />
              <span>{isExpanded ? 'SHOW LESS PROJECTS' : 'EXPLORE MORE'}</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 bg-[#0D1B2A]/95 backdrop-blur-md flex items-center justify-center p-4 select-none">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(
                (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-slate-800/80 hover:bg-[#F5B700] hover:text-[#0D1B2A] p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-slate-800/80 hover:bg-[#F5B700] hover:text-[#0D1B2A] p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Content */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <SafeImage
                src={filteredItems[selectedImageIndex].url}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[75vh] max-w-full object-contain mx-auto"
              />
            </div>

            {/* Caption bar */}
            <div className="w-full mt-4 bg-slate-900/90 border border-slate-800 rounded-lg p-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F5B700]">
                    {filteredItems[selectedImageIndex].category}
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-xs text-slate-400">
                    Project {selectedImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                  {filteredItems[selectedImageIndex].description}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#quote"
                  onClick={() => setSelectedImageIndex(null)}
                  className="bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] text-xs font-heading font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors inline-block text-center"
                >
                  Request Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
