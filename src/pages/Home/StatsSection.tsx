import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "Trusted Talent Partner",
    description: "Specialized in sourcing the right professionals across industries",
  },
  {
    value: "Scalable Workforce Solutions ",
    description: "From single hires to large-scale recruitment projects",
  },
  {
    value: "Proven Expertise",
    description: "Supporting U.S. businesses with strategic staffing solutions.",
  },
];

// More exaggerated movement
const blobVariants = {
  animate: {
    scale: [1, 1.15, 0.95, 1.1, 1],
    rotate: [0, 15, -15, 10, 0],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const StatsSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row justify-center items-center gap-16 py-24 bg-[#f9fafb]"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="relative text-center w-[280px] h-[240px] flex flex-col justify-center items-center px-6 py-10 overflow-hidden"
        >
          {/* Animated blob */}
          <motion.div
            className="absolute inset-0 z-0 flex justify-center items-center"
            variants={blobVariants}
            animate="animate"
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[320px] h-[320px] text-blue-100 fill-current opacity-70"
            >
              <path
                d="M54.8,-59.6C70.6,-45.6,84.1,-22.8,82.4,-2.7C80.7,17.3,63.9,34.6,48.1,49.1C32.3,63.6,16.2,75.3,-2.6,77C-21.5,78.7,-43.1,70.4,-56.1,55.3C-69.1,40.2,-73.5,18.1,-72.1,-3.1C-70.6,-24.3,-63.2,-44.6,-49.9,-58.8C-36.5,-73.1,-18.2,-81.2,1.5,-82.5C21.3,-83.9,42.6,-78.4,54.8,-59.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          {/* Stat content */}
          {/* <p className="text-4xl font-bold text-blue-600 z-10">{stat.value}</p> */}
          <p >{stat.value}</p>
          <p className="mt-2 text-blue-600 text-sm z-10 max-w-[220px]">{stat.description}</p>
        </div>
      ))}
    </motion.section>
  );
};

export default StatsSection;
