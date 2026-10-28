import React, { useState } from 'react';
import { Zap } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt || 'Trinity Electric Image'}
          className={className}
          {...props}
        />
      );
    }
    return (
      <div
        className={`bg-slate-800 flex flex-col items-center justify-center text-slate-400 p-6 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-[#F5B700]/20 flex items-center justify-center text-[#F5B700] mb-2">
          <Zap className="w-5 h-5" />
        </div>
        <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
          Trinity Electric NY
        </span>
        <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">{alt || 'Electrical Services'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Trinity Electric NY'}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${!isLoaded ? 'opacity-90 blur-[1px]' : 'opacity-100 transition-opacity duration-300'}`}
      {...props}
    />
  );
};
