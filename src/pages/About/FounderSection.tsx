
import { motion } from 'framer-motion';

const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A Letter from the Founder</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
          </div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-300/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start mb-8">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Victor</h3>
                <p className="text-blue-200">Founder & CEO</p>
              </div>
            </div>
            
            <div className="space-y-6 text-blue-50">
              <p>
                <span className="text-2xl font-serif mr-2">"</span>
                Dear Aviation Enthusiasts, Partners, and Friends,
              </p>
              
              <p>
                I am thrilled to welcome you to Consolidator, a company built on the belief that the aviation industry can be more efficient, innovative, and sustainable. As someone deeply passionate about both technology and aviation, I realized that the gap between where the industry stands today and where it could be was an opportunity one we were determined to seize.
              </p>
              
              <p>
                When we founded Consolidator, we envisioned a team of like-minded engineers and thinkers who shared a love for flight and a belief in the power of technology to transform industries; today, that dream has become a reality, and we are proud to be working alongside some of the brightest minds in aviation and technology.
              </p>
              
              <p>
                From our earliest days, we've focused on developing solutions that don't just address the challenges of today but anticipate the needs of tomorrow. We believe that innovation shouldn't just make aviation faster or cheaper—it should make it smarter, safer, and greener.
              </p>
              
              <p>
                But none of this would have been possible without the support of our partners, collaborators, and clients who trust us to bring real change to their operations. Together, we are shaping the future of aviation and I am excited to see where this journey will take us.
              </p>
              
              <p>
                To everyone who believes in the power of innovation and shares our passion for flight—thank you for being part of this journey.
              </p>
              
              <p className="mt-8">
                With gratitude,<br />
                <span className="text-xl font-bold">Victor</span><br />
                <span className="text-blue-200">founder@consolidator</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;