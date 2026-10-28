import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroProps {
  onAboutClick: () => void;
  onAppointmentClick: () => void;
}

const backgroundSlides = [
  {
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.01-PM.jpeg',
    tag: 'Commercial & Industrial Installation · NYC',
    caption: 'Heavy Duty 3-Phase Power Distribution',
  },
  {
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-6.30.02-PM.jpeg',
    tag: 'Precision Panel & Wire Conduit Setup',
    caption: 'High-Capacity Service Feeders',
  },
  {
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/081cb299-7ed2-4b82-a174-98950f15e77c_1_1000x850.jpg',
    tag: 'Industrial Switchgear & Automation',
    caption: '480V Substation Transformers',
  },
  {
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp_Image_2025-06-15_at_6.30.15_PM_1000x700.jpeg',
    tag: 'Commercial Distribution & Code Compliance',
    caption: 'Turnkey Electrical Contracting',
  },
  {
    url: 'https://trinityelectricny.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-20-at-6.15.58-AM.jpeg',
    tag: 'Sub-Panel Feeders & Conduit Routing',
    caption: 'DOB Permitted Workmanship · Queens, NY',
  },
];

export const Hero: React.FC<HeroProps> = ({ onAboutClick, onAppointmentClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Parallax Scroll Tracking & Scroll-Driven Slide Change
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      // Change background slide smoothly when scrolling through hero section
      if (y > 0 && y < 600) {
        const slideIndex = Math.floor((y / 600) * backgroundSlides.length) % backgroundSlides.length;
        setCurrentSlide(slideIndex);
      }

      lastScroll = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background Slider Auto-Cycle Timer (every 5.5s when idle)
  useEffect(() => {
    const timer = setInterval(() => {
      // only auto-slide if user is near top
      if (window.scrollY < 100) {
        setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
      }
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  // Interactive Electric Canvas Sparks & Arcs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particles: Particle[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      radius: Math.random() * 2 + 1,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Spark node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#F5B700';
        ctx.shadowColor = '#F5B700';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Connect nearby electrical sparks
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            if (dist > 50 && Math.random() > 0.88) {
              const midX = (p.x + p2.x) / 2 + (Math.random() - 0.5) * 10;
              const midY = (p.y + p2.y) / 2 + (Math.random() - 0.5) * 10;
              ctx.lineTo(midX, midY);
            }
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245, 183, 0, ${0.35 * (1 - dist / 135)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Pointer reaction
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.6 * (1 - mdist / 140)})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundSlides.length) % backgroundSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[740px] sm:min-h-[820px] lg:min-h-[860px] flex items-center justify-start overflow-hidden bg-[#0D1B2A]"
    >
      {/* FULL-WIDTH BACKGROUND IMAGE SLIDER WITH SMOOTH CROSSFADE */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${Math.min(scrollY * 0.25, 140)}px) scale(1.06)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {backgroundSlides.map((slide, index) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.caption}
              className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.12]"
            />
          </div>
        ))}

        {/* Ambient Dark Gradients & Vignettes for High Contrast Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/98 via-[#0D1B2A]/85 to-[#0D1B2A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-[#0D1B2A]/60" />
      </div>

      {/* Animated Circuit Board Vector Traces */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-1 opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B700" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F5B700" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M 50 140 L 260 140 L 360 240 L 650 240 L 760 350 L 1200 350"
          fill="none"
          stroke="url(#heroCircuitGrad)"
          strokeWidth="1.5"
          className="animate-circuit-flow"
        />
        <path
          d="M 1250 120 L 980 120 L 880 220 L 620 220 L 520 320 L 120 320"
          fill="none"
          stroke="url(#heroCircuitGrad)"
          strokeWidth="1.5"
          className="animate-circuit-flow"
        />
      </svg>

      {/* Interactive HTML5 Canvas Electric Sparks & Lightning Nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto z-2 opacity-65"
      />

      {/* Electric Glow Orbs in Background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F5B700]/10 rounded-full blur-3xl pointer-events-none animate-electric-pulse" />
      <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content with generous bottom padding so overlapping cards never block controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-36 sm:pb-40 lg:pb-44 w-full">
        <div className="max-w-3xl text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1B2A]/90 border border-[#F5B700]/50 text-[#F5B700] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg shadow-[#F5B700]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B700]"></span>
            </span>
            <Zap className="w-3.5 h-3.5 fill-[#F5B700]" />
            <span>Licensed &amp; Insured Electrical Contractor</span>
          </div>

          {/* H1 Title (Exact Required Text) */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6">
            Elite Electrical Solutions for Every Sector
          </h1>

          {/* Subtext (Exact Required Text) */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Trinity Electric NY delivers elite electrical solutions, ensuring innovation, safety, and efficiency across residential, commercial, and industrial sectors.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Button "ABOUT US" */}
            <button
              type="button"
              onClick={onAboutClick}
              className="relative group bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
              <span className="relative z-10">About Us</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Request Quote Button */}
            <button
              type="button"
              onClick={onAppointmentClick}
              className="relative border-2 border-white/80 hover:border-white text-white hover:bg-white/10 font-heading font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs group"
            >
              <ShieldCheck className="w-4 h-4 text-[#F5B700] group-hover:scale-110 transition-transform" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Trust Highlights below CTA */}
          <div className="mt-10 pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300 max-w-xl">
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">NYC / NY</div>
              <div className="text-xs text-slate-400 mt-0.5">Licensed Electricians</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-[#F5B700]">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Guaranteed Compliance</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-heading font-extrabold text-2xl text-white">Woodside, NY</div>
              <div className="text-xs text-slate-400 mt-0.5">Headquarters &amp; Field Hub</div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Background Slider Controls & Live Status - Safely elevated above overlapping cards */}
      <div className="flex absolute bottom-24 sm:bottom-28 lg:bottom-32 right-4 sm:right-8 z-20 items-center gap-3 sm:gap-4 bg-[#0D1B2A]/90 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-slate-700/90 shadow-2xl">
        <div className="flex items-center gap-2 pr-2.5 sm:pr-3 border-r border-slate-700 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#F5B700] animate-pulse"></span>
          <span className="text-slate-300 text-[11px] font-medium hidden lg:inline max-w-[200px] truncate">
            {backgroundSlides[currentSlide].tag}
          </span>
          <span className="text-[#F5B700] font-mono text-xs font-bold">
            0{currentSlide + 1} / 0{backgroundSlides.length}
          </span>
        </div>

        {/* Slider Dots */}
        <div className="flex items-center gap-1.5">
          {backgroundSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-5 h-1.5 bg-[#F5B700]' : 'w-1.5 h-1.5 bg-slate-500 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-1 pl-1.5 sm:pl-2 border-l border-slate-700">
          <button
            type="button"
            onClick={handlePrevSlide}
            className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#F5B700] text-slate-300 hover:text-[#0D1B2A] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#F5B700] text-slate-300 hover:text-[#0D1B2A] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Animated Scroll Down Indicator with Electric Spark - Safely elevated above cards */}
      <div className="absolute bottom-22 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
        <button
          type="button"
          onClick={onAboutClick}
          className="group inline-flex flex-col items-center gap-1 text-slate-400 hover:text-[#F5B700] transition-colors cursor-pointer select-none"
          aria-label="Scroll to explore Trinity Electric NY"
        >
          <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#F5B700] transition-colors flex items-center gap-1.5">
            <Zap className="w-3 h-3 fill-[#F5B700] text-[#F5B700]" />
            <span>Scroll to Explore</span>
          </span>
          <div className="w-6 h-8 rounded-full border-2 border-slate-600 group-hover:border-[#F5B700] flex items-start justify-center p-1 transition-colors">
            <div className="w-1.5 h-2 bg-[#F5B700] rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-[#F5B700] -mt-1 group-hover:translate-y-0.5 transition-all" />
        </button>
      </div>
    </section>
  );
};
