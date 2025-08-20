// src/components/TestimonialSection.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

// Define testimonial type
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

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechNova Inc.",
    role: "HR Director",
    content: "GoisOn transformed our hiring process. We found 5 top-tier developers in just 2 weeks, saving us countless hours and resources.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    date: "May 15, 2024"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Global Solutions",
    role: "CTO",
    content: "The talent pool provided by GoisOn was exceptional. We've reduced our time-to-hire by 65% and improved retention rates significantly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "April 28, 2024"
  },
  {
    id: 3,
    name: "Jennifer Kim",
    company: "InnovateX",
    role: "Talent Acquisition Lead",
    content: "Working with GoisOn has been a game-changer. Their understanding of our industry needs and quick response time is unparalleled.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    date: "June 3, 2024"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Enterprise Partners",
    role: "Operations Manager",
    content: "The quality of candidates exceeded our expectations. GoisOn's screening process ensures we only see the most qualified professionals.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    date: "March 12, 2024"
  },
  {
    id: 5,
    name: "Emily Chen",
    company: "FutureTech",
    role: "CEO",
    content: "GoisOn helped us scale our team during a critical growth phase. Their staffing solutions are both efficient and cost-effective.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    date: "May 30, 2024"
  },
  {
    id: 6,
    name: "Robert Williams",
    company: "DataSystems Ltd",
    role: "Engineering Director",
    content: "The technical assessments provided by GoisOn saved us weeks of interview time. We found the perfect candidate on the first try.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    date: "April 5, 2024"
  }
];

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate testimonials for infinite effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // Handle scroll animation
  useEffect(() => {
    if (!containerRef.current || isPaused) return;
    
    const container = containerRef.current;
    let animationFrameId: number;
    let scrollPosition = 0;
    const speed = 0.5; // Adjust scroll speed
    
    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from companies that transformed their workforce with our staffing solutions
          </motion.p>
        </div>
        
        {/* Testimonial cards container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden py-8 gap-6 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[350px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{testimonial.rating}.0</span>
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 border-2 border-blue-500">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        

      </div>
      
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default TestimonialSection;