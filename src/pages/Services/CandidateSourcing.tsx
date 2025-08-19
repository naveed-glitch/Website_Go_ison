// src/components/CandidateSourcingPage.tsx
import  { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight, User, Search, Users, BarChart, Settings, Check } from 'lucide-react';
import CTASection from '../Home/ContactCTA';
import { useNavigate } from 'react-router-dom';

const CandidateSourcing = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);





  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      {/* Hero Section with Parallax and Accent Animation */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/20 to-gray-900/30"></div>
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop')] bg-cover bg-center"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Content with Accent Animation */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          animate={heroControls}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            Candidate Sourcing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            Innovative hiring solutions at your fingertips. Professional recruiters at your side.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
          >
            <button onClick={()=>{navigate('/contact')}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center mx-auto transition-all duration-300 transform hover:scale-105">
              Get Started <ChevronRight className="ml-2" />
            </button>
          </motion.div>
        </motion.div>

        {/* Floating accent elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-blue-500 opacity-70"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-blue-400 opacity-50"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </section>

      {/* How We Work Together Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How we work together with your business</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
         <motion.div
  className="grid md:grid-cols-2 gap-12 items-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <div>
    <p className="text-xl text-gray-600 mb-6">
      At Robert Half, we bring technology and people together to help you find talent and solve your business challenges faster – whether you've used a talent solutions provider before or not.
    </p>
    <div className="flex flex-col gap-4">
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <User className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Expert Recruiters</h3>
          <p className="text-gray-600">Industry-specialized recruiters with deep market knowledge</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Search className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Advanced Sourcing</h3>
          <p className="text-gray-600">Proprietary technology to identify top talent efficiently</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Users className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Diverse Talent Pools</h3>
          <p className="text-gray-600">Access to qualified candidates across all industries</p>
        </div>
      </div>
    </div>
  </div>
  <div className="relative">
    <div
      className="bg-cover bg-center rounded-xl w-full h-96"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1680296669146-b6c258cbc62d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D')", // Replace with a specific Unsplash image if needed
      }}
    />
    <motion.div
      className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-xl mb-2">97% Client Satisfaction</h3>
      <p>Based on our 2023 client survey results</p>
    </motion.div>
  </div>
</motion.div>

        </div>
      </section>

      {/* Choose How You Want to Work Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose how you want to work with us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible solutions tailored to your specific hiring needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <BarChart className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Staffing Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Need staffing solutions? We'll handle the details for you. Our team will find you the best available candidates in your specialization.
              </p>
              <ul className="mb-8 space-y-3">
                {['Finance and accounting', 'Administrative and customer support', 'Technology', 'Marketing and creative', 'Legal'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
            </motion.div>
            
            <motion.div 
              className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Settings className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Full-Service Consulting</h3>
              </div>
              <p className="mb-6 text-blue-100">
                For a broader approach, we've got you covered with Prointi, our full-service consulting business. We'll work with you to deliver integrated solutions.
              </p>
              <div className="bg-blue-800 p-5 rounded-lg mb-6">
                <h4 className="font-bold mb-2">Prointi Consulting Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1" size={18} />
                    <span>Strategic workforce planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1" size={18} />
                    <span>Talent acquisition transformation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1" size={18} />
                    <span>Compliance and risk management</span>
                  </li>
                </ul>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Double Your Placements Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="pattern-dots pattern-blue-500 pattern-opacity-100 pattern-size-4 w-full h-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              DOUBLE YOUR PLACEMENTS
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Find and place talent faster with our AI-powered platform
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div
    className="bg-cover bg-center rounded-xl w-full h-96"
    style={{
      backgroundImage: "url('https://www.shutterstock.com/image-photo/smart-logistics-global-business-concept-600nw-2498678197.jpg')", // Replace with specific Unsplash image URL if needed
    }}
  />
</motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-100 text-lg mb-8">
                Ceipal harnesses the power of AI to unify all your sources, enabling you to find and engage talent quickly and effectively, while gaining critical insights into your processes.
              </p>
              
              <div className="space-y-6">
                {[
                  "Elevate the quality of candidates as measured by your score card",
                  "Reduce time-to-submission by 70%",
                  "Improve the client and candidate experiences",
                  "Enable recruiters, managers, and executives to track vital business metrics"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start bg-blue-800/30 p-4 rounded-lg backdrop-blur-sm"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-500 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-white" size={18} />
                    </div>
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
          
            </motion.div>
          </div>
        </div>
      </section>

      {/* Adopt Quickly & Easily Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ADOPT QUICKLY & EASILY
            </motion.h2>
            <motion.h3 
              className="text-2xl text-blue-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Migrate seamlessly
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg mb-8">
                Ceipal technology is user-friendly, customized, and easy to adopt. We make it simple to improve your processes and grow your business.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Tailored ATS Solution", desc: "Meets your specific business needs" },
                  { title: "Built-in Integrations", desc: "Connect with 200+ systems and tools" },
                  { title: "Structured Migration", desc: "Smooth transition with minimal disruption" },
                  { title: "Premium Support", desc: "Highest-rated customer support in the industry" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              
            </motion.div>
            
            <motion.div
  className="relative"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <div
    className="bg-cover bg-center rounded-xl w-full h-96"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fHww')", // Replace with a specific Unsplash image if needed
    }}
  />

  <motion.div
    className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">165+</div>
      <div className="text-lg font-semibold text-gray-800">INTEGRATIONS</div>
    </div>
  </motion.div>
</motion.div>

          </div>
        </div>
      </section>

      {/* Increase Profitability Section */}
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div
          className="bg-cover bg-center rounded-xl w-full h-96"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fHww')", // Replace with a specific Unsplash image if needed
          }}
        />

        <motion.div
          className="absolute -top-6 -left-6 bg-blue-700 p-5 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-1">20%</div>
            <div className="text-sm">Business from sub-suppliers</div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -right-6 bg-green-600 p-5 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-1">40%</div>
            <div className="text-sm">Average cost reduction</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Increase Profitability</h2>
        <h3 className="text-2xl text-blue-300 mb-8">Efficiently manage sub-suppliers</h3>

        <p className="text-blue-100 mb-8">
          Up to 20% of your business can come from sub-suppliers. Ceipal Procurewise offers a strategic solution with a robust VMS that provides the structure and processes to manage all that data.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <Check className="text-green-400 mr-3 mt-1" size={20} />
            <span>Utilize automated, streamlined reporting and cost management tools</span>
          </div>
          <div className="flex items-start">
            <Check className="text-green-400 mr-3 mt-1" size={20} />
            <span>Effortlessly manage partners and sub-suppliers to grow your candidate pool and increase submissions</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Integration Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Integrate your key technology solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ceipal connects staffing and recruiting firms to productivity apps, vendor management, social media, job board solutions, and more with ease.
            </p>
          </div>
          
          {/* Horizontal Scrolling Logos */}
          <motion.div 
            className="flex overflow-x-hidden py-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {['Twilio', 'LinkedIn', 'iMocha', 'HelloVerify', 'Monster', 'TextToHire', 'Indeed', 'Glassdoor', 'Workday', 'Bullhorn', 'Jobvite', 'Greenhouse'].map((partner, index) => (
                <div key={index} className="mx-8 bg-white p-6 rounded-xl shadow-md flex items-center justify-center w-48 h-24">
                  <span className="font-semibold text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee2 whitespace-nowrap">
              {['Twilio', 'LinkedIn', 'iMocha', 'HelloVerify', 'Monster', 'TextToHire', 'Indeed', 'Glassdoor', 'Workday', 'Bullhorn', 'Jobvite', 'Greenhouse'].map((partner, index) => (
                <div key={index} className="mx-8 bg-white p-6 rounded-xl shadow-md flex items-center justify-center w-48 h-24">
                  <span className="font-semibold text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="text-center">
            <CTASection/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidateSourcing;