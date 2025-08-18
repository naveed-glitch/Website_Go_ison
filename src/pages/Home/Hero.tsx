
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import {Link} from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')", // Replace with your image path
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Left Card */}
          <Parallax speed={-15}>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smarter Workforce Solutions for Your Business</h2>
              <p className="text-gray-600 mb-6">
                Go Ison partners with forward-thinking companies to provide tailored recruitment and staffing
solutions. We help you build high-performing teams that drive long-term success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/contact'}>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">Partner with Go Ison today</Button>
                </Link>
                
                {/* <Button variant="outline">View Employer Services</Button> */}
              </div>
            </motion.div>
          </Parallax>

          {/* Right Card */}
          {/* <Parallax speed={15}>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for a job?</h2>
              <p className="text-gray-600 mb-6">
                100,000+ jobs worldwide. Visit TalentBridge to find your perfect match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">Go to TalentBridge India</Button>
                <Button variant="outline">Find a Job</Button>
              </div>
            </motion.div>
          </Parallax> */}
        </div>
      </div>
    </section>
  )
}
