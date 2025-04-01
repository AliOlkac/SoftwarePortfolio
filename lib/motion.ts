/**
 * Framer Motion'ı optimize eden yardımcı fonksiyonlar
 * Bu dosya tüm motion işlemlerini merkezileştirir.
 */

import { HTMLMotionProps } from "framer-motion";

/**
 * Daha hafif animasyon varyantları - GPU hızlandırmalı
 */
export const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Performans için transition değerleri
 * GPU hızlandırmalı, daha az key frame ve daha düşük hassasiyet
 */
export const defaultTransition = {
  type: "tween", // "spring" yerine "tween" daha performanslı
  duration: 0.3,
  ease: "easeOut",
};

/**
 * Performans optimize edilmiş Motion HOC
 * Sadece transform ve opacity animasyonları kullanılır
 */
export interface MotionProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

/**
 * Yüksek performanslı motion-div - özellikle mobil için optimize edilmiş
 */
export const optimizedMotionConfig = {
  // Animasyonları devre dışı bırakma seçeneği - performans için
  reducedMotion: typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  
  // Daha az keyframe kullan
  frameThrottling: 10, // ms
  
  // GPU hızlandırma için
  willChange: true,
  
  // Lightweight varsayılan değerler
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: defaultTransition,
}; 