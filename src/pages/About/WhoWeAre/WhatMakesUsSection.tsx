
import { motion } from 'framer-motion';

const WhatMakesUsSection = () => {
  const features = [
    {
      title: "Our Culture",
      description: "A supportive environment where everyone is encouraged to grow and innovate. We celebrate diversity and foster inclusivity at all levels.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
      reverse: false
    },
    {
      title: "Our Approach",
      description: "We take a personalized approach to every client and candidate, ensuring the best possible match for long-term success.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3",
      reverse: true
    },
    {
      title: "Our Impact",
      description: "Through our work, we've transformed thousands of careers and helped businesses achieve their strategic goals.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3",
      reverse: false
    }
  ];

  return (
    <div className="py-24 px-4 bg-[#FFF8E7]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">What Makes Us, Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the core elements that define our identity and drive our success in the industry
          </p>
        </motion.div>
        
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${feature.reverse ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="md:w-1/2">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
             
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakesUsSection;