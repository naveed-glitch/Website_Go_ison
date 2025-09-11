import { HeroSection } from './HeroSection'
import { FounderSection } from './FounderSection'
import { ExecutiveTeam } from './ExecutiveTeam'
import { useEffect } from 'react';

function OurTeam() {
  useEffect(() => {
      // Reset scroll position when this page mounts
      window.scrollTo(0, 0);
    }, []);
  return (
     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <HeroSection />
      <FounderSection />
      <ExecutiveTeam />
    </div>
  )
}

export default OurTeam
