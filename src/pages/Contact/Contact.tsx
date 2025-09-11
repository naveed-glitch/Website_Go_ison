import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapSection from "./MapSection";

const Contact: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  // Scroll to top when page loads
  window.scrollTo(0, 0);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollY = window.scrollY;
      // parallaxRef.current.style.transform = translateY(${scrollY * 0.3}px);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section with Heading */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-90"
        />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            animate={{
              textShadow: [
                "0 0 5px rgba(255,255,255,0.3)",
                "0 0 15px rgba(59,130,246,0.5)",
                "0 0 5px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your hiring goals are our priority. Let’s connect and discuss how we
            can deliver the right talent for your business success.
          </motion.p>
        </div>
      </div>

      {/* Contact Section (Form + Info) */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div className="flex flex-col justify-center">
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-center bg-white rounded-xl p-6">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

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
                address: "2908 Jerrie Lane, Glenview, IL 60025",
                phone: "+1 (312) 973-6111",
              },
              {
                title: "Asia-Pacific Headquarters",
                address: "36 Robinson Road, City House #20-01, Singapore 06807",
                phone: "+65 1234 5678",
              },
              {
                title: "EMEA Headquarters",
                address:
                  "20 Avenue Edouard-Dulois - CP 48, CH - 2006 Neuchâtel, Switzerland",
                phone: "+4132 737 18 00",
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:border-blue-400 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  {location.title}
                </h3>
                <p className="text-slate-600 mb-3">{location.address}</p>
                <p className="text-slate-700 font-medium">{location.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </div>
  );
};

export default Contact;