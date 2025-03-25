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
  credential: string;
}

// Sertifikalar (örnek veri - gerçek sertifikalarınızla değiştirin)
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Web Geliştirme Bootcamp",
    issuer: "Udemy",
    date: "2023",
    image: "/certificates/UdemyWebGelistirme_page-0001.jpg",
    credential: "https://udemy.com/certificate/123456",
  },
  {
    id: 2,
    title: "Meta React Basics",
    issuer: "Coursera",
    date: "2023",
    image: "/certificates/MetaReactBasic.jpg",
    credential: "https://coursera.org/verify/123456",
  },
  {
    id: 3,
    title: "Machine Learning Specialisation",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/MachineLearningSpeacialisation.jpg",
    credential: "https://deeplearning.ai/certificate/123456",
  },
  {
    id: 4,
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/NeuralNetworksAndDeepLearning.jpg",
    credential: "https://deeplearning.ai/verify/123456",
  },
  {
    id: 5,
    title: "Supervised Machine Learning",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/SupervisedMachineLearning.jpg",
    credential: "https://deeplearning.ai/certificate/123456",
  },
  {
    id: 6,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/AdvancedLearningAlgorithms.jpg",
    credential: "https://deeplearning.ai/certificate/123456",
  },
  {
    id: 7,
    title: "Unsupervised Learning & Recommenders",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/certificates/UnsupervisedLearningRecommenders.jpg",
    credential: "https://deeplearning.ai/certificate/123456",
  },
];

// Sertifika kartı bileşeni
const CertificateCard: React.FC<{ certificate: Certificate }> = ({
  certificate,
}) => {
  return (
    <motion.div
      className="relative w-full h-[280px] rounded-lg overflow-hidden glass-effect cursor-pointer group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: certificate.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={() => window.open(certificate.credential, "_blank")}
    >
      <div className="relative w-full h-full bg-black/40">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            style={{ objectFit: "contain" }}
            className="z-0 brightness-[0.9] p-2 transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between bg-gradient-to-t from-background/90 via-background/60 to-transparent transition-all duration-300 group-hover:from-primary/30 group-hover:via-background/40">
          <div className="mt-auto">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {certificate.title}
            </h3>
            <p className="text-sm text-gray-300 mt-1 group-hover:text-white/90 transition-colors duration-300">
              {certificate.issuer}
            </p>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-xs text-gray-400">{certificate.date}</p>
            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/70 transition-all duration-300">
              Sertifika
            </span>
          </div>
        </div>
        <div className="absolute inset-0 border border-highlight/20 rounded-lg z-20 group-hover:border-primary/60 group-hover:shadow-neon-blue transition-all duration-300"></div>
      </div>
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
          <h2 className="text-4xl font-bold mb-4 neon-text">Sertifikalarım</h2>
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