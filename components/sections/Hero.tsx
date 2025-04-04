"use client";

import Container from "@/components/ui/Container";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <Container className="relative z-30">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 neon-text">
              Ali Olkaç
            </h1>
            <h2 className="text-xl md:text-3xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Software Engineer | Web Developer
            </h2>
            <div className="h-0.5 w-24 bg-primary/50 mx-auto my-6"></div>
            <p className="text-base md:text-xl text-gray-300 max-w-lg md:max-w-2xl mx-auto px-4">
              Crafting elegant digital experiences with clean code and innovative solutions.
              Specialized in modern web technologies and performance optimization.
            </p>
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
