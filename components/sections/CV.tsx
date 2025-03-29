'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaEye } from 'react-icons/fa';

const CV = () => {
  // CV PDF'inin yolu
  const cvPdfPath = '/cv/AliOlkac_CV.pdf';
  // CV görsel önizleme resimlerinin yolları (birden fazla sayfa için)
  const cvPreviewImages = ['/cv/cv-preview.png'];

  return (
    <section id="cv" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Özgeçmişim</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Eğitim ve deneyimlerime dair detaylı bilgileri içeren özgeçmişimi inceleyebilir ve PDF olarak indirebilirsiniz.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-6xl mx-auto">
          {/* CV Önizleme Bölümü */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gray-900/50 glass-effect rounded-lg p-4 border-3 border-highlight/40 glow-border">
              <div className="grid gap-4">
                {cvPreviewImages.map((image, index) => (
                  <div key={index} className="relative aspect-[1/1.414] w-full shadow-lg">
                    <Image
                      src={image}
                      alt={`CV Sayfası ${index + 1}`}
                      fill
                      className="object-contain rounded"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              
              {/* Önizleme Büyütme Butonu */}
              <Link 
                href={cvPreviewImages[0]} 
                target="_blank" 
                className="absolute top-6 right-6 p-3 bg-black/40 rounded-full text-highlight hover:bg-highlight/20 transition-colors duration-300"
                aria-label="CV'yi tam boyutta görüntüle"
              >
                <FaEye size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Sağ Taraf - Bilgiler ve İndirme Butonu */}
          <motion.div 
            className="w-full lg:w-1/3 glass-effect rounded-lg p-6 border-3 border-highlight/40 glow-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-highlight">Ali Olkaç</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Eğitim</h4>
                <p className="text-white/90">Balıkesir Üniversitesi, Bilgisayar Mühendisliği</p>
                <p className="text-white/70 text-sm">2021 - 2025</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Deneyim</h4>
                <div className="mb-3">
                  <p className="text-white/90">2KEKGAMES - Stajyer</p>
                  <p className="text-white/70 text-sm">2023</p>
                  <p className="text-white/80 text-sm">Algoritmik trading üzerine staj deneyimi</p>
                </div>
                <div>
                  <p className="text-white/90">ELI (Ege Linyit İşletmeleri) - Stajyer</p>
                  <p className="text-white/70 text-sm">2022</p>
                  <p className="text-white/80 text-sm">Web sitesi tasarımı üzerine staj deneyimi</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Beceriler</h4>
                <ul className="text-white/90 grid grid-cols-2 gap-2">
                  <li>JavaScript/TypeScript</li>
                  <li>React/Next.js</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>Node.js</li>
                  <li>Unity</li>
                </ul>
              </div>
              
              {/* İndirme Butonu */}
              <Link
                href={cvPdfPath}
                download="AliOlkac_CV.pdf"
                className="mt-8 w-full py-3 px-6 flex items-center justify-center bg-highlight/20 hover:bg-highlight/30 text-highlight border border-highlight/60 rounded-lg transition-colors duration-300 neon-button"
              >
                <FaDownload className="mr-2" /> CV'yi İndir (PDF)
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV; 