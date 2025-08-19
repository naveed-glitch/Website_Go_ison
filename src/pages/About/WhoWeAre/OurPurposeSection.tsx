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
            "Our purpose is to empower people—personally, professionally, and financially—so they can create meaningful impact in the world around them."
          </motion.blockquote>
          
          <motion.div
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="mb-4">
              — Naveed Haq, CEO
            </p>
            <p>
              We believe that when people are supported to grow and thrive, they bring their best selves to work. At Go Ison, this means our clients, consultants, and candidates benefit from a level of dedication and performance that goes beyond expectations.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { 
              title: "Personally", 
              description: "Encouraging personal growth and well-being through mentorship, guidance, and support systems.",
              color: "bg-blue-100"
            },
            { 
              title: "Professionally", 
              description: "Creating continuous learning opportunities and clear career advancement pathways.",
              color: "bg-blue-200"
            },
            { 
              title: "Financially", 
              description: "Providing competitive compensation and long-term financial stability for our team and partners.",
              color: "bg-blue-300"
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