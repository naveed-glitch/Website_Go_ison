
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take the first step toward an exciting career with us.
          </motion.p>
          
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
          
          <motion.p 
            className="mt-8 text-blue-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Applications reviewed within 48 hours
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;