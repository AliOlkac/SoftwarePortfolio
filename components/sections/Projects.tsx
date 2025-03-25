'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProjectModal from '../ProjectModal';

// Proje tipi tanımlaması
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Projeler - Aboutme.md dosyasından alınan bilgilerle oluşturulmuştur
const projects: Project[] = [
  {
    id: 1,
    title: 'Algoritmik Trade Botları',
    description: 'Kripto para piyasalarında çeşitli indikatörleri (RSI, MACD, Bollinger Bantları vb.) kullanarak otomatik alım-satım yapan, Python tabanlı trading botları. Binance API entegrasyonu ile gerçek zamanlı işlem yapabilme özelliği.',
    image: '/projects/algo-trading.jpg',
    tags: ['Python', 'Trading', 'Binance API'],
    link: 'https://github.com/AliOlkac',
  },
  {
    id: 2,
    title: 'Yapay Zeka Film Öneri Web Sitesi',
    description: 'Makine öğrenimi kullanarak kişiselleştirilmiş film önerileri sunan bir platform.',
    image: '/projects/ai-movies.jpg',
    tags: ['Machine Learning', 'Web Development', 'Next.js'],
    link: 'https://github.com/AliOlkac',
  },
  {
    id: 3,
    title: 'Zombi Temalı Oyun (Game Jam)',
    description: 'Ekip arkadaşlarımla birlikte Game Jam etkinliğinde geliştirdiğim zombi temalı oyun.',
    image: '/projects/zombie-game.jpg',
    tags: ['Unity', 'C#', 'Game Development'],
    link: 'https://github.com/AliOlkac',
  },
  {
    id: 4,
    title: 'OSGB Şirketi Web Sitesi',
    description: 'Bir iş sağlığı ve güvenliği şirketi için tasarladığım ve geliştirdiğim kurumsal web sitesi.',
    image: '/projects/osgb-website.jpg',
    tags: ['Web Development', 'HTML/CSS', 'JavaScript'],
    link: 'https://github.com/AliOlkac',
  },
  {
    id: 5,
    title: 'Amazon Affiliate Kamera Öneri Sitesi',
    description: 'Amazon ortaklık programı kapsamında gelir elde etmek için oluşturduğum kamera önerileri içeren web sitesi.',
    image: '/projects/amazon-affiliate.jpg',
    tags: ['Web Development', 'Affiliate Marketing', 'Next.js'],
    link: 'https://github.com/AliOlkac',
  },
  {
    id: 6,
    title: 'Ses Analizi ile Hastalık Tespiti',
    description: 'Üniversitede hocalar ve doktorlarla birlikte ses analizi kullanarak hastalık tespiti yapabilen bir mobil uygulama projesi.',
    image: '/projects/sound-analysis.jpg',
    tags: ['Mobile Development', 'Machine Learning', 'React Native'],
    link: 'https://github.com/AliOlkac',
  }
];

// Proje kartı bileşeni
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div 
      className="flip-card w-full h-[320px] cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Ön yüz */}
        <div className="flip-card-front absolute w-full h-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="z-0 brightness-[0.25]"
            />
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span key={index} className="text-xs px-2 py-1 bg-primary/20 text-highlight rounded-full border border-highlight/40">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white neon-text">{project.title}</h3>
            </div>
            <div className="absolute inset-0 border-2 border-highlight/40 rounded-lg z-20 glow-border"></div>
          </div>
        </div>
        
        {/* Arka yüz */}
        <div className="flip-card-back absolute w-full h-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden glass-effect">
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-highlight mb-4">{project.title}</h3>
                <p className="text-sm text-white/90">{project.description}</p>
              </div>
              <button 
                className="mt-4 self-center py-2 px-4 bg-highlight/20 text-highlight border border-highlight/50 rounded-md hover:bg-highlight/30 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                Daha Fazla Bilgi
              </button>
            </div>
            <div className="absolute inset-0 border-2 border-highlight/40 rounded-lg z-20 glow-border"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const closeModal = () => {
    setSelectedProject(null);
  };
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Projelerim</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Geliştirdiğim çeşitli projeler ile yazılım dünyasındaki deneyimlerimi keşfedin.
            Hover yaparak projelerin detaylarını görebilirsiniz.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects; 