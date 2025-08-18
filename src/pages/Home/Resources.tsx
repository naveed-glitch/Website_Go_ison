import React, { useState, useEffect, useRef } from 'react';
import resourcesData from '../../constants/resources'; 



export type ResourceType = 'ARTICLE' | 'SIGN' | 'NEWS' | 'REPORT' | 'HOME';

export interface ResourceItem {
  id: number;
  type: ResourceType;
  title: string;
  description: string;
  link: string;
  linkText: string;
  writtenBy: string;
}


const ResourcesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resources = resourcesData;

  // Group resources by type for the grid layout
 const articles = resources.filter(r => r.type === 'ARTICLE');
const homeSign = resources.filter(r => r.type === 'HOME' || r.type === 'SIGN');
const news = resources.filter(r => r.type === 'NEWS');
const reports = resources.filter(r => r.type === 'REPORT');


  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % resources.length);
      }, 5000);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, resources.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + resources.length) % resources.length);
    setIsPaused(true);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % resources.length);
    setIsPaused(true);
  };

  // Get the current resource for each category
  const currentArticle1 = articles[currentIndex % articles.length];
  const currentArticle2 = articles[(currentIndex + 1) % articles.length];
  const currentHomeSign1 = homeSign[currentIndex % homeSign.length];
  const currentHomeSign2 = homeSign[(currentIndex + 1) % homeSign.length];
  const currentNews = news[currentIndex % news.length];
  const currentReport = reports[currentIndex % reports.length];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Resources</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Here is our collection of the most relevant workplace and employer insights. 
            Learn more about our staffing solutions and the best recruitment practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          {/* Left Column */}
          <div className="space-y-10">
            <ResourceCard 
              resource={currentArticle1} 
              className="border-l-4 border-blue-500"
            />
            
            <ResourceCard 
              resource={currentArticle2} 
              className="border-l-4 border-green-500"
            />
            
            <div className="flex flex-wrap gap-4">
              <ResourceCard 
                resource={currentHomeSign1} 
                className="border-l-4 border-purple-500 flex-1 min-w-[200px]"
              />
              <ResourceCard 
                resource={currentHomeSign2} 
                className="border-l-4 border-orange-500 flex-1 min-w-[200px]"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-10">
            <ResourceCard 
              resource={currentNews} 
              className="border-l-4 border-red-500"
            />
            
            <ResourceCard 
              resource={currentReport} 
              className="border-l-4 border-teal-500"
            />
            
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-96 group">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1698006150156-3779d5c2306c?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Resource"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Overlay on hover */}
  <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <h3 className="text-2xl font-bold text-white mb-4">
      {currentNews?.title || "Explore More Resources"}
    </h3>
    <p className="text-white mb-6 px-4">
      {
        "Discover the latest news and updates related to workplace and recruitment insights."}
    </p>
    <a
      href="/news"
      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition text-center"
    >
      View More
    </a>
  </div>
</div>

          </div>
          
          {/* Navigation Controls */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition"
              aria-label="Previous resource"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {resources.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPaused(true);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to resource ${idx + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition"
              aria-label="Next resource"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


// Resource Card Component
interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className = "" }) => {
  if (!resource) return null;

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg ${className}`}>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
            resource.type === 'ARTICLE' ? 'bg-blue-100 text-blue-800' :
            resource.type === 'HOME' ? 'bg-purple-100 text-purple-800' :
            resource.type === 'SIGN' ? 'bg-orange-100 text-orange-800' :
            resource.type === 'NEWS' ? 'bg-red-100 text-red-800' :
            'bg-teal-100 text-teal-800'
          }`}
        >
          {resource.type}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>

        {resource.description && (
          <p className="text-gray-600 mb-4">{resource.description}</p>
        )}

        <a
          href="/news"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ResourcesSection;
