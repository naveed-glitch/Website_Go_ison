import { insightsData, type Insight } from '@/constants/insightsAndTrends';
import { useState } from 'react';
import HeroSection from './HeroSection';
import InsightCard from './InsightCard';
import HorizontalScrollSection from './HorizontalScrollSection';
import InsightModal from './InsightModal';

const NewsPage = () => {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  // Scroll helper function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Pass scroll handler to HeroSection */}
     <HeroSection
  onExploreInsights={() => scrollToSection('insights-section')}
  onSubscribeClick={() => scrollToSection('subscribe-section')}
/>

      <section
        id="insights-section"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hiring Trends & Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the latest research and analysis shaping the future of work and talent acquisition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsData.map(insight => (
              <InsightCard
                key={insight.id}
                insight={insight}
                onClick={() => setSelectedInsight(insight)}
              />
            ))}
          </div>
        </div>
      </section>

      <HorizontalScrollSection />

      <section
        id="subscribe-section"
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Informed</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and receive the latest hiring insights and industry trends directly to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => scrollToSection('subscribe-section')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedInsight && (
        <InsightModal
          insight={selectedInsight}
          onClose={() => setSelectedInsight(null)}
        />
      )}
    </div>
  );
};

export default NewsPage;
