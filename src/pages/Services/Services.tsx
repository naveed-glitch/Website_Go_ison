// src/app/services/page.tsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
 FaUsers,  FaChartLine, 
   FaStar, FaQuoteLeft, FaChevronRight, 
  FaSearch, FaUserCheck, FaRocket, FaSyncAlt, FaShieldAlt,
  FaBuilding,
  FaCar,
  FaHeadset,
  FaLightbulb,
  FaTools,
  FaLandmark,
  FaHandshake,
  FaStethoscope,
  FaHotel,
  FaIndustry
} from "react-icons/fa";
import { Link } from "react-router-dom";


type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  date: string;
};

const Services = () => {

      const containerRef = useRef<HTMLDivElement>(null);
      const [isPaused, setIsPaused] = useState(false);
  // Industries data
const industriesRow1 = [
  { name: "Administrative", icon: <FaBuilding /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Customer Service", icon: <FaHeadset /> },
  { name: "Education", icon: <FaLightbulb /> },
  { name: "Energy", icon: <FaChartLine /> },
  { name: "Engineering", icon: <FaTools /> },
];

const industriesRow2 = [
  { name: "Financial Services", icon: <FaHandshake /> },
  { name: "Government", icon: <FaLandmark /> },
  { name: "Healthcare", icon: <FaStethoscope /> },
  { name: "Hospitality", icon: <FaHotel /> },
  { name: "Human Resources (HR)", icon: <FaUsers /> },
  { name: "Industrial", icon: <FaIndustry /> },
];


  // Testimonials
 const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechNova Inc.",
    role: "HR Director",
    content: "Talent Bridge transformed our hiring process. We found 5 top-tier developers in just 2 weeks, saving us countless hours and resources.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    date: "May 15, 2024"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Global Solutions",
    role: "CTO",
    content: "The talent pool provided by Talent Bridge was exceptional. We've reduced our time-to-hire by 65% and improved retention rates significantly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "April 28, 2024"
  },
  {
    id: 3,
    name: "Jennifer Kim",
    company: "InnovateX",
    role: "Talent Acquisition Lead",
    content: "Working with Talent Bridge has been a game-changer. Their understanding of our industry needs and quick response time is unparalleled.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    date: "June 3, 2024"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Enterprise Partners",
    role: "Operations Manager",
    content: "The quality of candidates exceeded our expectations. Talent Bridge's screening process ensures we only see the most qualified professionals.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    date: "March 12, 2024"
  },
  {
    id: 5,
    name: "Emily Chen",
    company: "FutureTech",
    role: "CEO",
    content: "Talent Bridge helped us scale our team during a critical growth phase. Their staffing solutions are both efficient and cost-effective.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    date: "May 30, 2024"
  },
  {
    id: 6,
    name: "Robert Williams",
    company: "DataSystems Ltd",
    role: "Engineering Director",
    content: "The technical assessments provided by Talent Bridge saved us weeks of interview time. We found the perfect candidate on the first try.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    date: "April 5, 2024"
  }
];

  // Services
  const services = [
    {
      title: "Candidate Sourcing",
      icon: <FaSearch className="text-blue-500" />,
      description: "Advanced sourcing techniques to find the perfect candidates for your specific needs.",
      link: "/services/candidate-sourcing"
    },
    {
      title: "Talent Acquisition",
      icon: <FaUserCheck className="text-blue-500" />,
      description: "End-to-end recruitment process to secure top IT talent for your organization.",
      link: "/services/talent-acquisition"
    },
    {
      title: "Contract Staffing",
      icon: <FaSyncAlt className="text-blue-500" />,
      description: "Flexible staffing solutions for project-based work and temporary positions.",
      link: "/services/contract-staffing"
    },
    {
      title: "Executive Search",
      icon: <FaRocket className="text-blue-500" />,
      description: "Specialized recruitment for C-suite and senior technology leadership roles.",
      link: "/services/executive-search"
    },
    {
      title: "Managed Services",
      icon: <FaShieldAlt className="text-blue-500" />,
      description: "Comprehensive outsourcing of your entire recruitment function.",
      link: "/services/managed-services"
    },
    {
      title: "Workforce Consulting",
      icon: <FaChartLine className="text-blue-500" />,
      description: "Strategic guidance to optimize your talent acquisition and retention strategies.",
      link: "/services/workforce-consulting"
    }
  ];

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Stagger animation for children
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };


    useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const container = containerRef.current;
    let scrollLeft = 0;
    const speed = 0.7; // px per frame, adjust for smoothness/speed

    let animationFrameId: number;

    const animate = () => {
      scrollLeft += speed;
      if (scrollLeft >= container.scrollWidth / 2) {
        scrollLeft = 0;
      }
      container.scrollLeft = scrollLeft;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                variants={fadeIn}
              >
                Strategic IT Staffing Solutions for the Digital Era
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 max-w-2xl"
                variants={fadeIn}
              >
                Connecting exceptional tech talent with innovative companies across all industries. Our tailored staffing solutions drive your business forward.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Link to="/contact" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
                  Contact us <FaChevronRight className="ml-2 text-sm" />
                </Link>
              
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 aspect-square flex items-center justify-center"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-56 h-56 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
<section className="py-20 px-4 sm:px-6 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Staffing All Industries & Funds
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        While we take pride in finding qualified candidates for each and every position, these are some of the industries and functions where our staffing agency has deep expertise.
      </p>
    </div>

    {/* TOP ROW: Scrolls Left */}
    <div className="overflow-hidden mb-8">
      <div className="flex w-max gap-6 scroll-left">
        {[...industriesRow1, ...industriesRow1].map((industry, index) => (
          <div
            key={`top-${index}`}
            className="min-w-[200px] bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 group hover:shadow-lg flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200">
              <span className="text-blue-600 text-xl">{industry.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-700">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM ROW: Scrolls Right */}
    <div className="overflow-hidden">
      <div className="flex w-max gap-6 scroll-right">
        {[...industriesRow2, ...industriesRow2].map((industry, index) => (
          <div
            key={`bottom-${index}`}
            className="min-w-[200px] bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 group hover:shadow-lg flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200">
              <span className="text-blue-600 text-xl">{industry.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-700">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Comprehensive Staffing Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tailored solutions to meet your unique staffing challenges and business objectives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-400 h-2"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <span className="text-blue-600 text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partner Section */}
  <section className="py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-1 inline-block mb-6">
          <div className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold">
            Technology Partnership
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Your Strategic Technology Staffing Partner
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We don't just fill positions - we become an extension of your team.
          Our technology staffing solutions are designed to align with your
          business goals and technical requirements.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaUsers className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dedicated Expertise
              </h3>
              <p className="text-gray-600">
                Specialized recruiters who understand your technology stack and
                business domain.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaRocket className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Scalable Solutions
              </h3>
              <p className="text-gray-600">
                Flexible staffing models that grow with your business needs.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaShieldAlt className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous vetting process ensuring only top-tier talent reaches
                you.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Updated Right Section */}
 <motion.div
  className="relative bg-transparent border-2 border-dashed rounded-xl w-full h-96"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Animated Logos */}
  <div className="relative w-full h-full">
    {[
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm7h3wcfXJQvtxNkG6r5N--9DbneABGXkbQ&s",
        alt: "Google",
        x: 10,
        y: 20,
      },
      {
        src: "https://freepnglogo.com/images/all_img/1708533802microsoft-logo-transparent.png",
        alt: "Microsoft",
        x: 45,
        y: 55,
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNThMg30NNbdy3GFt9y1bFDqG9t8Pa58Y2A&s",
        alt: "Amazon",
        x: 60,
        y: 25,
      },
      {
        src: "https://pngimg.com/d/apple_logo_PNG19688.png",
        alt: "Apple",
        x: 80,
        y: 75,
      },
      {
        src: "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png",
        alt: "IBM",
        x: 20,
        y: 75,
      },
      {
        src: "https://brandlogos.net/wp-content/uploads/2014/10/adobe-logo-2017.png",
        alt: "Adobe",
        x: 45,
        y: 10,
      },
      {
        src: "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1.png",
        alt: "Oracle",
        x: 80,
        y: 40,
      },
    ].map((logo, index) => (
      <motion.img
        key={index}
        src={logo.src}
        alt={logo.alt}
        className="absolute w-24 h-24" // Increased size of the logos
        style={{
          left: `${logo.x}%`,
          top: `${logo.y}%`,
        }}
        animate={{
          y: [0, -15, 0], // Enhanced vertical animation range
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: index * 0.5,
        }}
      />
    ))}
  </div>
</motion.div>

    </div>
  </div>
</section>

    {/* Testimonials Section */}
<section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Infinite Scroll Container */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden hide-scrollbar h-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollBehavior: "auto" }} // disable smooth scroll for manual scrollLeft
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 shadow-lg hover:shadow-2xl transition-transform duration-300 h-[400px] "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <FaQuoteLeft className="text-blue-300 text-3xl mb-6" />
              <p className="text-lg mb-8 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-blue-200">{testimonial.company}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonial.rating ? "text-yellow-400" : "text-blue-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-900 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your IT Staffing Strategy?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with us to access top IT talent and innovative staffing solutions tailored to your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
              Get Started Today <FaChevronRight className="ml-3 text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;