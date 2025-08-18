import { HeroSection } from './HeroSection'
import { FounderSection } from './FounderSection'
import { ExecutiveTeam } from './ExecutiveTeam'

function OurTeam() {
  return (
     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <HeroSection />
      <FounderSection />
      <ExecutiveTeam />
    </div>
  )
}

export default OurTeam
