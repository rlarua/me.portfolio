import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStackModal = ({ isOpen, onClose, stackName, skills, projects }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md min-w-[320px] min-h-[200px] bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 h-[72px]">
              <h3 className="text-xl font-bold text-slate-900">{stackName}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-50 rounded-full transition-colors group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[100px]">
              {/* Skills Section */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-800 text-white text-sm font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Projects Section - Conditional */}
              {projects && projects.length > 0 && (
                <div className="pt-8 mt-2">
                  <h4 className="text-sm font-bold text-slate-500 tracking-wider mb-3">
                    Used Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects.map((project, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TechStackModal;
