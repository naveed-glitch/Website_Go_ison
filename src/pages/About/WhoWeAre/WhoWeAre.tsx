import HeroSection from './HeroSection'
import ParticleTextSection from './ParticleTextSection'
import FullScreenCarousel from './FullScreenCarousel'
import OurStorySection from './OurStorySection'
import SharedValuesSection from './SharedValuesSection'
import OurPurposeSection from './OurPurposeSection'
import WhatMakesUsSection from './WhatMakesUsSection'

function WhoWeAre() {
  return (
    <div className="font-sans">
      <HeroSection/>
      {/* <ParticleTextSection /> */}
      {/* <FullScreenCarousel /> */}
      <OurStorySection/>
      <SharedValuesSection />
      <OurPurposeSection/>
      <WhatMakesUsSection />
    </div>
  )
}

export default WhoWeAre
