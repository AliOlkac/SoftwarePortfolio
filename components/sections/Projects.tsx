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

// Projects - Created with information from Aboutme.md
const projects: Project[] = [
  {
    id: 1,
    title: "Algorithmic Trading Bots",
    description:
      "An automated trading bot used in cryptocurrency trading that analyzes market data using various technical indicators (such as RSI, MACD, Bollinger Bands) to automatically execute buy and sell transactions. Through Binance API integration, the bot monitors market data in real-time and executes trades according to predetermined strategies.",
    image: "/projects/algo-trading.jpg",
    tags: ["Python", "Trading", "Binance API"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 2,
    title: "AI Movie Recommendation Website",
    description: `A machine learning-based movie recommendation platform that analyzes users' movie preferences to find other users with similar tastes and provide movie recommendations from them. This system is based on the Collaborative Filtering technique.

Collaborative Filtering compares a user's liked movies with other users who liked the same movies, getting recommendations from people with similar taste profiles.

For example, if a user likes a certain genre of film, recommendations are taken from other users who watch similar genres and have similar preferences.

In this approach, similarity measurements are made using metrics such as "cosine similarity" based on users' past movie preferences.

This way, each user is presented with personalized movie recommendations that truly appeal to their tastes, not just the most popular movies in the system.`,
    image: "/projects/ai-movies.jpg",
    tags: ["Machine Learning", "Web Development", "Next.js"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 3,
    title: "Zombie-Themed Game (Game Jam)",
    description: `The zombie-themed game is a project we developed as a team during a Game Jam event. This game was created with creative solutions and rapid development techniques within a limited time frame. Its theme is based on the struggles of characters trying to survive after a zombie apocalypse. The game offers players an action-packed, exciting experience while also highlighting strategy and resource management.

Events like Game Jam are an excellent opportunity to develop rapid prototyping, teamwork, and creative thinking. In this project, I was actively involved in every stage from design to coding, and as a team we produced a successful result despite challenging time constraints.`,
    image: "/projects/zombie-game.jpg",
    tags: ["Unity", "C#", "Game Development"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 4,
    title: "OSGB Company Website",
    description:
      `A Corporate Website for an Occupational Health and Safety Company was designed and developed as a completely customized solution for a company's needs. This project aimed to effectively present the company's services, vision, and mission in the digital environment.

The website has a user-friendly interface and makes services, legal regulations, training programs, occupational safety reports, and other important content easily accessible. At the same time, attention was paid to important performance criteria such as responsive design, SEO optimization, and fast loading times using modern web technologies.

During the project process, user experience was prioritized, focusing on user-friendly navigation, content supported by visual elements, and mobile-compatible design. This site strengthens the company's digital presence, allowing it to present a reliable and professional image to its target audience.`,
    image: "/projects/osgb-website.jpg",
    tags: ["Web Development", "HTML/CSS", "JavaScript"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 5,
    title: "Amazon Affiliate Camera Recommendation Site",
    description:
      `The camera recommendation website I created to generate income through the Amazon Affiliate Partnership Program offers users comprehensive reviews and recommendations about various camera models. The website aims to generate income when visitors purchase recommended products, using Amazon's affiliate program.

The site aims to help visitors choose the right camera with comprehensive product reviews, user comments, and comparisons. Detailed features, advantages, and usage areas for each camera have been emphasized, guiding visitors to make an informed decision.

Through affiliate links, income is generated as the site owner when users purchase products directly through Amazon. This process allows for the creation of a sustainable income model through continuously updated content and products.`,
    image: "/projects/amazon-affiliate.jpg",
    tags: ["Web Development", "Affiliate Marketing", "Next.js"],
    link: "https://github.com/AliOlkac",
  }
];

// Project card component
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  return (
    <motion.div
      className="relative w-full h-[480px] rounded-lg overflow-hidden glass-effect cursor-pointer group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
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
        <button
          className="self-start py-1.5 px-4 bg-highlight/20 text-highlight border border-highlight/40 rounded-md hover:bg-highlight/30 transition-colors duration-300 text-sm font-medium"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          More Information
        </button>
      </div>
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
