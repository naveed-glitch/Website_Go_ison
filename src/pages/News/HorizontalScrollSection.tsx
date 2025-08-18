import { useRef } from 'react';
import NewsCard from './NewsCard';

const HorizontalScrollSection = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

const newsItems = [
  {
    id: 1,
    title: "Demand for IT Contractors Surges in Q2 2025",
    category: "Staffing Trends",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Tech office
    link: "https://www.techrepublic.com/article/demand-for-it-contractors-surges/"
  },
  {
    id: 2,
    title: "Top 5 Skills IT Recruiters Are Looking For Today",
    category: "Hiring Insights",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Coding skills
    link: "https://builtin.com/recruiting/it-skills-in-demand"
  },
  {
    id: 3,
    title: "Why Remote Tech Teams Are Still in High Demand",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // Remote work
    link: "https://hbr.org/2022/05/why-remote-tech-teams-are-in-high-demand"
  },
  {
    id: 4,
    title: "How AI Is Changing IT Recruitment Strategies",
    category: "Tech & AI",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // AI/tech
    link: "https://www.forbes.com/sites/forbestechcouncil/2024/03/10/how-ai-is-changing-it-recruitment-strategies/"
  },
  {
    id: 5,
    title: "Navigating Compliance When Hiring Global IT Talent",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Global compliance
    link: "https://www.hrexchangenetwork.com/hr-talent-management/articles/compliance-hiring-global-it-talent"
  },
  {
    id: 6,
    title: "Upskilling Your Workforce: A Strategic Imperative",
    category: "Workforce Strategy",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Upskilling
    link: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/upskilling-workforce-strategy"
  },
  {
    id: 7,
    title: "Freelance Developers vs. Full-Time Engineers: What's Right for You?",
    category: "Hiring Models",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // Freelance vs full-time
    link: "https://www.toptal.com/freelance/freelancer-vs-full-time"
  },
  {
    id: 8,
    title: "The Role of Staffing Firms in the Agile Development Era",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3023?auto=format&fit=crop&w=800&q=80", // Agile teams
    link: "https://www.cio.com/article/286494/agile-development-role-of-staffing-firms.html"
  }
];


  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest in IT Staffing</h2>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={scrollLeft}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={scrollRight}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex overflow-x-auto gap-6 pb-10 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-80 scroll-snap-align-start"
              style={{ minWidth: '300px' }}
            >
              <NewsCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade effect on edges */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HorizontalScrollSection;
