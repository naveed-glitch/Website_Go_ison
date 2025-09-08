import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSplit() {
  return (
    <section className="bg-blue-100 py-20 px-6 lg:px-20 w-full">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">

    {/* Left: Text Content */}
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-gray-800 flex flex-col justify-center p-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
        More than just a recruitment partner
      </h2>
      <p className="text-gray-600 mb-4">
        At GoisOn, we go beyond filling positions—we build long-term partnerships that fuel your business growth.
      </p>
      <p className="text-gray-600 mb-4">
        Whether you need a single hire or an entire team, we deliver scalable workforce solutions tailored to your goals. Our proven expertise ensures you get the right professionals, on time and aligned with your company culture.
      </p>
      <p className="text-gray-600 mb-6">
        From startups to established enterprises, we help businesses across industries reduce hiring costs, improve retention, and accelerate success.
      </p>

      {/* Animated Button */}
      <Link to={'/contact'}>
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "#1E3A8A",
          color: "#FFFFFF",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
      >
        Partner With Us
      </motion.button>
      </Link>
    </motion.div>

    {/* Right: Full Image */}
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full h-full"
    >
      <img
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1200&q=80"
        alt="Modern office with team collaboration"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</section>
  );
}
