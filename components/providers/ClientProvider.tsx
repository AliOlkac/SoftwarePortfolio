"use client";

import dynamic from 'next/dynamic';

// 3D yıldızlı arkaplan bileşenini client tarafında yükle
// Performans için lazy loading kullanıyoruz
const StarBackground = dynamic(() => import('@/components/ui/StarBackground'), {
  ssr: false, // Server-side rendering'i devre dışı bırak (WebGL gerektiriyor)
  loading: () => <div className="fixed inset-0 -z-1 bg-background" />
});

/**
 * Client tarafında çalışan bileşenleri saran provider
 * Server component olan root layout'ta client-only özellikleri kullanmak için
 */
export default function ClientProvider() {
  return (
    <>
      <StarBackground />
    </>
  );
} 