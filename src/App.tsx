import { Route, Routes } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Home from "./pages/Home/Home"
import { ParallaxProvider } from "react-scroll-parallax"
import Services from "./pages/Services/Services"
import WhatWeDo from "./pages/Services/WhatWeDo"
import CandidateSourcing from "./pages/Services/CandidateSourcing"
import Jobs from "./pages/Jobs/Jobs"
import Contact from "./pages/Contact/Contact"
import NewsPage from "./pages/News/NewsPage"
import AboutUs from "./pages/About/AboutUs"
import WhoWeAre from "./pages/About/WhoWeAre/WhoWeAre"
import MissionNVision from "./pages/About/MissionAndVisions/MissionNVision"
import OurTeam from "./pages/About/OurTeam/OurTeam"

function App() {
  return (
    <ParallaxProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/our-mission" element={<MissionNVision />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/services/what-we-do" element={<WhatWeDo />} />
          <Route path="/services/candidate-sourcing" element={<CandidateSourcing />} />
          {/* <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<NewsPage />} /> */}
        </Routes>
      </Layout>
    </ParallaxProvider>
  )
}

export default App
