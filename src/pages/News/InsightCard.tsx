import type { Insight } from '@/constants/insightsAndTrends';
import React from 'react';


interface InsightCardProps {
  insight: Insight;
  onClick: () => void;
}

const InsightCard: React.FC<InsightCardProps> = React.memo(({ insight, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48">
        {/* Image */}
        <img
          src={insight.imageUrl}
          alt={insight.title}
          className="w-full h-full object-cover rounded-t-xl"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-t-xl">
          <span className="text-white font-medium">Read more →</span>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {insight.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span>{insight.date}</span>
          <span className="mx-2">•</span>
          <span>{insight.author}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {insight.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {insight.description}
        </p>
        
        <div className="flex justify-between items-center">
          <button className="text-blue-600 font-medium flex items-center group-hover:underline">
            View Insight
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default InsightCard;
