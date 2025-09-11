import { useEffect } from "react"
import AboutSection from "./AboutSection "
import HeroSection from "./HeroSection "
import HistoryTimeline from "./HistoryTimeline "
import MissionVision from "./MissionVision "
import ResourcesSection from "./ResourcesSection "
import TeamSection from "./TeamSection"

function MissionNVision() {
  useEffect(() => {
      // Reset scroll position when this page mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='bg-gray-50'>
        <HeroSection />
      <AboutSection />
      <MissionVision />
      {/* <HistoryTimeline /> */}
      {/* <ResourcesSection /> */}
      {/* <TeamSection/> */}
      
    </div>
  )
}

export default MissionNVision
