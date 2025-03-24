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

// Dinamik olarak icon alıp görüntüleyen yardımcı fonksiyon
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

// Teknoloji kartı bileşeni
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
    <div className="w-12 h-12 flex items-center justify-center mb-3 text-2xl">
      <DynamicIcon iconName={iconName} color={color} />
    </div>
    <span className="font-medium text-white">{name}</span>
  </motion.div>
);

// Eğitim verileri
const educationData = [
  {
    period: "2020 - Günümüz",
    title: "Bilgisayar Mühendisliği Lisans",
    institution: "İstanbul Teknik Üniversitesi",
    description: "Bilgisayar mühendisliği bölümünde lisans eğitimi"
  },
  {
    period: "2016 - 2020",
    title: "Lise Eğitimi",
    institution: "Simav Fen Lisesi",
    description: "Fen lisesinde yoğun matematik ve fen eğitimi"
  },
];

// Deneyim verileri
const experienceData = [
  {
    title: "Yazılım Geliştirme",
    description: "Web (HTML, CSS, JavaScript, Next.js), Mobil (React Native), Oyun (Unity), Makine Öğrenimi",
    icon: <FaLaptopCode className="text-primary text-xl" />,
    color: "primary"
  },
  {
    title: "E-Ticaret & Girişimcilik",
    description: "Amazon'da E-ticaret (2.5 yıl), 3D yazıcı ile üretim, Tekstil ürünleri satışı",
    icon: <FaIcons.FaStore className="text-secondary text-xl" />,
    color: "secondary"
  },
  {
    title: "Finans & Teknoloji",
    description: "Algoritmik Trading (1+ yıl), Kripto piyasasında otomatik ticaret sistemleri",
    icon: <FaIcons.FaChartLine className="text-accent text-xl" />,
    color: "accent"
  },
  {
    title: "Staj Deneyimleri",
    description: "2KEKGAMES (2023) - Algoritmik trading stajı, ELI (2022) - Web tasarımı stajı",
    icon: <FaBriefcase className="text-highlight text-xl" />,
    color: "highlight"
  }
];

// İlgi Alanları
const interestsData = [
  "Yapay Zeka ve Makine Öğrenimi",
  "Web ve Mobil Uygulama Geliştirme",
  "Oyun Geliştirme",
  "Algoritmik Trading",
  "Girişimcilik",
  "LLM Modelleri ve AI Ajanlar"
];

// Beceri kategorileri
const skillCategories = [
  {
    title: "Web Teknolojileri",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
  },
  {
    title: "Programlama Dilleri",
    skills: ["JavaScript", "Python", "C#"]
  },
  {
    title: "Veri & AI",
    skills: ["TensorFlow", "scikit-learn", "Veri Analizi"]
  },
  {
    title: "Mobil & Oyun",
    skills: ["React Native", "Unity"]
  },
  {
    title: "DevOps & Araçlar",
    skills: ["Git", "Docker", "MongoDB", "Firebase", "GraphQL"]
  }
];

