import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  {
    year: '2024',
    title: 'Our Beginning',
    description: 'Launched with a mission to deliver client-focused staffing solutions tailored to modern business needs.'
  },
  {
    year: '2024',
    title: 'First Partnerships',
    description: 'Started building trusted relationships with startups and growing enterprises across industries.'
  },
  {
    year: '2025',
    title: 'Expanding Network',
    description: 'Growing our talent pool and client base to provide faster, more reliable recruitment services.'
  },
  {
    year: '2025',
    title: 'Technology Integration',
    description: 'Introducing AI-driven tools to streamline hiring and improve candidate matching.'
  },
  {
    year: '2027',
    title: 'Global Outlook',
    description: 'Committed to scaling our presence and becoming a trusted partner for businesses worldwide.'
  }
];

const TimelineSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We are at the beginning of an exciting path—committed to reshaping the staffing industry with innovation, agility, and a client-first approach.
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center mb-12`}
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2 px-4">
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-500 font-semibold text-lg">{item.year}</div>
                  <h3 className="text-xl font-bold text-blue-900 mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-3">{item.description}</p>
                </motion.div>
              </div>

              <div className="relative w-full md:w-auto flex justify-center items-center my-4 md:my-0">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg"></div>
                {index !== timelineData.length - 1 && (
                  <div className="hidden md:block absolute top-8 h-full w-1 bg-blue-200"></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
