// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const OurStorySection = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"]
//   });
  
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
//   const timeline = [
//     {
//       year: "2024",
//       title: "The Beginning",
//       description: "Founded with a vision to make staffing about genuine partnerships and meaningful impact."
//     },
//     {
//       year: "2025",
//       title: "Building Trust",
//       description: "Formed strong relationships across industries, delivering tailored workforce solutions to clients."
//     },
//     {
//       year: "2026",
//       title: "Expanding Horizons",
//       description: "Stepped into international markets, extending our reach and capabilities globally."
//     },
//     {
//       year: "2025",
//       title: "Today",
//       description: "A purpose-driven company committed to empowering businesses and professionals through innovation and opportunity."
//     }
//   ];

//   return (
//     <div ref={sectionRef} className="h-[400vh] relative bg-gray-50">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full flex items-center">
//           <div className="container mx-auto px-4">
//             <motion.h2 
//               className="text-5xl font-bold text-gray-800 mb-12"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               Our Story
//             </motion.h2>
            
//             <motion.p 
//               className="text-xl text-gray-600 max-w-3xl mb-16"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               At GoisOn, we’ve always believed staffing should be about more than filling positions—it should be about building meaningful relationships and driving lasting impact.

// Our journey began with a simple vision: to connect businesses with the right talent in a smarter, more innovative way. From those early steps to our growing global presence today, one thing has never changed—our commitment to people, progress, and partnerships.
//             </motion.p>
//           </div>
//         </div>
        
//         <motion.div 
//           className="absolute top-0 left-0 h-full w-[400%] flex"
//           style={{ x }}
//         >
//           {timeline.map((item, index) => (
//             <div 
//               key={index} 
//               className="w-1/4 h-full flex items-center justify-center px-12"
//             >
//               <div className="max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
//                 <motion.div 
//                   className="text-cyan-500 text-3xl font-bold mb-4"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   {item.year}
//                 </motion.div>
                
//                 <motion.h3 
//                   className="text-3xl font-bold text-gray-800 mb-4"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                   {item.title}
//                 </motion.h3>
                
//                 <motion.p 
//                   className="text-lg text-gray-600"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                 >
//                   {item.description}
//                 </motion.p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurStorySection;

import { useRef } from 'react';
import { motion } from 'framer-motion';

const OurStorySection = () => {
  const sectionRef = useRef(null);

  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Founded with a vision to make staffing about genuine partnerships and meaningful impact."
    },
    {
      year: "2025",
      title: "Building Trust",
      description: "Formed strong relationships across industries, delivering tailored workforce solutions to clients."
    },
    {
      year: "2026",
      title: "Expanding Horizons",
      description: "Stepped into international markets, extending our reach and capabilities globally."
    },
    {
      year: "2025",
      title: "Today",
      description: "A purpose-driven company committed to empowering businesses and professionals through innovation and opportunity."
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-gray-50 py-20">
      {/* Heading + Paragraph */}
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-5xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At GoisOn, we’ve always believed staffing should be about more than filling positions—it should be about building meaningful relationships and driving lasting impact.
          <br /><br />
          Our journey began with a simple vision: to connect businesses with the right talent in a smarter, more innovative way. From those early steps to our growing global presence today, one thing has never changed—our commitment to people, progress, and partnerships.
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {timeline.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-cyan-500 text-3xl font-bold mb-4">{item.year}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-lg text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurStorySection;