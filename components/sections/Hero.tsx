"use client";

import Container from "@/components/ui/Container";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* İçerik */}
      <Container className="relative z-30" size="sm">
        <div className="flex flex-col items-center text-center pointer-events-none select-none">
          <div className="mb-6">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-3 md:mb-4 neon-text">
              Ali Olkaç
            </h1>
            <h2 className="text-xl md:text-4xl font-bold leading-tight mb-3 md:mb-4 text-gradient">
              Full-Stack Ninja Developer
            </h2>
            <p className="text-base md:text-lg text-text-secondary">
              Modern teknolojilerle sağlam, ölçeklenebilir çözümler
              geliştiriyorum. Kod yazarken sadece çözüm değil, değer üretmeye
              odaklanıyorum —{" "}
              <span className="text-orange">Ninja disipliniyle.</span>
            </p>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 opacity-100 pointer-events-none">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div 
            className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
