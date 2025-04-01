/** @type {import('next').NextConfig} */
const nextConfig = {
  // Görsel optimizasyonu için
  images: {
    domains: [], // Eğer harici görseller kullanılıyorsa domain ekleyebilirsiniz
    formats: ['image/webp'], // WebP formatı öncelikli
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive görüntü boyutları
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Görüntü boyutları
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 hafta önbellek
  },

  // CSS optimizasyonu için
  experimental: {
    // CSS optimizasyonu
    optimizeCss: true,
  },

  // Script optimizasyonları
  compiler: {
    // Production'da console.log ifadelerini kaldır
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Webpack yapılandırması
  webpack: (config, { dev, isServer }) => {
    // Production only
    if (!dev && !isServer) {
      // Kullanılmayan modülleri kaldır
      config.optimization.usedExports = true;
      
      // Tree Shaking
      config.optimization.sideEffects = true;
      
      // Chunk boyutlarını azalt
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        }
      };
    }
    return config;
  },

  // Üretim yapılandırması
  productionBrowserSourceMaps: false, // Üretimde kaynak haritalarını devre dışı bırak (daha hızlı yükleme)
  compress: true, // Gzip sıkıştırması aktif
  poweredByHeader: false, // X-Powered-By başlığını kaldır (güvenlik ve performans)
}

// Bundle analyzer için tek satırlık çözüm
const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({})
  : (config) => config;

module.exports = withBundleAnalyzer(nextConfig); 