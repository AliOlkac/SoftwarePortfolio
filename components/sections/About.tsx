'use client';

import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaUserAlt, 
  FaBriefcase, 
  FaFlask, 
  FaBrain
} from 'react-icons/fa';
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import GitHubContribution from '@/components/GitHubContribution';

// Helper function that dynamically gets and displays an icon
const DynamicIcon = ({ iconName, color }: { iconName: string; color: string }) => {
  const IconComponent = iconName.startsWith('Fa') 
    ? FaIcons[iconName as keyof typeof FaIcons] 
    : SiIcons[iconName as keyof typeof SiIcons];
  
  let className = "";
  
  switch(color) {
    case 'primary':
      className = "text-primary";
      break;
    case 'secondary':
      className = "text-secondary";
      break;
    case 'accent':
      className = "text-accent";
      break;
    case 'highlight':
      className = "text-highlight";
      break;
    default:
      className = "text-white";
  }
  
  return IconComponent ? <IconComponent className={className} /> : null;
};

// Technology card component
const TechItem = ({ name, iconName, color }: { name: string; iconName: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -8, 
      scale: 1.05,
      transition: { duration: 0.2 } 
    }}
    className="bg-background/30 border border-primary/10 rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 hover:border-primary/40 hover:shadow-neon-blue"
  >
    <div className="w-14 h-14 flex items-center justify-center mb-3 text-3xl transition-all duration-300 group-hover:scale-110">
      <DynamicIcon iconName={iconName} color={color} />
    </div>
    <span className="font-medium text-white text-sm md:text-base">{name}</span>
  </motion.div>
);

// Education data
const educationData = [
  {
    period: "2021 - 2025",
    title: "Computer Engineering",
    institution: "Balikesir University",
    description: "Bachelor's degree in Computer Engineering"
  },
  {
    period: "2017 - 2021",
    title: "High School Education",
    institution: "Simav Science High School",
    description: "Completed high school education at a Science High School."
  },
];

// Experience data
const experienceData = [
  {
    title: "Software Development",
    description: "Web (HTML, CSS, JavaScript, Next.js), Mobile (React Native), Game (Unity), Machine Learning",
    icon: <FaLaptopCode className="text-primary text-xl" />,
    color: "primary"
  },
  {
    title: "E-Commerce & Entrepreneurship",
    description: "E-commerce on Amazon (2.5 years), 3D printer manufacturing, Textile product sales",
    icon: <FaIcons.FaStore className="text-secondary text-xl" />,
    color: "secondary"
  },
  {
    title: "Finance & Technology",
    description: "Algorithmic Trading (1+ year), Automated trading systems in crypto markets",
    icon: <FaIcons.FaChartLine className="text-accent text-xl" />,
    color: "accent"
  },
  {
    title: "Internship Experiences",
    description: "2KEKGAMES (2023) - Algorithmic trading internship, ELI (2022) - Web design internship",
    icon: <FaBriefcase className="text-highlight text-xl" />,
    color: "highlight"
  }
];

// Areas of Interest
const interestsData = [
  "Artificial Intelligence and Machine Learning",
  "Web and Mobile Application Development",
  "Game Development",
  "Algorithmic Trading",
  "Entrepreneurship",
  "LLM Models and AI Agents"
];

// Skill categories
const skillCategories = [
  {
    title: "Web Technologies",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS","Spline","GSAP"]
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "C#"]
  },
  {
    title: "Data & AI",
    skills: ["TensorFlow", "scikit-learn","Numpy", "Pandas", "Data Analysis"]
  },
  {
    title: "Mobile & Game",
    skills: ["React Native", "Unity"]
  },
  {
    title: "DevOps & Database",
    skills: ["Git", "MongoDB", "MariaDB", "MySQL"]
  }
];

