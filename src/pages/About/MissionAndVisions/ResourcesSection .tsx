import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

type Resource = {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  imageUrl: string;
};

const ResourcesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
const resources: Resource[] = [
  {
    id: 1,
    title: "The Future of Tech Staffing",
    category: "whitepaper",
    description: "Explore emerging trends and technologies shaping the future of IT staffing and recruitment.",
    date: "May 15, 2023",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661692802103-aee47324d192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwRnV0dXJlJTIwb2YlMjBUZWNoJTIwU3RhZmZpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Building Diverse Teams",
    category: "article",
    description: "Strategies for creating inclusive workplaces and building diverse, high-performing teams.",
    date: "April 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Remote Work Best Practices",
    category: "guide",
    description: "Comprehensive guide to implementing and managing successful remote work policies.",
    date: "March 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "2023 Hiring Trends Report",
    category: "report",
    description: "Analysis of current hiring trends across industries and predictions for the coming year.",
    date: "February 22, 2023",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664014655044-1a56a33b134c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDIwMjMlMjBIaXJpbmclMjBUcmVuZHMlMjBSZXBvcnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    title: "Candidate Experience Optimization",
    category: "whitepaper",
    description: "How to improve your candidate experience to attract and retain top talent.",
    date: "January 18, 2023",
    imageUrl: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Tech Salary Benchmark Guide",
    category: "guide",
    description: "Comprehensive salary data for technology roles across different markets and experience levels.",
    date: "December 5, 2022",
    imageUrl: "https://images.unsplash.com/photo-1563296299-1e2092247cb4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'whitepaper', name: 'Whitepapers' },
    { id: 'article', name: 'Articles' },
    { id: 'guide', name: 'Guides' },
    { id: 'report', name: 'Reports' }
  ];

  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources & Insights</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Explore our latest research, insights, and thought leadership in the staffing industry
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <button
                    className="text-blue-600 font-medium hover:text-blue-800 transition"
                    onClick={() => {
                      navigate('/news');
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
