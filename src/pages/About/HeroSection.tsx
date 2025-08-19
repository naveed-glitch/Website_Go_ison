// components/HeroSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const HeroSection: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581093588401-75b6d5da1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')",
          y: yBg
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/70 z-1" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        style={{ y: yText }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Briefcase className="w-16 h-16 text-blue-300 mx-auto mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            <span className="block">Powering Your Business</span>
            <span className="block mt-2 text-blue-300">with Tech Talent</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl text-blue-100 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We connect companies with top IT professionals, delivering tailored staffing solutions that accelerate innovation and digital growth.
        </motion.p>

        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Find Your Talent
        </motion.button>
      </motion.div>

      {/* Animated icons (optional – you can replace with tech-themed icons if available) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Briefcase className="w-full h-full text-blue-300 opacity-70" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-10"
        animate={{
          x: [0, -120, 0],
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Briefcase className="w-full h-full text-blue-300 opacity-70" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
