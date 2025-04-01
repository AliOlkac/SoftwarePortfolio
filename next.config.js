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

  // CSS ve Turbopack optimizasyonları
  experimental: {
    // CSS optimizasyonu
    optimizeCss: true,
    
    // Turbopack yapılandırması
    turbo: {
      // Module ID stratejisi - üretimde tutarlı modül ID'leri için
      moduleIdStrategy: 'deterministic',
      
      // Uzantı çözümlemeleri
      resolveExtensions: [
        '.tsx', 
        '.ts', 
        '.jsx', 
        '.js', 
        '.mjs', 
        '.json',
        '.css',
        '.scss',
        '.sass'
      ],
    },
    
    // Paket optimizasyonları - sadece kullandığınız modülleri yükler
    optimizePackageImports: [
      // Kullandığınız büyük kütüphaneleri buraya ekleyin
      // Örneğin: '@mui/material', '@mui/icons-material', 'lodash-es' vb.
    ],
    
    // Daha hızlı bağımlılık izleme için turbotrace
    turbotrace: {
      logLevel: 'error',
      logDetail: false,
      memoryLimit: 6000, // MB cinsinden maksimum bellek kullanımı
    },
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
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? bundleAnalyzer({})
  : (config) => config;

export default withBundleAnalyzer(nextConfig); 