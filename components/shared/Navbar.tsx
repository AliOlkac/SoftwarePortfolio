'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/constants';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Determine scroll state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // We don't change the active section based on scroll position when on the home page
      // The active section always remains as Home
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Set active section when page loads or path changes
  useEffect(() => {
    // Special case for home page
    if (pathname === '/') {
      // When on the home page, make the Home link active
      setActiveSection('/');
    } else {
      // For other pages, determine the active section based on the path
      setActiveSection(pathname);
    }
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <span className="neon-text text-2xl font-bold">
            {siteConfig.name.split(' ')[0]}
          </span>
          <span className="text-white ml-1 text-2xl font-bold">{siteConfig.name.split(' ')[1] || ''}</span>
          <motion.span 
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            whileHover={{ width: '100%' }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative py-2 group ${
                  isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full shadow-neon-blue' : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.a>
            );
          })}
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
            className="text-gray-300 hover:text-primary hover:shadow-neon-blue transition-all p-2 rounded-full"
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
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
            className="text-gray-300 hover:text-primary hover:shadow-neon-blue transition-all p-2 rounded-full"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href={siteConfig.links.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-300 hover:text-primary hover:shadow-neon-blue transition-all p-2 rounded-full"
            aria-label="Email"
            whileHover={{ scale: 1.1 }}
          >
            <MdEmail size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-300 hover:text-primary transition-colors p-2 rounded-full ${
              isMobileMenuOpen ? 'text-primary' : ''
            }`}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span 
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'
                }`} 
              />
              <span 
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'w-4'
                }`} 
              />
              <span 
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'
                }`} 
              />
            </div>
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
          className="md:hidden glass-effect"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 px-4 border-l-2 ${
                    isActive 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-300'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="flex items-center space-x-4 pt-4 px-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={siteConfig.links.email}
                className="text-gray-300 hover:text-primary transition-colors p-2"
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