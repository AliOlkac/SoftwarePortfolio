'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: siteConfig.links.github,
      username: 'AliOlkac'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: siteConfig.links.linkedin,
      username: 'aliolkac'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/aliolkac_43',
      username: 'aliolkac_43'
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:aliolkac43@gmail.com',
      username: 'aliolkac43@gmail.com'
    },
    {
      name: 'Location',
      icon: <FaMapMarkerAlt size={24} />,
      url: 'https://maps.google.com/?q=Kutahya,Turkey',
      username: 'Kütahya, Turkey'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-neon blue-pulse">Contact</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            You can contact me for your projects, collaboration opportunities, or any questions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Card */}
          <motion.div 
            className="bg-gray-900/50 glass-effect rounded-xl border-3 border-primary/60 border-blue-glow p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Top Section - Title and Description */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-neon">Get In Touch</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                You can contact me through any of the communication channels below.
                I will get back to you as soon as possible.
              </p>
            </div>
            
            {/* Contact Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-5 bg-black/20 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300"
                >
                  <div className="mr-4 text-primary">{link.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{link.name}</h4>
                    <Link 
                      href={link.url} 
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white/70 hover-blue-glow"
                    >
                      {link.username}
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <Link 
                      href={link.url} 
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="relative w-[76px] h-[76px] block overflow-hidden outline-none bg-transparent cursor-pointer group"
                      aria-label={`Go to my ${link.name} account`}
                    >
                      {/* Outer ring - normal state */}
                      <span 
                        className="absolute inset-[7px] rounded-full border-3 border-primary transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-[0.7]"
                        style={{
                          transitionProperty: 'opacity, transform',
                          transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
                          transitionDelay: '80ms'
                        }}
                      ></span>
                      
                      {/* Outer ring - hover state */}
                      <span 
                        className="absolute inset-[7px] rounded-full border-4 border-blue-400 opacity-0 scale-[1.3] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                        style={{
                          transitionProperty: 'opacity, transform',
                          transitionTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
                          transitionDelay: '80ms'
                        }}
                      ></span>
                      
                      {/* Icon box */}
                      <div className="absolute top-0 left-0 flex transition-transform duration-400 group-hover:translate-x-[-69px]">
                        {/* First icon */}
                        <span className="block w-[30px] h-[30px] mt-[24px] mx-[22px]">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                          </svg>
                        </span>
                        
                        {/* Second icon */}
                        <span className="block w-[30px] h-[30px] mt-[24px] mx-[22px]">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 italic">
                &ldquo;I&apos;m looking forward to bringing your projects to life or working together.
                <br />Let&apos;s move forward together on the path to success in the software world!&rdquo;
              </p>
              <div className="mt-6">
                <div className="inline-block h-1 w-16 bg-primary/70 rounded"></div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Map Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link 
              href="https://maps.google.com/?q=Kutahya,Turkey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover-blue-glow"
            >
              <FaMapMarkerAlt className="mr-2" /> View my location in Kütahya, Turkey on the map
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 