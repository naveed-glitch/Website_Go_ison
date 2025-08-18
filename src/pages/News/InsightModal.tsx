import type { Insight } from '@/constants/insightsAndTrends';
import { insightsData } from '@/constants/insightsAndTrends';
import React, { useEffect } from 'react';

interface InsightModalProps {
  insight: Insight | null;
  onClose: () => void;
}

const InsightModal: React.FC<InsightModalProps> = ({ insight, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!insight) return null;

  // Filter related insights (same category, exclude the current one)
  const relatedInsights = insightsData.filter(
    (item) => item.id !== insight.id && item.category === insight.category
  ).slice(0, 3); // show max 3

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-64">
          {insight.imageUrl ? (
            <img src={insight.imageUrl} alt={insight.title} className="w-full h-full object-cover rounded-t-2xl" />
          ) : (
            <div className="bg-gray-200 border-2 border-dashed w-full h-full rounded-t-2xl" />
          )}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
            <div className="flex items-center text-white text-sm">
              <span>{insight.date}</span>
              <span className="mx-2">•</span>
              <span>{insight.author}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mt-2">{insight.title}</h2>
          </div>
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
            {insight.category}
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-700 text-lg mb-6">{insight.content}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {insight.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {relatedInsights.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold mb-4">Related Insights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedInsights.map((related) => (
                  <div
                    key={related.id}
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                        window.location.hash = `#insight-${related.id}`;
                      }, 300);
                    }}
                  >
                    {related.imageUrl ? (
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed w-16 h-16 rounded-lg" />
                    )}
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-500">{related.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightModal;
