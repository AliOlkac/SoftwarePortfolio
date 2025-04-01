"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

/**
 * Görüntüleri optimize eden ve lazy yükleme yapan özel bir Image komponenti
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onClick,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Intersection Observer kullanarak viewport'a girdiğinde yükleme
  const { ref, inView } = useInView({
    triggerOnce: true, // Sadece bir kez tetikle
    threshold: 0.1, // Görüntünün %10'u göründüğünde tetikle
  });

  // Yükleme tamamlandığında
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={ref}
      className={`relative ${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      onClick={onClick}
    >
      {/* Görüntü viewport'a girdiğinde veya priority=true ise yükle */}
      {(inView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={70} // Daha düşük kalite, daha küçük dosya boyutu
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJBBfL6PAAAAABJRU5ErkJggg=="
          {...props}
        />
      )}
      
      {/* Yükleme animasyonu */}
      {!isLoaded && (inView || priority) && (
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 