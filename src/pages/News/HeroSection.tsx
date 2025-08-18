import { useEffect, useRef } from 'react';

type HeroSectionProps = {
  onExploreInsights: () => void;
  onSubscribeClick?: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreInsights,
  onSubscribeClick,
}) => {
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (accentRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        accentRef.current.style.setProperty('--x', `${x}`);
        accentRef.current.style.setProperty('--y', `${y}`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Accent Background */}
      <div
        ref={accentRef}
        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-gray-900"
        style={{
          mask: 'radial-gradient(150px at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), transparent 0%, white 100%)',
          WebkitMask:
            'radial-gradient(150px at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), transparent 0%, white 100%)',
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 40}px`,
            height: `${10 + Math.random() * 40}px`,
            animation: `float ${8 + Math.random() * 12}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="inline-block animate-fade-in-down">Insights</span>
          <span className="text-blue-300 mx-3 animate-pulse">•</span>
          <span className="inline-block animate-fade-in-down">Trends</span>
          <span className="text-blue-300 mx-3 animate-pulse">•</span>
          <span className="inline-block animate-fade-in-down">Analysis</span>
        </h1>

        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up">
          Stay ahead with the latest industry insights and hiring trends shaping the future of work
        </p>

        <div className="flex justify-center gap-4 animate-fade-in-up">
          <button
            onClick={onExploreInsights}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Explore Insights
          </button>
          <button
            onClick={onSubscribeClick}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
