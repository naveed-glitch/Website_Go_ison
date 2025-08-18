// src/components/HeroSection.tsx
import  { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div 
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3')",
          y: yBg
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/80 z-10" />
      
      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We're A Company That <br />
          <motion.span 
            className="text-cyan-300"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(103,232,249,0.5)",
                "0 0 15px rgba(103,232,249,0.8)",
                "0 0 5px rgba(103,232,249,0.5)"
              ] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
          >
            Cares For Others
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Insight Global isn't just a staffing company. We're a company that cares for others. 
          It might sound lofty, but it's the idea that gets us up every day, determined to make it true.
        </motion.p>
        
        <motion.button 
          className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{ 
            boxShadow: "0 0 15px rgba(56,189,248,0.8)",
            scale: 1.05
          }}
        >
          See How We Help
        </motion.button>
      </motion.div>
      
      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-4 border-white rounded-full">
          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;