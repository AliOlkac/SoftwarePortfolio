// Site bilgileri
export const siteConfig = {
  name: 'Ali Olkaç',
  title: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
  description: 'Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.',
  url: 'https://aliolkac.com',
  ogImage: 'https://aliolkac.com/og.jpg',
  links: {
    github: 'https://github.com/aliolkac',
    linkedin: 'https://linkedin.com/in/aliolkac',
    email: 'mailto:aliolkac@gmail.com',
  },
}

// Navigasyon linkleri
export const navLinks = [
  { name: 'Hakkımda', href: '#about' },
  { name: 'Projeler', href: '#projects' },
  { name: 'CV', href: '#cv' },
  { name: 'İletişim', href: '#contact' },
]

// Teknoloji stack'i
export const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
]

// Projeler
export const projects = [
  {
    title: 'Proje 1',
    description: 'Proje açıklaması buraya gelecek.',
    technologies: ['React', 'Next.js', 'TypeScript'],
    image: '/images/project1.jpg',
    github: 'https://github.com/aliolkac/project1',
    demo: 'https://project1.aliolkac.com',
  },
  // Diğer projeler buraya eklenecek
]

// Animasyon varyantları
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

// Sayfa geçiş animasyonları
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} 