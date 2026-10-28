import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 sm:bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#0D1B2A] hover:bg-[#F5B700] text-[#F5B700] hover:text-[#0D1B2A] border border-slate-700 shadow-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};
