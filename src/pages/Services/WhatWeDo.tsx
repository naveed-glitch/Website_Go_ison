// src/app/what-we-do/page.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaSearch, FaUsers, FaHandshake, FaFileContract, 
  FaChartLine, FaGlobe, FaHeadset, FaUserTie,
  FaBriefcase, FaCalendarAlt, FaCheckCircle, 
} from 'react-icons/fa';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const WhatWeDo = () => {
    const navigate = useNavigate()
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Parallax */}
      <section 
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 z-0"
          style={{ y: yBg }}
        >
          {/* Animated elements in background */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-800 opacity-20"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
    
  {/* Floating particles */}
{[...Array(40)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-blue-400"
    style={{
      width: `${Math.random() * 20 + 10}px`, // Larger particles
      height: `${Math.random() * 20 + 10}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, Math.random() * 200 - 100], // More noticeable movement
      x: [0, Math.random() * 200 - 100],
      opacity: [0.3, 0.9, 0.3],
    }}
    transition={{
      duration: 3 + Math.random() * 5, // Faster movement
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
))}

        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Not Your Average Staffing Agency
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We go above and beyond to handle the search, candidate curation, onboarding, and payroll
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 flex items-center" onClick={()=>{navigate('/contact')}}>
              <FaCalendarAlt className="mr-2" /> Schedule A Meeting
            </button>
           
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="text-white text-sm mb-2">Scroll to explore</div>
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 10] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">3,000+</div>
              <div className="text-xl font-semibold text-gray-800">Experienced Recruiters</div>
              <p className="text-gray-600 mt-2">Covering all skillsets and industries</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">50+</div>
              <div className="text-xl font-semibold text-gray-800">Countries</div>
              <p className="text-gray-600 mt-2">International services for global talent sourcing</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">Pay Only</div>
              <div className="text-xl font-semibold text-gray-800">After Success</div>
              <p className="text-gray-600 mt-2">You pay only after your candidate starts</p>
            </motion.div>
          </div>
          
       <motion.div
  className="relative mt-16 text-center overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4 sm:px-6 rounded-lg shadow-xl"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Decorative accents */}
  <div className="absolute -top-20 -left-10 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
  <div className="absolute top-20 -right-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

  <div className="relative z-10">
    {/* Main Content */}
    <div className="max-w-lg mx-auto">
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get in Touch
      </motion.h3>
      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Have questions or need assistance? Our team is here to help.
        Call us toll-free:{" "}
        <span className="font-bold text-blue-600">855-485-8853</span>
      </motion.p>
      <motion.button
        className="mt-6 bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Submit A Staffing Request
      </motion.button>
    </div>
  </div>

  {/* Image and Decorative Element */}
  <div className="relative mt-8 flex justify-center">
    <motion.img
      src="https://images.unsplash.com/photo-1605152276889-1686944c8ed1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
      alt="Professional Support"
      className="w-full max-w-md rounded-lg shadow-md"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
    />
  </div>
</motion.div>

        </div>
      </section>

      {/* Omni-Channel Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Unique Omni-Channel Approach
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We combine modern technology and time-tested methods to provide the most robust approach to fulfilling your recruitment needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Helping to manage your business</h3>
                <p className="text-gray-600 mb-8">
                  We work hard to maximize efficiency and cost savings. We offer three primary recruitment management models operating within our omni-channel approach.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: <FaSearch className="text-blue-500" />, title: "Talent Sourcing", description: "Advanced techniques to find the perfect candidates" },
                    { icon: <FaUsers className="text-blue-500" />, title: "Candidate Management", description: "Comprehensive tracking and communication system" },
                    { icon: <FaChartLine className="text-blue-500" />, title: "Performance Analytics", description: "Data-driven insights to optimize your hiring" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaGlobe className="text-blue-500 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Global Talent Network</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    Our omni-channel approach allows us to match you with perfect-fit candidates, build custom solutions, and deliver fast results.
                  </p>
                  <p className="text-gray-600">
                    We source talent in over 50 countries, providing both small-scale and large-scale international services.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {["North America", "Europe", "Asia", "South America", "Africa", "Australia"].map((region, index) => (
                    <motion.div 
                      key={index}
                      className="bg-blue-50 rounded-lg p-4 text-center"
                      whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-semibold text-blue-700">{region}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Proven Process
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-blue-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 top-0 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {[
                { number: 1, title: "Reach Out", description: "Submit a staffing request & tell us what you're looking for", icon: <FaHeadset /> },
                { number: 2, title: "Connect", description: "Your dedicated Hiring Partner reaches out to discuss your needs", icon: <FaHandshake /> },
                { number: 3, title: "Review Candidates", description: "We search, screen, & share a curated list of qualified candidates", icon: <FaUserTie /> },
                { number: 4, title: "Interview & Offer", description: "We'll schedule interviews & help you extend an offer", icon: <FaBriefcase /> },
                { number: 5, title: "Hire & Onboard", description: "Hire your candidate & let us handle onboarding", icon: <FaCheckCircle /> }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold z-10 lg:left-0 lg:transform-none">
                    {step.number}
                  </div>
                  
                  <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200 h-full pt-16 text-center hover:shadow-lg transition-shadow">
                    <div className="text-blue-500 text-3xl mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Whatever You Need... We've Got You Covered
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Flexible staffing solutions tailored to your specific requirements
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Short-Term Contracts",
                icon: <FaFileContract className="text-blue-500" />,
                description: "We find the right fit even for short engagements, ensuring quality and compatibility.",
                features: ["Project-based staffing", "Temporary solutions", "Quick turnaround"]
              },
              {
                title: "Long-Term Contracts",
                icon: <FaChartLine className="text-blue-500" />,
                description: "Finding the right culture fit with the skills and work ethic to deliver long-term success.",
                features: ["Extended engagements", "Team integration", "Cultural alignment"]
              },
              {
                title: "Direct Placement",
                icon: <FaUserTie className="text-blue-500" />,
                description: "Finding the perfect person for your organization, from C-suite to entry-level positions.",
                features: ["Permanent hires", "Executive search", "Specialized recruitment"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <div className="text-2xl text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-500">
                          <FaCheckCircle />
                        </div>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                What We Can Do For You
              </motion.h2>
              
              <motion.ul 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {[
                  "We work for YOU – providing customized staffing solutions built for your unique business needs",
                  "We bring the human element back to the job placement process. We select each candidate to fit YOUR job opening",
                  "We'll always respond to staffing requests within the hour during normal business hours",
                  "We go beyond identifying talent. We handle the entire process from search to payroll",
                  "We partner with you to understand your culture and find candidates who will thrive in your environment"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-blue-300">
                      <FaCheckCircle />
                    </div>
                    <span className="ml-3 text-lg">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button onClick={()=>{navigate('/contact')}} className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1">
                  Contact Us
                </button>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Hire With Confidence</h3>
              
              <p className="text-blue-100 mb-8">
                We work for you, providing customized solutions built within your budget, to match your unique staffing requirements.
              </p>
              
              <div className="bg-white rounded-xl p-6 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">FIRST NAME*</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LAST NAME*</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">BUSINESS NAME*</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">PHONE NUMBER*</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                
                {/* <div className="text-sm text-gray-500 mb-6">
                  <span>Job seeker? </span>
                  <a href="#" className="text-blue-600 hover:underline">Visit our jobs page</a>
                </div> */}
                
                <button className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all">
                  Hire Someone
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Seeker CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div 
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-1 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium">
              Job Seeker?
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We have resources, opportunities, and the expertise to get you started
          </motion.h2>
          
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all transform hover:-translate-y-1">
              Get Started
            </button>
          </motion.div>
        </div>
      </section> */}

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-lg font-semibold text-gray-500 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Trusted By
            </motion.h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {["Santander", "UnitedHealth Group", "CVS Health", "Meta", "Google", "Microsoft"].map((company, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-xl font-bold text-gray-800">{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;