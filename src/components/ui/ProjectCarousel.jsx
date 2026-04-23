import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Monitor, Smartphone, Maximize2 } from 'lucide-react';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsIframeLoading(true);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsIframeLoading(true);
  };

  const project = projects[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
    }),
  };

  return (
    <div className="carousel-container relative w-full h-[700px] overflow-hidden flex items-center justify-center py-10">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: project.accent }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
        
        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-50 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Content */}
        <div className="w-full relative h-[550px] mt-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                filter: { duration: 0.4 }
              }}
              className="absolute inset-0 flex flex-col lg:flex-row gap-8 items-center"
            >
              
              {/* Project Info Panel */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
                <div className="flex flex-col gap-2">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm font-semibold tracking-widest text-white/50 uppercase"
                  >
                    {project.type} &bull; {project.year}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl lg:text-5xl font-black tracking-tight"
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2 justify-center lg:justify-start"
                >
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider border border-white/10 bg-white/5 rounded-full text-white/80">
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4 justify-center lg:justify-start mt-4"
                >
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-xs tracking-widest transition-transform hover:scale-105 active:scale-95"
                    >
                      LIVE SITE <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-bold text-xs tracking-widest transition-all"
                    >
                      GITHUB <Github size={14} />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Live Preview Display */}
              <div className="w-full lg:w-2/3 h-full flex flex-col items-center justify-center">
                <div className="live-preview-window w-full max-w-[800px] h-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl relative flex flex-col">
                  
                  {/* Browser Header */}
                  <div className="h-10 bg-[#121212] flex items-center px-4 gap-4 border-bottom border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 max-w-[400px] mx-auto h-6 bg-white/10 rounded-md flex items-center px-3 text-[10px] text-white/80 font-mono tracking-tight overflow-hidden whitespace-nowrap">
                      {project.demo !== '#' ? project.demo : 'github.com/PranayCharde'}
                    </div>
                    <div className="flex gap-4 opacity-80">
                      <Monitor 
                        size={16} 
                        className={`cursor-pointer transition-all ${viewMode === 'desktop' ? 'text-white scale-110' : 'text-white/40 hover:text-white'}`}
                        onClick={() => setViewMode('desktop')}
                      />
                      <Smartphone 
                        size={16} 
                        className={`cursor-pointer transition-all ${viewMode === 'mobile' ? 'text-white scale-110' : 'text-white/40 hover:text-white'}`}
                        onClick={() => setViewMode('mobile')}
                      />
                    </div>
                  </div>

                  {/* Browser Content / Iframe */}
                  <div className="flex-1 w-full bg-white relative overflow-hidden flex justify-center items-start pt-0">
                    {isIframeLoading && (
                      <div className="absolute inset-0 bg-[#0f0f0f] z-10 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Loading Live Preview</span>
                        </div>
                      </div>
                    )}
                    
                    <div className={`transition-all duration-700 ease-in-out h-full ${viewMode === 'mobile' ? 'w-[375px] shadow-2xl border-x border-white/10' : 'w-full'}`}>
                      <iframe 
                        src={project.demo !== '#' ? project.demo : ''} 
                        className="w-full h-full border-none pointer-events-auto"
                        title={project.title}
                        onLoad={() => setIsIframeLoading(false)}
                        loading="lazy"
                      />
                    </div>

                    {/* Corner CTA Buttons for Premium Look */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20 pointer-events-none">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 hover:bg-black/80 text-white px-4 py-2 rounded-full font-bold text-[10px] tracking-widest transition-all pointer-events-auto"
                        >
                          CODE <Github size={12} />
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-[10px] tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-xl pointer-events-auto"
                        >
                          LAUNCH <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination */}
        <div className="flex gap-3 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
                setIsIframeLoading(true);
              }}
              className={`h-0.5 transition-all duration-500 ease-out ${i === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectCarousel;
