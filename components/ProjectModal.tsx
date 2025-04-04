'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Project type definition - Same as Projects.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close modal with ESC key
  useEffect(() => {
    if (!project) return; // Do nothing if there's no project

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling - only when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          {/* Overlay - clickable background */}
          <motion.div 
            className="absolute inset-0 bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            className="relative z-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl bg-gray-900/95 glass-effect border-2 border-highlight/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button 
              className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-highlight/80 transition-colors duration-300"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Project Details */}
            <div className="flex flex-col">
              {/* Content Area */}
              <div className="p-8 flex flex-col">
                <h2 className="text-3xl font-bold mb-4 text-highlight">{project.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, index: number) => (
                    <span key={index} className="text-xs px-2 py-1 bg-highlight/20 text-highlight rounded-full border border-highlight/40">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-200 mb-6 flex-grow whitespace-pre-line">{project.description}</p>
                
                <Link 
                  href={project.link} 
                  target="_blank" 
                  className="self-start py-2 px-4 bg-highlight/20 text-highlight border border-highlight/50 rounded-md hover:bg-highlight/30 transition-colors duration-300 flex items-center"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 