
import { motion } from 'framer-motion';
import type React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <img
    src="https://images.unsplash.com/photo-1637073849640-b283dcd9a111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="IT staffing team working on computers"
    className="w-full h-96 object-cover rounded-xl border-2 border-dashed"
  />
  <div className="absolute -bottom-6 -right-6 bg-blue-600 w-64 h-64 rounded-xl z-[-1]"></div>
</motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About GoisOn IT Staffing
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At GoisOn, we specialize in delivering tailored IT staffing solutions across the U.S. and beyond. We connect businesses with skilled technology professionals who drive innovation, efficiency, and growth.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Our expertise covers software development, cloud computing, cybersecurity, data science, and more. Whether supporting startups or Fortune 500 enterprises, we provide flexible, high-quality staffing solutions designed to meet evolving business needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="mr-3 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">2+ Offices</p>
                  <p className="text-gray-600">Strategically established to serve clients better.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">10+ Clients</p>
                  <p className="text-gray-600">Trusted businesses already partnering with us.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">50+ Placements</p>
                  <p className="text-gray-600">Skilled professionals matched with the right opportunities.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">95% Client Satisfaction</p>
                  <p className="text-gray-600">A strong start built on quality and trust.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
