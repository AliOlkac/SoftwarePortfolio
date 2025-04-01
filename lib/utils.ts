import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind sınıflarını birleştir
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Tarih formatı
 */
export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Scroll yumuşatma
 */
export function smoothScroll(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Intersection Observer hook'u için yardımcı fonksiyon
 */
export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  }

  return (node: HTMLElement | null) => {
    if (!node) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(node)
  }
}

/**
 * Debounce fonksiyonu - aynı fonksiyonu kısa süre içinde çok kez çağırmayı önler
 * Özellikle scrolling, resizing vb. yoğun işlemleri optimize etmek için
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T, 
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle fonksiyonu - bir fonksiyonu belirli aralıklarla çağırmayı sağlar
 * Animasyon performansını artırmak için
 */
export function throttle<T extends (arg: string) => void>(
  func: T,
  limit: number
): (arg: string) => void {
  let inThrottle = false;
  
  return function(arg: string) {
    if (!inThrottle) {
      func(arg);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Metin kısaltma
 */
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * URL'den slug oluşturma
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * İşlevi tarayıcı boşken çalıştırır
 * @param callback - Çalıştırılacak fonksiyon
 */
export function runWhenIdle(
  callback: () => void
): void {
  // requestIdleCallback desteği varsa bunu kullan, yoksa setTimeout
  setTimeout(callback, 1);
} 