const About = () => {
  return (
    <section id="about" className="section py-20">
      <Container>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            <span className="text-gradient">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I&apos;m a full-stack developer who creates effective and innovative solutions using modern technologies. I&apos;m quickly advancing towards becoming a ninja developer.
          </p>
        </motion.div>

        {/* Personal Information and Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.2 } 
            }}
          >
            <Card className="h-full glass-effect border border-primary/20 transition-all duration-300 hover:border-primary hover:shadow-neon-blue">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg transition-all duration-300 group-hover:bg-primary/20">
                  <FaUserAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    Hello! I&apos;m Ali Olkaç. I&apos;m quickly advancing towards becoming a full-stack ninja developer. I specialize in modern web technologies, artificial intelligence, and finance technologies. I enjoy creating creative solutions to complex problems and developing innovative applications using the latest technologies. I&apos;m completing my computer engineering degree and have already gained various experiences in the industry.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Name</p>
                      <p className="font-medium text-white">Ali Olkaç</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Age</p>
                      <p className="font-medium text-white">22</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Interests</p>
                      <p className="font-medium text-white">Web Development, AI, Finance</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="font-medium text-white">Kütahya, Turkey</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.2 } 
            }}
          >
            <Card className="h-full glass-effect border border-secondary/20 transition-all duration-300 hover:border-secondary hover:shadow-neon-purple">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg transition-colors duration-300">
                  <FaGraduationCap className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Education</h3>
                  <div className="space-y-4">
                    {educationData.map((item, index) => (
                      <div key={index} className="border-l-2 border-secondary/50 pl-4 py-1">
                        <p className="text-secondary/80 text-sm">{item.period}</p>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400">{item.institution}</p>
                        <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Experience and Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 } 
            }}
          >
            <Card className="h-full glass-effect border border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-neon-pink">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg transition-colors duration-300">
                  <FaBriefcase className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent">Experience</h3>
                  <div className="space-y-6">
                    {experienceData.map((exp, index) => (
                      <motion.div 
                        key={index} 
                        className="flex gap-3"
                        whileHover={{ x: 5, transition: { duration: 0.1 } }}
                      >
                        <div className={`bg-${exp.color}/10 p-2 rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h4 className={`font-semibold text-${exp.color}`}>{exp.title}</h4>
                          <p className="text-gray-300 text-sm">{exp.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.2 } 
            }}
          >
            <Card className="h-full glass-effect border border-primary/20 transition-all duration-300 hover:border-primary hover:shadow-neon-blue">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg transition-colors duration-300">
                  <FaFlask className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Interests</h3>
                  <ul className="space-y-3">
                    {interestsData.map((interest, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-2"
                        whileHover={{ x: 5, transition: { duration: 0.1 } }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-gray-300">{interest}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Artificial Intelligence Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
          whileHover={{ 
            y: -8, 
            transition: { duration: 0.2 } 
          }}
        >
          <Card className="glass-effect border border-secondary/20 transition-all duration-300 hover:border-secondary hover:shadow-neon-purple">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-lg transition-colors duration-300">
                <FaBrain className="text-secondary text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Artificial Intelligence and Advanced Technologies</h3>
                <p className="text-gray-300">
                  In recent years, I&apos;ve been focusing on artificial intelligence, particularly LLM (Large Language Model) models and AI agents. I&apos;m researching how these technologies have transformed software development processes and actively using them in my projects.
                </p>
                <div className="mt-4 p-4 border border-secondary/20 rounded-lg bg-background/50 transition-all duration-300 hover:border-secondary/40 hover:bg-background/70">
                  <p className="text-gray-300 italic text-sm">
                    &ldquo;Technology is evolving rapidly. The development of LLM models and AI agents has transformed software development processes from coding to asking the right questions and managing projects effectively. In this new era, technical knowledge is becoming more valuable, but the ability to effectively use AI tools is even more valuable.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="p-8 glass-effect border border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-neon-pink">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-accent/10 p-3 rounded-lg transition-colors duration-300">
                <FaLaptopCode className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent">Skills & Technologies</h3>
                <p className="text-gray-300">
                  Technologies and areas I specialize in
                </p>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-4 border border-accent/10 transition-all duration-300 hover:border-accent/50 hover:shadow-neon-pink"
                  whileHover={{ 
                    y: -5, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <h4 className="text-lg font-semibold mb-3 text-accent text-center">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-300 text-center py-1 border-b border-accent/10 last:border-0 transition-colors duration-300 hover:text-white hover:scale-105">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Icons Grid */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-6 text-white text-center pb-2 border-b border-accent/20">Technologies I&apos;ve Used</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {/* Web Technologies */}
                <TechItem name="React" iconName="FaReact" color="primary" />
                <TechItem name="Next.js" iconName="SiNextdotjs" color="white" />
                <TechItem name="TypeScript" iconName="SiTypescript" color="primary" />
                <TechItem name="Tailwind CSS" iconName="SiTailwindcss" color="secondary" />
                <TechItem name="HTML/CSS" iconName="FaHtml5" color="primary" />
                <TechItem name="Spline" iconName="SiSpline" color="highlight" />
                <TechItem name="GSAP" iconName="SiGreensock" color="highlight" />
                
                {/* Programming Languages */}
                <TechItem name="JavaScript" iconName="SiJavascript" color="highlight" />
                <TechItem name="Python" iconName="FaPython" color="secondary" />
                <TechItem name="C#" iconName="SiCsharp" color="accent" />
                
                {/* Data & AI */}
                <TechItem name="TensorFlow" iconName="SiTensorflow" color="primary" />
                <TechItem name="scikit-learn" iconName="SiScikitlearn" color="accent" />
                <TechItem name="Numpy" iconName="SiNumpy" color="secondary" />
                <TechItem name="Pandas" iconName="SiPandas" color="primary" />
                <TechItem name="Data Analysis" iconName="FaChartBar" color="highlight" />
                
                {/* Mobile & Game */}
                <TechItem name="React Native" iconName="SiReact" color="highlight" />
                <TechItem name="Unity" iconName="SiUnity" color="white" />
                
                {/* DevOps & Database */}
                <TechItem name="Git" iconName="FaGitAlt" color="accent" />
                <TechItem name="MongoDB" iconName="SiMongodb" color="highlight" />
                <TechItem name="MariaDB" iconName="SiMariadb" color="secondary" />
                <TechItem name="MySQL" iconName="SiMysql" color="primary" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
          whileHover={{ 
            y: -8, 
            transition: { duration: 0.2 } 
          }}
        >
          <GitHubContribution />
        </motion.div>

        {/* Contact Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
          
        </motion.div>
      </Container>
    </section>
  );
};

export default About; 