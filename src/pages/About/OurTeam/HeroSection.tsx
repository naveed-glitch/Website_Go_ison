// src/components/about/hero-section.tsx
'use client';

import  { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const accentScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const accentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const createAccentElement = () => {
      const accent = document.createElement('div');
      accent.className = 'absolute rounded-full bg-blue-400/20 blur-xl';
      accent.style.width = `${Math.random() * 100 + 50}px`;
      accent.style.height = accent.style.width;
      accent.style.left = `${Math.random() * 100}%`;
      accent.style.top = `${Math.random() * 100}%`;
      accent.style.animation = `pulse ${Math.random() * 4 + 2}s infinite ease-in-out`;
      document.getElementById('hero-container')?.appendChild(accent);
      
      setTimeout(() => {
        accent.remove();
      }, 5000);
    };
    
    const interval = setInterval(createAccentElement, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={ref}
      id="hero-container"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-slate-900/90" />
        <img
          src="/about/hero-bg.jpg"
          alt="Corporate team background"
          
       
          className="opacity-30"
        />
      </motion.div>

      {/* Accent animation elements will be dynamically created here */}

      {/* Large animated accent element */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"
        style={{ 
          scale: accentScale,
          opacity: accentOpacity,
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ y: textY }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our <span className="text-blue-300">Leadership</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our leadership team is driven by passion, innovation, and a commitment to shaping the future of workforce solutions. Together, we bring expertise and vision to help businesses and professionals thrive.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Explore Our Team
          </button>
        </motion.div>
      </motion.div>
      
      {/* Floating animated elements */}
      <motion.div 
        className="absolute bottom-10 left-1/4 w-8 h-8 rounded-full bg-blue-400/30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-20 right-1/3 w-12 h-12 rounded-full bg-slate-400/20"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}