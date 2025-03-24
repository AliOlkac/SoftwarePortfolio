'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/constants';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-background/70 py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary">
            {siteConfig.name.split(' ')[0]}
          </span>
          <span className="text-white ml-1">{siteConfig.name.split(' ')[1] || ''}</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href={siteConfig.links.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/90 backdrop-blur-lg"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={siteConfig.links.email}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <MdEmail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 