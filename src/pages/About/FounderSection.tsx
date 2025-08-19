
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
                <h3 className="text-2xl font-bold">Naveed Haq</h3>
                <p className="text-blue-200">Founder & CEO</p>
              </div>
            </div>
            
            <div className="space-y-6 text-blue-50">
              <p>
                <span className="text-2xl font-serif mr-2">"</span>
                Dear Partners, Clients, and Friends,
              </p>
              
              <p>
               I am honored to welcome you to Go Ison, a company founded on the belief that the staffing industry can be more efficient, innovative, and people-focused. With a deep passion for technology and business transformation, I saw an opportunity to bridge the gap between traditional hiring practices and the evolving needs of modern organizations—and that vision continues to guide us every day.
              </p>
              
              <p>
                From the very beginning, we set out to build a team of forward-thinking professionals who share not only expertise in recruitment but also a belief in the power of innovation to reshape industries. Today, I am proud to say that vision has become a reality, and we are fortunate to work alongside some of the brightest minds in staffing and workforce solutions.
              </p>
              
              <p>
                At Go Ison, our focus is on delivering solutions that don’t just meet today’s hiring challenges but anticipate the needs of tomorrow. For us, recruitment is not just about filling positions—it’s about helping businesses build smarter, stronger, and more sustainable teams.
              </p>
              
              <p>
                This journey would not have been possible without the trust and support of our partners, collaborators, and clients. Together, we are redefining how businesses connect with talent, and I am excited about the milestones ahead.
              </p>
              
              <p>
                To everyone who shares our passion for innovation and believes in the power of people—thank you for being part of this journey.
              </p>
              
              <p className="mt-8">
                With gratitude,<br />
                <span className="text-xl font-bold">Naveed Haq</span><br />
                <span className="text-blue-200">naveed@goison.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;