// src/app/what-we-do/page.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaSearch, FaUsers, FaHandshake, FaFileContract, 
  FaChartLine, FaGlobe, FaHeadset, FaUserTie,
  FaBriefcase, FaCalendarAlt, FaCheckCircle, 
} from 'react-icons/fa';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyk1HCZXqBC4S7fJDbcUMxAIpvp-ERfekLeURrjiaAeCU9_MUdlFjKclKippqq7RqS1YQ/exec"


const WhatWeDo = () => {
    const navigate = useNavigate()
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
  });
  
  const [status, setStatus] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("⏳ Submitting...");

    try {
      const body = new URLSearchParams();
      body.append("FirstName", form.firstName);
      body.append("LastName", form.lastName);
      body.append("BusinessName", form.businessName);
      body.append("Phone", form.phone);

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Submitted successfully!");
        setForm({ firstName: "", lastName: "", businessName: "", phone: "" });
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Network error. Try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
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
            More Than Just a Staffing Agency
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We go the extra mile to manage every step of the process — from talent search and candidate selection to onboarding and payroll management.
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
              <div className="text-5xl font-bold text-blue-600 mb-4">50+</div>
              <div className="text-xl font-semibold text-gray-800">Tech Experts in Our Network</div>
              <p className="text-gray-600 mt-2">Skilled professionals ready to power innovation for our clients.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">2-10</div>
              <div className="text-xl font-semibold text-gray-800">Countries & Expanding</div>
              <p className="text-gray-600 mt-2">Starting strong with a global vision to serve businesses worldwide.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">Pay Only</div>
              <div className="text-xl font-semibold text-gray-800">For Results</div>
              <p className="text-gray-600 mt-2">No upfront costs — you invest only when we deliver successful hires.</p>
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
        Let’s Connect
      </motion.h3>
      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Got questions or looking for support? Our team is ready to assist you.
        Reach us anytime at:{" "}
        <span className="font-bold text-blue-600">312-973-6111</span>
      </motion.p>
      <Link to={'/contact'}>
      <motion.button
        className="mt-6 bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Submit A Staffing Request
      </motion.button>
      </Link>
      
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
              Our Smart Omni-Channel Approach
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We blend cutting-edge technology with proven strategies to deliver the most effective solutions for your staffing and workforce needs.
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
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Helping You Scale Smarter</h3>
                <p className="text-gray-600 mb-8">
                  We focus on efficiency, agility, and growth. Our omni-channel approach offers three core solutions to support your business success:
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: <FaSearch className="text-blue-500" />, title: "Talent Sourcing", description: "Innovative methods to connect you with the right-fit professionals." },
                    { icon: <FaUsers className="text-blue-500" />, title: "Candidate Management", description: "Streamlined tracking and seamless communication tools." },
                    { icon: <FaChartLine className="text-blue-500" />, title: "Performance Analytics", description: "Actionable, data-driven insights to strengthen your hiring decisions." }
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
                    Our omni-channel model ensures access to top talent worldwide, customized solutions, and quick results.
                  </p>
                  <p className="text-gray-600">
                    We operate in 50+ countries, serving startups, growing businesses, and enterprises with both local and global hiring needs.
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
                { number: 1, title: "Get in Touch", description: "Share your staffing needs and requirements with us.", icon: <FaHeadset /> },
                { number: 2, title: "Discovery Call", description: "Your dedicated partner connects with you to understand your goals.", icon: <FaHandshake /> },
                { number: 3, title: "Curated Shortlist", description: "We source, evaluate, and present the best-fit candidates for your review.", icon: <FaUserTie /> },
                { number: 4, title: "Interview & Select", description: "We coordinate interviews and guide you through the offer stage.", icon: <FaBriefcase /> },
                { number: 5, title: "Hire & Launch", description: "Bring your new hire onboard while we handle the setup and smooth onboarding.", icon: <FaCheckCircle /> }
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
              Flexible staffing solutions customized for your unique goals.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Short-Term Contracts",
                icon: <FaFileContract className="text-blue-500" />,
                description: "Sustainable partnerships that deliver ongoing results with the right culture and skills.",
                features: ["Agile project staffing", "Temporary coverage", "Fast deployment"]
              },
              {
                title: "Long-Term Contracts",
                icon: <FaChartLine className="text-blue-500" />,
                description: "Finding the right culture fit with the skills and work ethic to deliver long-term success.",
                features: ["Extended support", "Seamless team integration", "Strong cultural fit"]
              },
              {
                title: "Direct Placement",
                icon: <FaUserTie className="text-blue-500" />,
                description: "Find the right permanent hire, from entry-level to executive leadership.",
                features: ["Permanent roles", "Leadership search", "Specialized talent matching"]
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
                  "We’re on your side—tailoring staffing solutions around your exact business goals.",
                  "People first: every candidate is hand-picked to match your role and team.",
                  "During business hours, expect a response within 60 minutes—every time.",
                  "End-to-end support: from sourcing and screening to onboarding and payroll.",
                  "We learn your culture and deliver talent who thrives in it."
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
                We design flexible staffing plans that fit your budget and timeline—so you get the right people, right away.
              </p>
              
              <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 text-gray-800 max-w-lg mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            FIRST NAME*
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LAST NAME*
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          BUSINESS NAME*
        </label>
        <input
          type="text"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          PHONE NUMBER*
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all"
      >
        Hire Someone
      </button>

      {status && (
        <p className="mt-4 text-center text-sm font-medium text-gray-600">
          {status}
        </p>
      )}
    </form>
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
              className="text-3xl font-bold text-gray-900 uppercase tracking-wider"
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
                className="bg-blue-100 rounded-xl p-6 shadow-md flex items-center justify-center"
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