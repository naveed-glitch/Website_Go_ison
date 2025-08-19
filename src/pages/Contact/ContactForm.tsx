
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl p-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h2>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-slate-700 mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Your Full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-slate-700 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="topic" className="block text-slate-700 mb-2">Topic</label>
          <select 
            id="topic" 
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option>General Inquiry</option>
            <option>Hiring Needs</option>
            <option>Support</option>
            <option>Partnership</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-slate-700 mb-2">Message</label>
          <textarea 
            id="message" 
            rows={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="How can we help you?"
          />
        </div>
        
     
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;