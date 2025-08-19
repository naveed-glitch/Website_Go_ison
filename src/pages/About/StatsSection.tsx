// components/StatsSection.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 1, label: ' Building a foundation of trust and client success..', suffix: '+ year' },
  { value:100, label: ' In our growing talent network across industries.', suffix: '+ Professionals' },
  { value: 50, label: 'Delivering tailored staffing solutions to diverse businesses.', suffix: '+ Clients Served' },
  { value: 3, label: ' Strategically positioned to support clients with global ambitions.', suffix: ' Locations' },
];

const StatsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={item}
            >
              <div className="text-3xl font-bold mb-2">
                <Counter from={0} to={stat.value} />{stat.suffix}
              </div>
              <div className="text-blue-200 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Counter component for animated numbers
const Counter: React.FC<{ from: number; to: number }> = ({ from, to }) => {
  const [count, setCount] = React.useState(from);
  
  React.useEffect(() => {
    const duration = 2000;
    const increment = (to - from) / (duration / 16);
    let current = from;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [from, to]);
  
  return <>{count}</>;
};

export default StatsSection;