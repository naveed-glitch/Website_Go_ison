import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurStorySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  const timeline = [
    {
      year: "2001",
      title: "The Beginning",
      description: "Born from the idea that staffing could be less about financial gain and corporate in-roads, and more about genuine relationships and meaningful impact."
    },
    {
      year: "2005",
      title: "First Milestone",
      description: "Expanded to multiple cities across the United States, establishing a national presence."
    },
    {
      year: "2012",
      title: "Going Global",
      description: "Opened our first international office, marking the beginning of our global expansion."
    },
    {
      year: "2023",
      title: "Today",
      description: "A purpose-driven company dedicated to empowering people through the value of opportunity."
    }
  ];

  return (
    <div ref={sectionRef} className="h-[400vh] relative bg-gray-50">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-5xl font-bold text-gray-800 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We've always done things differently. Born from the idea that staffing could be less about 
              financial gain and corporate in-roads, and more about genuine relationships and meaningful impact.
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="absolute top-0 left-0 h-full w-[400%] flex"
          style={{ x }}
        >
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className="w-1/4 h-full flex items-center justify-center px-12"
            >
              <div className="max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <motion.div 
                  className="text-cyan-500 text-3xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {item.year}
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurStorySection;