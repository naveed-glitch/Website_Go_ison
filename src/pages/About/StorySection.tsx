// components/StorySection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            style={{ y: y1 }}
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-lg shadow-xl w-4/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-blue-300 text-sm">Vision Realized</div>
              <div className="text-2xl font-bold mt-2">Our Vision</div>
              <p className="mt-4">
                 To become a trusted partner for businesses worldwide—helping them build high-performing teams and achieve sustainable growth.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            style={{ y: y2 }}
          >
            <motion.div 
              className="absolute -top-6 -left-6 bg-white text-blue-900 p-8 rounded-lg shadow-xl w-4/5 z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-blue-500 text-sm">BEGINNINGS</div>
              <div className="text-2xl font-bold mt-2">2024 – The Beginning</div>
              <p className="mt-4">
                Go Ison was founded with a clear mission: to transform the staffing industry by delivering tailored, client-focused workforce solutions.
              </p>
            </motion.div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mt-16" />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-blue-100/30 z-0 pointer-events-none"
          style={{ opacity }}
        >
          2025
                  </motion.div>
      </div>
    </section>
  );
};

export default StorySection;