// src/components/OurPurposeSection.tsx
import { motion } from 'framer-motion';

const OurPurposeSection = () => {
  return (
    <div className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Purpose</h2>
          
          <motion.blockquote 
            className="text-2xl italic text-gray-700 border-l-4 border-cyan-500 pl-6 py-3 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            "Our purpose is to develop our people personally, professionally, and financially, 
            so they can be the light to the world around them"
          </motion.blockquote>
          
          <motion.div
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="mb-4">
              — Best Bean, CEO
            </p>
            <p>
              We believe that if we can develop our people to become the best version of themselves, 
              then they will turn around and take care of our customers, our consultants, and our 
              candidates in ways that far exceed any expectations.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { 
              title: "Personally", 
              description: "Fostering personal growth and well-being through mentorship and support systems.",
              color: "bg-cyan-100"
            },
            { 
              title: "Professionally", 
              description: "Providing continuous learning opportunities and career advancement paths.",
              color: "bg-blue-100"
            },
            { 
              title: "Financially", 
              description: "Ensuring competitive compensation and financial security for our team members.",
              color: "bg-indigo-100"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl ${item.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPurposeSection;