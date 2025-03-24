'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/constants';
import { FaGraduationCap, FaLaptopCode, FaUserAlt } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

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
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary">
              Hakkımda
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bilgisayar mühendisliği öğrencisi olarak, modern web teknolojileri ve yazılım geliştirme konularında tutkuluyum.
          </p>
        </motion.div>

        {/* Ana İçerik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol Bölüm - Kişisel Bilgiler */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaUserAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Kişisel Bilgiler</h3>
                  <p className="text-gray-300 mb-4">
                    Merhaba! Ben Ali Olkaç. Bilgisayar mühendisliği son sınıf öğrencisiyim ve 
                    web geliştirme alanında çalışmalar yapıyorum. Modern teknolojiler kullanarak 
                    kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Ad</p>
                      <p className="font-medium">Ali Olkaç</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Yaş</p>
                      <p className="font-medium">22</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">İlgi Alanları</p>
                      <p className="font-medium">Web Geliştirme, UI/UX</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Konum</p>
                      <p className="font-medium">İstanbul, Türkiye</p>
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
          >
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Eğitim</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pl-4 py-1">
                      <p className="text-primary/80 text-sm">2020 - Günümüz</p>
                      <h4 className="font-semibold">Bilgisayar Mühendisliği</h4>
                      <p className="text-gray-400">İstanbul Teknik Üniversitesi</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-4 py-1">
                      <p className="text-primary/80 text-sm">2016 - 2020</p>
                      <h4 className="font-semibold">Lise Eğitimi</h4>
                      <p className="text-gray-400">XYZ Anadolu Lisesi</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Sertifikalar</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Web Developer Bootcamp</li>
                        <li>React JS Advanced Concepts</li>
                        <li>UI/UX Design Fundamentals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Yetenekler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <FaLaptopCode className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Yetenekler & Teknolojiler</h3>
                <p className="text-gray-300">
                  Projelerimde kullandığım teknolojiler ve uzmanlaştığım alanlar
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-primary/5 border border-primary/10 rounded-lg p-4 flex flex-col items-center text-center hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3">
                    {/* Burada teknolojiyi temsil eden bir ikon olacak */}
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default About; 