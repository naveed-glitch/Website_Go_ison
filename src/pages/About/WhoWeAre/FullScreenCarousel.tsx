// src/components/FullScreenCarousel.tsx
import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
];

const FullScreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      
      <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
};

export default FullScreenCarousel;