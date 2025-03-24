import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { siteConfig } from '@/lib/constants';
import Container from '@/components/ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-md py-8 border-t border-primary/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary text-xl font-bold">
              {siteConfig.name}
            </p>
            <p className="text-gray-400 mt-2">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={siteConfig.links.email}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <MdEmail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Ali Olkaç. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 