const About = () => {
  return (
    <section id="about" className="section py-20">
      <Container>
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            <span className="text-gradient">
              Hakkımda
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Full-stack geliştirici olarak modern teknolojileri kullanarak etkili ve yenilikçi çözümler üretiyorum. Ninja yazılımcı olmak yolunda hızla ilerliyorum.
          </p>
        </motion.div>

        {/* Kişisel Bilgiler ve Eğitim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Sol Bölüm - Kişisel Bilgiler */}
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
                  <h3 className="text-xl font-bold mb-3 text-primary">Kişisel Bilgiler</h3>
                  <p className="text-gray-300 mb-4">
                    Merhaba! Ben Ali Olkaç. Yazılım dünyasında full-stack ninja geliştirici olma yolunda hızla ilerliyorum. Modern web teknolojileri, yapay zeka ve finans teknolojileri alanlarında uzmanlaşıyorum. Karmaşık problemlere yaratıcı çözümler üretmeyi ve her projede en son teknolojileri kullanarak yenilikçi uygulamalar geliştirmeyi seviyorum. Bilgisayar mühendisliği eğitimimi tamamlamak üzereyim ve şimdiden sektörde çeşitli deneyimler kazandım.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Ad</p>
                      <p className="font-medium text-white">Ali Olkaç</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Yaş</p>
                      <p className="font-medium text-white">22</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">İlgi Alanları</p>
                      <p className="font-medium text-white">Web Geliştirme, AI, Finans</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Konum</p>
                      <p className="font-medium text-white">Kütahya, Türkiye</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sağ Bölüm - Eğitim */}
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
                  <h3 className="text-xl font-bold mb-3 text-secondary">Eğitim</h3>
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

        {/* Deneyim ve İlgi Alanları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Deneyim */}
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
                  <h3 className="text-xl font-bold mb-4 text-accent">Deneyim</h3>
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

          {/* İlgi Alanları */}
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
                  <h3 className="text-xl font-bold mb-3 text-primary">İlgi Alanları</h3>
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

        {/* Yapay Zeka Açıklaması */}
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
                <h3 className="text-xl font-bold mb-3 text-secondary">Yapay Zeka ve İleri Teknolojiler</h3>
                <p className="text-gray-300">
                  Son zamanlarda yapay zeka alanında, özellikle LLM (Large Language Model) modelleri ve AI ajanlar üzerine yoğun araştırmalar yapıyorum. Bu teknolojilerin yazılım geliştirme süreçlerini nasıl dönüştürdüğünü inceliyor ve kendi projelerimde aktif olarak kullanıyorum.
                </p>
                <div className="mt-4 p-4 border border-secondary/20 rounded-lg bg-background/50 transition-all duration-300 hover:border-secondary/40 hover:bg-background/70">
                  <p className="text-gray-300 italic text-sm">
                    &ldquo;Günümüzde teknoloji hızla evrim geçiriyor. LLM modelleri ve AI ajanların gelişimiyle, yazılım geliştirme süreci artık kod yazmaktan ziyade, doğru soruları sormaya ve projeyi etkin bir şekilde yönetmeye dönüşüyor. Bu yeni dönemde, teknik bilginin yanı sıra, yapay zeka araçlarını etkili kullanabilme becerisi çok daha değerli hale geliyor.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Yetenekler & Teknolojiler */}
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
                <h3 className="text-xl font-bold text-accent">Yetenekler & Teknolojiler</h3>
                <p className="text-gray-300">
                  Projelerimde kullandığım teknolojiler ve uzmanlaştığım alanlar
                </p>
              </div>
            </div>

            {/* Beceri Kategorileri */}
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
                      <li key={idx} className="text-gray-300 text-center py-1 border-b border-accent/10 last:border-0 transition-colors duration-300 hover:text-white">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-4">
              {/* Web Teknolojileri */}
              <TechItem name="React" iconName="FaReact" color="primary" />
              <TechItem name="Next.js" iconName="SiNextdotjs" color="white" />
              <TechItem name="TypeScript" iconName="SiTypescript" color="primary" />
              <TechItem name="Tailwind CSS" iconName="SiTailwindcss" color="secondary" />
              
              {/* Programlama Dilleri */}
              <TechItem name="JavaScript" iconName="SiJavascript" color="highlight" />
              <TechItem name="Python" iconName="FaPython" color="secondary" />
              <TechItem name="C#" iconName="SiCsharp" color="accent" />
              
              {/* Veri & AI */}
              <TechItem name="TensorFlow" iconName="SiTensorflow" color="primary" />
              <TechItem name="scikit-learn" iconName="SiScikit" color="accent" />
              
              {/* Mobil & Oyun */}
              <TechItem name="React Native" iconName="SiReact" color="highlight" />
              <TechItem name="Unity" iconName="SiUnity" color="white" />
              
              {/* DevOps & Araçlar */}
              <TechItem name="Git" iconName="FaGitAlt" color="accent" />
              <TechItem name="Docker" iconName="FaDocker" color="primary" />
              <TechItem name="MongoDB" iconName="SiMongodb" color="highlight" />
              <TechItem name="Firebase" iconName="SiFirebase" color="accent" />
              <TechItem name="GraphQL" iconName="SiGraphql" color="secondary" />
              <TechItem name="HTML/CSS" iconName="FaHtml5" color="primary" />
            </div>
          </Card>
        </motion.div>

        {/* İletişim Bağlantısı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6">
            Projeleriniz için iş birliği yapmak veya sorularınız için benimle iletişime geçebilirsiniz.
          </p>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-md font-medium text-white bg-primary/10 border border-primary/50 hover:bg-primary/20 hover:shadow-neon-blue transition-all duration-300 inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaIcons.FaEnvelope className="mr-2" /> İletişime Geç
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default About; 