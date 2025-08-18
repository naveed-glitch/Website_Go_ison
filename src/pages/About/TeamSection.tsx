// ServiceCards.tsx

import { motion } from "framer-motion";
import { Users, Handshake, Lightbulb } from "lucide-react"; // Shadcn/Lucide icons
import type { FC } from "react";

// Animation variants for container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22 },
  },
};

const cardVariants = {
  hidden: { y: 36, opacity: 0, scale: 1 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hover: {
    scale: 1.045,
    boxShadow: "0 8px 32px 0 rgba(37, 99, 235, 0.10)",
    transition: { duration: 0.22 },
  },
};

export const TeamSection: FC = () => (
  <motion.div
    className="w-full mt-48 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Card 1: Expert IT Talent */}
    <motion.div
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center transition-colors"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Users className="text-blue-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
        Expert IT Talent
      </h3>
      <p className="text-gray-600 text-center">
        We specialize in identifying top-tier IT professionals with niche skills across software development, cloud computing, cybersecurity, and data science.
      </p>
    </motion.div>

    {/* Card 2: Client-Centric Solutions */}
    <motion.div
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center transition-colors"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Handshake className="text-blue-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
        Client-Centric Solutions
      </h3>
      <p className="text-gray-600 text-center">
        We partner with organizations to understand their unique culture and technical requirements, delivering candidates who are the perfect fit.
      </p>
    </motion.div>

    {/* Card 3: Innovative Matching */}
    <motion.div
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center transition-colors"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Lightbulb className="text-blue-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
        Innovative Matching
      </h3>
      <p className="text-gray-600 text-center">
        Our proprietary matching algorithm and industry expertise ensure we connect the right talent with the right opportunities faster and more efficiently.
      </p>
    </motion.div>
  </motion.div>
);

export default TeamSection;
