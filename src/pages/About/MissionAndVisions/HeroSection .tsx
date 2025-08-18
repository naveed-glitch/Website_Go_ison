// src/components/HeroSection.tsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-soft-light opacity-20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-700 rounded-full mix-blend-soft-light opacity-20 filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-soft-light opacity-30 filter blur-3xl"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Talent Bridge
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Connecting exceptional talent with transformative organizations worldwide
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition"
             onClick={()=> navigate('/services')}

          >
            Our Services
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white hover:text-blue-900 transition"
          onClick={()=> navigate('/contact')}
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition"
                      onClick={()=> navigate('/jobs')}

          >
            Need a Job?
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10"

        >
          <div className="animate-bounce w-8 h-14 rounded-full border-4 border-white flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;