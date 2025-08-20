
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Call us",
      content: "Speak directly with our team",
      details: "+1 (312) 973-6111",
      action: "Call now"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email us",
      content: "Get in touch via email",
      details: "naveed@GoisOn.com",
      action: "Send email"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Visit us",
      content: "See our office location",
      details: "2908 Jerrie Lane, Glenview, IL 60025",
      action: "View on map"
    },
    
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl shadow-xl p-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Other ways to reach us</h2>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-blue-400 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="mr-4 mt-1">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
              <p className="text-slate-600 mt-1">{item.content}</p>
              <p className="text-slate-700 font-medium mt-2">{item.details}</p>
              <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors">
                {item.action}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
     
    </motion.div>
  );
};

export default ContactInfo;