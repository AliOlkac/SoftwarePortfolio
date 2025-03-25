"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sertifika tipi tanımlaması
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdfFile: string;
}

// Sertifikalar
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Web Geliştirme Bootcamp",
    issuer: "Udemy",
    date: "2023",
    image: "/certificates/UdemyWebGelistirme_page-0001.jpg",
    pdfFile: "/certificates/UdemyWebGelistirme.pdf",
  },
  {
    id: 2,
    title: "Meta React Basics",
    issuer: "Coursera",
    date: "2023",
    image: "/certificates/MetaReactBasic.jpg",
    pdfFile: "/certificates/MetaReactBasic.pdf",
  },
  {
    id: 3,
    title: "Machine Learning Specialisation",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/MachineLearningSpeacialisation.jpg",
    pdfFile: "/certificates/MachineLearningSpeacialisation.pdf",
  },
  {
    id: 4,
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/NeuralNetworksAndDeepLearning.jpg",
    pdfFile: "/certificates/NeuralNetworksAndDeepLearning.pdf",
  },
  {
    id: 5,
    title: "Supervised Machine Learning",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/SupervisedMachineLearning.jpg",
    pdfFile: "/certificates/SupervisedMachineLearning.pdf",
  },
  {
    id: 6,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/AdvancedLearningAlgorithms.jpg",
    pdfFile: "/certificates/AdvancedLearningAlgorithms.pdf",
  },
  {
    id: 7,
    title: "Unsupervised Learning & Recommenders",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/UnsupervisedLearningRecommenders.jpg",
    pdfFile: "/certificates/UnsupervisedLearningRecommenders.pdf",
  },
];

// Sertifika kartı bileşeni
const CertificateCard: React.FC<{ certificate: Certificate }> = ({
  certificate,
}) => {
  return (
    <motion.div
      className="relative w-full h-[380px] rounded-lg overflow-hidden glass-effect cursor-pointer group certificate-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: certificate.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full h-[65%] bg-black/40">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            style={{ objectFit: "contain" }}
            className="z-0 brightness-[0.9] p-2 transition-all duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Hover efekti ile görünür olan PDF indirme butonu */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <a 
            href={certificate.pdfFile}
            download
            className="pdf-download-button py-2 px-4 bg-highlight/20 text-highlight border border-highlight/40 rounded-md hover:bg-highlight/40 transition-all duration-300 flex items-center space-x-2 opacity-0 transform translate-y-4 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>PDF İndir</span>
          </a>
        </div>
      </div>
      <div className="p-5 h-[35%] flex flex-col justify-between bg-background/90 transition-all duration-300 group-hover:bg-background/80 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors duration-300 mb-1">
            {certificate.title}
          </h3>
          <p className="text-sm text-gray-300 group-hover:text-white/90 transition-colors duration-300">
            {certificate.issuer}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400">{certificate.date}</p>
          <span className="text-xs px-2 py-1 bg-highlight/20 text-highlight rounded-full border border-highlight/40 group-hover:bg-highlight/30 group-hover:border-highlight/70 transition-all duration-300">
            Sertifika
          </span>
        </div>
      </div>
      <div className="absolute inset-0 border border-highlight/20 rounded-lg z-30 group-hover:border-highlight/60 group-hover:shadow-neon-green transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-highlight">Sertifikalarım</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Tamamladığım kurslar ve kazandığım sertifikalar ile sürekli kendimi geliştiriyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 