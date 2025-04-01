"use client";

import { useEffect, useRef, useState } from "react";

interface LazyComponentProps {
  children: React.ReactNode;
  threshold?: number;
  placeholder?: React.ReactNode;
  rootMargin?: string;
}

/**
 * Bileşenleri sadece görünür olduklarında yükleyen wrapper bileşeni
 * Ana thread performansını artırmak için görünmeyen bileşenleri yüklemez
 */
export const LazyComponent = ({ 
  children, 
  threshold = 0.1, 
  placeholder, 
  rootMargin = "0px" 
}: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? children : (placeholder || <div className="h-20 bg-background/20" />)}
    </div>
  );
};

export default LazyComponent; 