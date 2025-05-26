"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "../ProjectModal";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Projects - İngilizce açıklamalar ve yeni yapı
const projects: Project[] = [
  {
    id: 1,
    title: "AI Movie Recommendation Website",
    description: `A machine learning-based movie recommendation platform that analyzes users' viewing habits and preferences to find similar users and provide personalized movie suggestions. Using collaborative filtering and cosine similarity, the system delivers recommendations that truly match each user's taste, not just the most popular titles. Built with Next.js for a fast, modern, and user-friendly experience.`,
    image: "/projects/movies-ai.png",
    tags: ["Machine Learning", "Web Development", "Next.js"],
    link: "https://www.movierecommendation.online",
  },
  {
    id: 2,
    title: "Zombie-Themed Game (Game Jam)",
    description: `Developed in a fast-paced Game Jam event, this zombie-themed game challenges players to survive in a post-apocalyptic world. Combining action, strategy, and resource management, the game was built with Unity and C# under strict time constraints. It highlights teamwork, rapid prototyping, and creative problem-solving.`,
    image: "/projects/zombie-game.jpg",
    tags: ["Unity", "C#", "Game Development"],
    link: "https://github.com/AliOlkac/Timelock-Dead-Zone",
  },
  {
    id: 3,
    title: "OSGB Company Website",
    description: `A fully customized corporate website for an occupational health and safety company. Designed to present services, vision, and mission effectively online, the site features a user-friendly interface, mobile compatibility, SEO optimization, and fast loading times. Built with modern web technologies, it prioritizes accessibility and user experience.`,
    image: "/projects/osgb-website.jpg",
    tags: ["Web Development", "HTML/CSS", "JavaScript"],
    link: "https://www.kaliteosgb.com.tr",
  },
  {
    id: 4,
    title: "Amazon Affiliate Camera Recommendation Site",
    description: `A camera review and recommendation site created to generate income through the Amazon Affiliate Program. Users can find detailed product reviews, comparisons, and user feedback to help them choose the best camera. The site is built with Next.js, optimized for SEO and performance, and features a sustainable affiliate income model.`,
    image: "/projects/amazon-affiliate.jpg",
    tags: ["Web Development", "Affiliate Marketing", "Next.js"],
    link: "https://www.bestcamerareview.com",
  },
  {
    id: 5,
    title: "Algorithmic Trading Bots",
    description: `An automated trading bot for cryptocurrency markets that analyzes real-time data using technical indicators (RSI, MACD, Bollinger Bands) and executes trades based on predefined strategies. Integrated with the Binance API for live data and fast execution. Developed in Python, this project demonstrates the power of algorithmic trading and financial automation.`,
    image: "/projects/algo-trading.jpg",
    tags: ["Python", "Trading", "Binance API"],
    link: "https://github.com/AliOlkac",
  }
];

// Project card component
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  // Kartın onClick'inde, tıklanan elementin buton veya içindeki bir element olup olmadığını kontrol ediyoruz
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Eğer tıklanan element bir buton veya butonun içindeki bir elementatse, kartın onClick'i tetiklenmesin
    const target = e.target as HTMLElement;
    if (
      target.closest('a.visit-website-btn') // butonun kendisi veya içindeki ikon vs.
    ) {
      return;
    }
    onClick();
  };

  return (
    // Kartın tamamı tıklanabilir, ancak butonun olayları izole edildi
    <motion.div
      className="relative w-full h-[480px] rounded-lg overflow-hidden glass-effect cursor-pointer group transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
    >
      {/* Proje görseli */}
      <div className="relative w-full h-[65%] bg-black/40">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className="z-0 brightness-[0.9] transition-all duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      {/* Proje başlık, etiketler ve buton */}
      <div className="p-5 h-[35%] flex flex-col justify-between bg-background/90 transition-all duration-300 group-hover:bg-background/80">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-highlight/20 text-highlight rounded-full border border-highlight/40 group-hover:bg-highlight/30 group-hover:border-highlight/70 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors duration-300 mb-2">
            {project.title}
          </h3>
        </div>

      </div>
      {/* Kartın kenarındaki hover efekti */}
      <div className="absolute inset-0 border border-highlight/20 rounded-lg z-20 group-hover:border-highlight/60 group-hover:shadow-neon-green transition-all duration-300"></div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-highlight">My Projects</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore my software development experiences through my main projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
