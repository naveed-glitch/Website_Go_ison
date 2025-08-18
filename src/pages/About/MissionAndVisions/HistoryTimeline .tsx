// src/components/HistoryTimeline.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HistoryTimeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2025);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const historyData = [
    {
      year: 1970,
      title: "The Foundation",
      description: "The key focus was that the first year's annual report on drilling materials has been conducted by experts, who were able to find out what the drilling materials could be used to help build the drilling materials. The project was completed by director John Dixon."
    },
    {
      year: 1980,
      title: "Steel Methods Development",
      description: "The development of Steel methods of Judge McCormick's work was undertaken by the Executive Director of the Company's Steel methods. He was appointed President of the Company's Steel Method and was responsible for operating the steel method of welding and reflecting the drill process."
    },
    {
      year: 1996,
      title: "Nuclear Hydrology System",
      description: "In 1996, he was awarded the President of Steelers to the Company for the construction of a nuclear hydrology system. He also worked with the Chief Executive Officer of Steelers to take advantage of the design of the new technology."
    },
    {
      year: 2000,
      title: "O.E.S. Department",
      description: "Development of the O.E.S. Department of Materials in Australia was held in June 2000. During the last three years, he was appointed chief engineer, who was a director of the Steel Method and was responsible for operating the steel method of welding and reflecting the drill process."
    },
    {
      year: 2010,
      title: "Southern Manufacturing Development",
      description: "In July 2010, he was appointed President of the Southern Manufacturing Development Unit. At the point of view, he was appointed president of the Company's Steel Method and was responsible for operating the steel method of welding and reflecting the drive process."
    },
    {
      year: 2025,
      title: "Vision for the Future",
      description: "Judge quickly gave them a prominent position on his career in $100 million. At least one of the Jim Parker expert and team took up over $1 billion as revenue by 2025."
    }
  ];

  const activeItem = historyData.find(item => item.year === activeYear) || historyData[0];

  return (
    <div ref={ref} className="py-24 px-4 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our History</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            A journey of innovation, growth, and commitment to excellence
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200"></div>
                
                <div className="space-y-2 pl-16">
                  {historyData.map((item) => (
                    <motion.button
                      key={item.year}
                      className={`text-left p-4 rounded-xl w-full transition ${
                        activeYear === item.year 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-white text-gray-900 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveYear(item.year)}
                    >
                      <h3 className="text-xl font-bold">{item.year}</h3>
                      <p className="text-sm">{item.title}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-blue-600">{activeItem.year}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{activeItem.title}</h3>
            </div>
            <p className="text-gray-700 text-lg">
              {activeItem.description}
            </p>
            <div className="mt-8">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;