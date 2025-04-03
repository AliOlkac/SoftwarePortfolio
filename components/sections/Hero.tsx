"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { throttle } from "@/lib/utils";

// Performans için scroll fonksiyonu
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    requestAnimationFrame(() => {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    });
  }
};

// Throttled scroll fonksiyonu
const throttledScroll = throttle(scrollToSection, 300);
 
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* İçerik */}
      <Container className="relative z-30">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 neon-text">
              Ali Olkaç
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gradient">
              Full-Stack Ninja Developer
            </h2>
            <p className="text-sm md:text-lg text-text-secondary max-w-xs md:max-w-2xl mx-auto px-2">
              Modern teknolojilerle sağlam, ölçeklenebilir çözümler
              geliştiriyorum. Kod yazarken sadece çözüm değil, değer üretmeye
              odaklanıyorum —{" "}
              <span className="text-orange">Ninja disipliniyle</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto justify-center">
            <Button
              size="lg"
              onClick={() => throttledScroll("projects")}
              className="neon-button w-full sm:w-auto"
            >
              Projelerimi Gör
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => throttledScroll("contact")}
              className="neon-button w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:shadow-neon-purple"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 opacity-100">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1 hover:border-primary hover:shadow-neon-blue transition-all duration-300">
          <div 
            className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
