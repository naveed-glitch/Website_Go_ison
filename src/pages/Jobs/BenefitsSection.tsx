// src/components/BenefitsSection.tsx

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Globe, DollarSign, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: 'Competitive Salary',
    description: 'We offer industry-leading compensation packages with bonuses and stock options.'
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision coverage for you and your family.'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and unlimited paid time off.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Team Culture',
    description: 'Collaborative environment with regular team events and retreats.'
  },
 {
  icon: <Globe className="w-8 h-8 text-blue-600" />,
  title: 'Global Opportunities',
  description: 'Access to exciting projects and clients around the world to expand your experience.'
},
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Career Growth',
    description: 'Professional development budget and mentorship programs.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Join Our Team?
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe in taking care of our employees so they can do their best work.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;