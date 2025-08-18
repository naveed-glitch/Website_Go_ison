import { motion } from 'framer-motion';
import type React from 'react';
import { useInView } from 'react-intersection-observer';

type TeamMember = {
  id: number;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
};

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      department: "Leadership",
      bio: "With over 20 years of experience in the staffing industry, Sarah founded Talent Bridge with a vision to revolutionize talent acquisition.",
      image: "https://images.unsplash.com/photo-1637009981125-89e30d29a627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FyYWglMjBKb2huc29ufGVufDB8fDB8fHww"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      department: "Technology",
      bio: "Michael leads our technology initiatives, driving innovation in our platform to enhance candidate matching and client experience.",
      image: "https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "VP of Talent Acquisition",
      department: "Operations",
      bio: "Elena oversees our global talent acquisition strategy, ensuring we connect the right talent with the right opportunities.",
      image: "https://plus.unsplash.com/premium_photo-1702508129569-ee6e0f9cacaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2FyYWglMjBKb2huc29ufGVufDB8fDB8fHww"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "VP of Client Success",
      department: "Client Services",
      bio: "David ensures our clients receive exceptional service and that we continuously meet and exceed their staffing needs.",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // Add more with unique image queries as needed
  ];

  return (
    <div ref={ref} className="py-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            The experienced team driving Talent Bridge's vision and success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm mb-4">{member.department}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="/team"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            See All Team Members
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;
