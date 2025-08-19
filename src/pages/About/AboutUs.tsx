import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import StorySection from './StorySection'
import TimelineSection from './TimelineSection'
import FounderSection from './FounderSection'
import TeamSection from './TeamSection'
import AboutSection from './AboutSection'

function AboutUs() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection />
      <AboutSection />
      {/* <TeamSection/> */}
      <StatsSection />
      <StorySection />
      <TimelineSection />
      <FounderSection />
    
    </div>
      
    </div>
  )
}

export default AboutUs
