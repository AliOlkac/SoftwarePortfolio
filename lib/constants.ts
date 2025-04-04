// Site information
export const siteConfig = {
  name: 'Ali Olkaç',
  siteName: 'Ali Olkaç',
  title: 'Computer Engineering Student & Full-Stack Developer',
  description: 'I develop user-friendly and high-performance applications with modern web technologies.',
  url: 'https://aliolkac.com',
  ogImage: 'https://aliolkac.com/og.jpg',
  links: {
    github: 'https://github.com/aliolkac',
    linkedin: 'https://linkedin.com/in/aliolkac',
    email: 'mailto:aliolkac43@gmail.com',
  },
  socialLinks: {
    github: 'https://github.com/aliolkac',
    twitter: 'https://twitter.com/aliolkac',
    linkedin: 'https://linkedin.com/in/aliolkac',
  },
  email: 'aliolkac43@gmail.com'
}

// Navigation links
export const navLinks = [
  { title: 'Home', path: '/', name: 'Home', href: '/' },
  { title: 'Projects & Certificates', path: '/projects', name: 'Projects & Certificates', href: '/projects' },
  { title: 'CV', path: '/cv', name: 'CV', href: '/cv' },
  { title: 'Contact', path: '/contact', name: 'Contact', href: '/contact' },
]

// Technology stack - we'll display the related icon using iconName in the React component
export const techStack = [
  { name: 'React', iconName: 'FaReact', color: 'primary' },
  { name: 'Next.js', iconName: 'SiNextdotjs', color: 'white' },
  { name: 'TypeScript', iconName: 'SiTypescript', color: 'primary' },
  { name: 'Tailwind CSS', iconName: 'SiTailwindcss', color: 'secondary' },
  { name: 'Node.js', iconName: 'FaNodeJs', color: 'highlight' },
  { name: 'Python', iconName: 'FaPython', color: 'secondary' },
  { name: 'MongoDB', iconName: 'SiMongodb', color: 'highlight' },
  { name: 'Firebase', iconName: 'SiFirebase', color: 'accent' },
  { name: 'Git', iconName: 'FaGitAlt', color: 'accent' },
  { name: 'Docker', iconName: 'FaDocker', color: 'primary' },
  { name: 'AWS', iconName: 'FaAws', color: 'secondary' },
  { name: 'GraphQL', iconName: 'SiGraphql', color: 'accent' },
]

// Projects
export const projects = [
  {
    title: 'Project 1',
    description: 'Project description will go here.',
    technologies: ['React', 'Next.js', 'TypeScript'],
    image: '/images/project1.jpg',
    github: 'https://github.com/aliolkac/project1',
    demo: 'https://project1.aliolkac.com',
  },
  // Other projects will be added here
]

// Animation variants
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} 