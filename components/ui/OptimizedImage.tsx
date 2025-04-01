"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { LazyComponent } from './LazyComponent';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Performans odaklı resim bileşeni
 * - Görünür olduğunda yüklenir (LazyComponent ile)
 * - Yükleme durumunda düşük kalite bulanık görüntü gösterir
 * - Mobil cihazlarda daha düşük çözünürlük kullanır
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality = 75
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Sadece client tarafında çalıştır
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mobil cihazlarda daha düşük kalite kullan
  const deviceQuality = isClient && window.innerWidth < 768 ? Math.min(quality, 65) : quality;

  // İçerik oluşturma
  const imageContent = (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={fill ? { width: '100%', height: '100%' } : { width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        quality={deviceQuality}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Yükleme durumu için bulanık fon */}
      {!loaded && (
        <div 
          className="absolute inset-0 bg-background/40 backdrop-blur-sm animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );

  // Eğer öncelikli değilse LazyComponent ile sar
  return priority ? imageContent : (
    <LazyComponent 
      threshold={0.1}
      rootMargin="200px"
      placeholder={<div className={`${className} bg-background/20 animate-pulse`} style={fill ? { width: '100%', height: '100%' } : { width, height }} />}
    >
      {imageContent}
    </LazyComponent>
  );
} 