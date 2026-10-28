import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck, Phone, Zap } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active nav section by scroll position
      const sections = ['hero', 'about', 'services', 'projects', 'quote'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About Us', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact Us', href: 'quote' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveNav(href);
    onNavigate(href);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? 'shadow-lg shadow-slate-900/5 py-2.5 border-slate-200/80'
          : 'shadow-xs py-3.5 border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with rounded-xl border radius and subtle shadow */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Trinity Electric NY Home"
          >
            {/* Logo Badge Container with Border Radius */}
            <div className="relative rounded-xl overflow-hidden shadow-md shadow-slate-900/10 border-2 border-slate-200/90 group-hover:border-[#F5B700] transition-all duration-300 bg-[#0D1B2A] p-0.5 shrink-0 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#F5B700]/15">
              {!logoError ? (
                <img
                  src="https://trinityelectricny.com/wp-content/uploads/2023/06/image-56.png"
                  alt="Trinity Electric NY Logo"
                  className="h-10 sm:h-12 w-auto object-contain rounded-lg"
                  onError={() => setLogoError(true)}
                  onLoad={() => setLogoLoaded(true)}
                />
              ) : null}

              {(logoError || !logoLoaded) && (
                <div className="w-12 h-10 flex items-center justify-center bg-[#0D1B2A] rounded-lg">
                  <Zap className="w-5 h-5 text-[#F5B700]" />
                </div>
              )}
            </div>

            {/* Brand Title alongside Logo */}
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#0D1B2A] leading-none group-hover:text-[#0D1B2A] transition-colors">
                TRINITY<span className="text-[#F5B700]">ELECTRIC</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Woodside, NY · NYC Licensed</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1.5 text-sm font-heading font-semibold tracking-wide transition-all duration-200 group ${
                    isActive ? 'text-[#0D1B2A]' : 'text-slate-700 hover:text-[#0D1B2A]'
                  }`}
                >
                  <span>{link.label}</span>
                  
                  {/* Subtle active / hover golden underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#F5B700] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full shadow-xs' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button with Premium Styling & Glow */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#quote"
              onClick={(e) => handleLinkClick(e, 'quote')}
              className="relative group bg-gradient-to-r from-[#F5B700] to-[#f0b000] hover:from-[#f0b000] hover:to-[#e09f00] text-[#0D1B2A] font-heading font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-[#F5B700]/25 hover:shadow-xl hover:shadow-[#F5B700]/40 transition-all duration-200 flex items-center gap-2 active:scale-95 overflow-hidden border border-[#F5B700]/60"
            >
              {/* Shimmer light sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[280%] transition-transform duration-1000" />
              
              <CalendarCheck className="w-4 h-4 relative z-10 stroke-[2.2]" />
              <span className="relative z-10">Make An Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger & Direct Call Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:9146356146"
              className="p-2.5 rounded-lg bg-slate-100 hover:bg-[#F5B700]/20 text-[#0D1B2A] hover:text-[#0D1B2A] transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 text-[#F5B700]" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-[#0D1B2A] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu with Premium Glassmorphism */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 animate-fadeIn pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeNav === link.href;
                return (
                  <a
                    key={link.label}
                    href={`#${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-heading font-semibold text-base py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0D1B2A] text-[#F5B700]'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-[#0D1B2A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5B700]"></span>}
                  </a>
                );
              })}
              
              <div className="pt-2">
                <a
                  href="#quote"
                  onClick={(e) => handleLinkClick(e, 'quote')}
                  className="w-full bg-[#F5B700] hover:bg-[#e09f00] text-[#0D1B2A] font-heading font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Make An Appointment</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
