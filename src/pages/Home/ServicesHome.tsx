import { motion } from 'framer-motion';
import { 
  FaHandshake, FaBolt, FaUserTie, FaHeadset, FaLightbulb, FaChartLine 
} from 'react-icons/fa';
import {Link} from "react-router-dom"

const ServicesHome = () => {
  const steps = [
    {
      icon: <FaHandshake className="text-[#1e3a8a]" />, 
      title: 'Step 1: Discovery Call',
      description: ' We connect with you to understand your hiring needs, company culture, and specific role requirements.',
      color: 'from-blue-500 to-blue-300',
    },
    {
      icon: <FaBolt className="text-[#1e3a8a]" />,
      title: 'Step 2: Needs Assessment',
      description: 'Our team analyzes your requirements and creates a tailored recruitment strategy for your business.',
      color: 'from-yellow-500 to-yellow-300',
    },
    {
      icon: <FaUserTie className="text-[#1e3a8a]" />,
      title: 'Step 3: Talent Sourcing & Screening',
      description: ' We source, evaluate, and shortlist top candidates who match your criteria.',
      color: 'from-purple-500 to-purple-300',
    },
    {
      icon: <FaHeadset className="text-[#1e3a8a]" />,
      title: 'Step 4: Client Interviews & Selection',
      description: 'You interview the shortlisted candidates, and we assist throughout the selection process.',
      color: 'from-green-500 to-green-300',
    },
    {
      icon: <FaLightbulb className="text-[#1e3a8a]" />,
      title: 'Step 5: Onboarding Support',
      description: ' We ensure smooth onboarding of new hires with dedicated support and guidance.',
      color: 'from-orange-500 to-orange-300',
    },
    {
      icon: <FaChartLine className="text-[#1e3a8a]" />,
      title: 'Step 6: Long-Term Partnership',
      description: 'Beyond placements, we provide ongoing workforce solutions to support your business growth.',
      color: 'from-teal-500 to-teal-300',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 80,
        damping: 15
      } 
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-800 py-24 px-4 sm:px-6 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-30"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#1e3a8a] text-transparent bg-clip-text">
              How We Partner With You
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Streamlined steps to help you find the right talent quickly and efficiently.
          </motion.p>
          
          <motion.div 
            className="mt-8 w-32 h-1 bg-[#1e3a8a] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100 relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Decorative gradient bar */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-[#1e3a8a]`} />
              
              {/* Number indicator */}
              <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 font-bold text-lg">
                {index + 1}
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-inner">
                  <div className="text-2xl">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {/* Animated hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 z-[-1]"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to={'/contact'}>
          <button className="bg-[#1e3a8a] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
          </Link>
          
          <p className="mt-4 text-gray-500">
            Join thousands of satisfied clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHome;