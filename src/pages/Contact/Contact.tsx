import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import MapSection from './MapSection';
import TestimonialSection from '../Home/Testimonials';
import FAQAccordion from './FAQAccordion';

const Contact: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-90"
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.3)",
                  "0 0 15px rgba(59,130,246,0.5)",
                  "0 0 5px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your hiring goals are our priority. Let’s connect and discuss how we can deliver the right talent for your business success.
            </motion.p>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Global Operations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Global Operations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "North America Headquarters",
                address: "999 West Big Beaver Road, Troy, Michigan 48084-4782",
                phone: "+1-248-362-4444"
              },
              {
                title: "Asia-Pacific Headquarters",
                address: "36 Robinson Road, City House #20-01, Singapore 06807",
                phone: "+65 1234 5678"
              },
              {
                title: "EMEA Headquarters",
                address: "20 Avenue Edouard-Dulois - CP 48, CH - 2006 Neuchâtel, Switzerland",
                phone: "+4132 737 18 00"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:border-blue-400 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-blue-800 mb-4">{location.title}</h3>
                <p className="text-slate-600 mb-3">{location.address}</p>
                <p className="text-slate-700 font-medium">{location.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sections */}
      <div id="contact-form" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      {/* Testimonials Section */}
  {/* <TestimonialSection/> */}

 

      {/* FAQ Section */}
    <FAQAccordion/>

      {/* Map Section */}
      <MapSection />
        {/* Stats Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "90-100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Availability" },
              { value: "10x", label: "Growth Potential" },
              { value: "2018", label: "Established Since" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-300">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

     
    </div>
  );
};

export default Contact;